import type { IncomingMessage, ServerResponse } from 'http';

interface SubscribeRequest extends IncomingMessage {
  body?: {
    email?: string;
    consent?: boolean | string;
  };
}

interface SubscribeResponse extends ServerResponse {
  status: (statusCode: number) => SubscribeResponse;
  json: (body: any) => SubscribeResponse;
}

export default async function handler(req: any, res: any) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { email, consent } = req.body || {};

  // 1. Validate email exists and has a basic email pattern
  if (!email || typeof email !== 'string' || !email.includes('@') || email.length < 5) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  // 2. Validate that consent checkbox is confirmed
  if (consent !== true && consent !== 'true') {
    return res.status(400).json({ error: 'Consent check is required' });
  }

  // 3. Read rapidmail credentials from environment variables
  const username = process.env.RAPIDMAIL_USER;
  const password = process.env.RAPIDMAIL_PASSWORD;
  const listId = process.env.RAPIDMAIL_LIST_ID;

  if (!username || !password || !listId) {
    console.error('[Subscribe API Error] Missing rapidmail environment configuration:', {
      hasUser: !!username,
      hasPass: !!password,
      hasList: !!listId,
    });
    return res.status(500).json({ error: 'Internal server configuration error' });
  }

  try {
    // 4. Send subscription request to rapidmail API v3
    // We add the `send_activationmail=yes` query parameter to trigger double opt-in (unconfirmed recipient + activation email).
    const rapidmailUrl = `https://apiv3.emailsys.net/v1/recipientlists/${listId}/recipients?send_activationmail=yes`;
    
    const credentialsBase64 = Buffer.from(`${username}:${password}`).toString('base64');

    const response = await fetch(rapidmailUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Basic ${credentialsBase64}`
      },
      body: JSON.stringify({
        email: email.trim()
      })
    });

    // 5. Handle rapidmail API responses
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`[Subscribe API Error] rapidmail API error (status ${response.status}):`, errorText);
      
      // If user is already subscribed or already exists, rapidmail may return 409 or another error.
      // We log it, but we can return a generic 400 error to the client.
      return res.status(400).json({ error: 'Subscription failed at rapidmail service' });
    }

    const data = await response.json();
    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('[Subscribe API Error] Subscription failed internally:', error);
    return res.status(500).json({ error: 'An unexpected internal error occurred' });
  }
}
