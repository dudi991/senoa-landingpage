import { X } from 'lucide-react';
import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyModal = ({ isOpen, onClose }: PrivacyModalProps) => {
  const { language } = useLanguage();

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-white overflow-y-auto animate-fade-in">
      {/* Top Navigation / Close Bar */}
      <div className="w-full px-8 py-8 flex justify-between items-center fixed top-0 left-0 bg-white/95 backdrop-blur-sm z-[10000] border-b border-primary/5">
        <span className="font-sans text-xl tracking-[0.15em] font-bold text-primary">
          SENOA
        </span>
        <button 
          onClick={onClose}
          className="flex items-center gap-2 font-sans text-[12px] tracking-[0.2em] font-bold text-primary/60 hover:text-primary transition-colors focus:outline-none cursor-pointer"
        >
          {language === 'de' ? 'SCHLIESSEN' : 'CLOSE'}
          <X className="w-4 h-4" strokeWidth={1.5} />
        </button>
      </div>

      {/* Content Container */}
      <div className="max-w-2xl mx-auto px-8 pt-32 pb-24 font-sans text-primary">
        <span className="font-sans text-[11px] tracking-[0.3em] font-semibold text-primary/40 uppercase mb-3 block">
          {language === 'de' ? 'Rechtliches' : 'Legal'}
        </span>
        <div className="w-12 h-[1px] bg-primary/20 mb-8"></div>
        
        <h1 className="font-serif text-4xl lg:text-5xl font-light text-primary mb-12">
          {language === 'de' ? 'Datenschutzerklärung' : 'Privacy Policy'}
        </h1>

        {language === 'de' ? (
          /* German Privacy Policy */
          <div className="space-y-10 text-[15px] text-primary/80 leading-relaxed font-light">
            {/* Section 1 */}
            <div>
              <h2 className="font-sans text-[13px] tracking-[0.15em] font-bold uppercase text-primary mb-3">
                1. Verantwortlicher
              </h2>
              <p className="mt-1">
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br /><br />
                <strong>SENOA</strong><br />
                Dominik Schwab<br />
                Wegäcker 11<br />
                91301 Forchheim<br />
                Deutschland<br /><br />
                Kontaktaufnahme ist über die Kontaktseite dieser Website möglich.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="font-sans text-[13px] tracking-[0.15em] font-bold uppercase text-primary mb-3">
                2. Allgemeine Hinweise zur Datenverarbeitung
              </h2>
              <p className="mt-1">
                Wir nehmen den Schutz deiner personenbezogenen Daten ernst. Personenbezogene Daten sind alle Informationen, mit denen du persönlich identifiziert werden kannst, zum Beispiel deine E-Mail-Adresse.<br /><br />
                Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung dieser Website, zur Kommunikation mit dir oder zur Durchführung unserer Waitlist erforderlich ist.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="font-sans text-[13px] tracking-[0.15em] font-bold uppercase text-primary mb-3">
                3. Besuch der Website
              </h2>
              <p className="mt-1">
                Beim Aufruf dieser Website können durch den Hosting-Anbieter automatisch technische Daten verarbeitet werden. Dazu können insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seiten, Referrer-URL, Browsertyp, Betriebssystem und ähnliche technische Informationen gehören.<br /><br />
                Die Verarbeitung dieser Daten erfolgt, um die Website technisch bereitzustellen, Stabilität und Sicherheit zu gewährleisten und Missbrauch zu verhindern.<br /><br />
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der sicheren und zuverlässigen Bereitstellung dieser Website.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="font-sans text-[13px] tracking-[0.15em] font-bold uppercase text-primary mb-3">
                4. Hosting über GitHub Pages
              </h2>
              <p className="mt-1">
                Diese Website wird über GitHub Pages bereitgestellt, einen Dienst der GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA.<br /><br />
                Beim Besuch der Website kann GitHub technische Zugriffsdaten verarbeiten, die für die Bereitstellung und Sicherheit der Website erforderlich sind.<br /><br />
                Weitere Informationen zur Datenverarbeitung durch GitHub findest du in der Datenschutzerklärung von GitHub.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="font-sans text-[13px] tracking-[0.15em] font-bold uppercase text-primary mb-3">
                5. Waitlist / E-Mail-Anmeldung
              </h2>
              <p className="mt-1">
                Auf unserer Website kannst du dich für die SENOA-Waitlist eintragen. Dabei verarbeiten wir deine E-Mail-Adresse, um dich über den Launch von SENOA, relevante Updates und ausgewählte Informationen rund um SENOA zu informieren.<br /><br />
                Die Anmeldung zur Waitlist erfolgt freiwillig.<br /><br />
                Rechtsgrundlage für die Verarbeitung ist deine Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.<br /><br />
                Du kannst deine Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen. Nutze dafür bitte die Kontaktseite dieser Website. Nach deinem Widerruf löschen wir deine E-Mail-Adresse aus der Waitlist, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="font-sans text-[13px] tracking-[0.15em] font-bold uppercase text-primary mb-3">
                6. Kontaktaufnahme
              </h2>
              <p className="mt-1">
                Wenn du über die Kontaktseite mit uns Kontakt aufnimmst, verarbeiten wir die von dir übermittelten Daten, um deine Anfrage zu bearbeiten.<br /><br />
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern deine Anfrage mit vorvertraglichen oder vertraglichen Maßnahmen zusammenhängt. In allen anderen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der Bearbeitung deiner Anfrage gemäß Art. 6 Abs. 1 lit. f DSGVO.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="font-sans text-[13px] tracking-[0.15em] font-bold uppercase text-primary mb-3">
                7. Cookies und Tracking
              </h2>
              <p className="mt-1">
                Wir verwenden auf dieser Website derzeit keine Cookies zu Analyse-, Marketing- oder Trackingzwecken.<br /><br />
                Sollten wir künftig Analyse- oder Marketingtools einsetzen, werden wir diese Datenschutzerklärung entsprechend aktualisieren und, soweit erforderlich, deine Einwilligung einholen.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="font-sans text-[13px] tracking-[0.15em] font-bold uppercase text-primary mb-3">
                8. Speicherdauer
              </h2>
              <p className="mt-1">
                Wir speichern personenbezogene Daten nur so lange, wie es für die jeweiligen Zwecke erforderlich ist.<br /><br />
                E-Mail-Adressen für die Waitlist speichern wir, bis du deine Einwilligung widerrufst oder der Zweck der Speicherung entfällt.<br /><br />
                Daten aus Kontaktanfragen speichern wir nur so lange, wie dies für die Bearbeitung deiner Anfrage erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="font-sans text-[13px] tracking-[0.15em] font-bold uppercase text-primary mb-3">
                9. Weitergabe von Daten
              </h2>
              <p className="mt-1">
                Eine Weitergabe deiner personenbezogenen Daten an Dritte erfolgt nur, wenn dies zur Bereitstellung der Website, zur Durchführung der Waitlist, zur Bearbeitung deiner Anfrage oder aufgrund gesetzlicher Verpflichtungen erforderlich ist.<br /><br />
                Eine darüber hinausgehende Weitergabe, ein Verkauf oder eine Vermietung personenbezogener Daten findet nicht statt.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="font-sans text-[13px] tracking-[0.15em] font-bold uppercase text-primary mb-3">
                10. Deine Rechte
              </h2>
              <p className="mt-1">
                Du hast im Rahmen der gesetzlichen Vorschriften jederzeit das Recht auf:<br /><br />
                Auskunft über deine gespeicherten personenbezogenen Daten<br />
                Berichtigung unrichtiger personenbezogener Daten<br />
                Löschung deiner personenbezogenen Daten<br />
                Einschränkung der Verarbeitung<br />
                Datenübertragbarkeit<br />
                Widerspruch gegen bestimmte Datenverarbeitungen<br />
                Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft<br /><br />
                Zur Ausübung deiner Rechte kannst du dich jederzeit über die Kontaktseite dieser Website an uns wenden.
              </p>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="font-sans text-[13px] tracking-[0.15em] font-bold uppercase text-primary mb-3">
                11. Beschwerderecht bei einer Aufsichtsbehörde
              </h2>
              <p className="mt-1">
                Du hast außerdem das Recht, dich bei einer Datenschutzaufsichtsbehörde zu beschweren, wenn du der Ansicht bist, dass die Verarbeitung deiner personenbezogenen Daten gegen die DSGVO verstößt.
              </p>
            </div>

            {/* Section 12 */}
            <div>
              <h2 className="font-sans text-[13px] tracking-[0.15em] font-bold uppercase text-primary mb-3">
                12. Aktualität dieser Datenschutzerklärung
              </h2>
              <p className="mt-1">
                Diese Datenschutzerklärung gilt ab Mai 2026.<br /><br />
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn sich die Website, eingesetzte Dienste oder rechtliche Anforderungen ändern.
              </p>
            </div>
          </div>
        ) : (
          /* English Privacy Policy */
          <div className="space-y-10 text-[15px] text-primary/80 leading-relaxed font-light">
            {/* Section 1 */}
            <div>
              <h2 className="font-sans text-[13px] tracking-[0.15em] font-bold uppercase text-primary mb-3">
                1. Controller
              </h2>
              <p className="mt-1">
                The controller responsible for data processing on this website is:<br /><br />
                <strong>SENOA</strong><br />
                Dominik Schwab<br />
                Wegäcker 11<br />
                91301 Forchheim<br />
                Germany<br /><br />
                You can contact us via the contact page of this website.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="font-sans text-[13px] tracking-[0.15em] font-bold uppercase text-primary mb-3">
                2. General Information on Data Processing
              </h2>
              <p className="mt-1">
                We take the protection of your personal data seriously. Personal data is any information that can be used to identify you personally, for example, your email address.<br /><br />
                We process personal data only to the extent necessary to provide this website, to communicate with you, or to manage our waitlist.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="font-sans text-[13px] tracking-[0.15em] font-bold uppercase text-primary mb-3">
                3. Website Visit
              </h2>
              <p className="mt-1">
                When you visit this website, the hosting provider may automatically process technical access data. This may include, in particular, the IP address, date and time of access, pages viewed, referrer URL, browser type, operating system, and similar technical information.<br /><br />
                The processing of this data is carried out to technically provide the website, ensure stability and security, and prevent abuse.<br /><br />
                The legal basis is Art. 6 para. 1 lit. f GDPR. Our legitimate interest lies in the secure and reliable provision of this website.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="font-sans text-[13px] tracking-[0.15em] font-bold uppercase text-primary mb-3">
                4. Hosting via GitHub Pages
              </h2>
              <p className="mt-1">
                This website is hosted via GitHub Pages, a service provided by GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA.<br /><br />
                When visiting the website, GitHub may process technical access data required for the provision and security of the website.<br /><br />
                For more information on data processing by GitHub, please refer to the GitHub Privacy Policy.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="font-sans text-[13px] tracking-[0.15em] font-bold uppercase text-primary mb-3">
                5. Waitlist / Email Sign-up
              </h2>
              <p className="mt-1">
                You can sign up for the SENOA waitlist on our website. We process your email address to inform you about the launch of SENOA, relevant updates, and selected information about SENOA.<br /><br />
                Signing up for the waitlist is voluntary.<br /><br />
                The legal basis for processing is your consent pursuant to Art. 6 para. 1 lit. a GDPR.<br /><br />
                You can withdraw your consent at any time with future effect. Please use the contact page of this website for this purpose. Upon withdrawal, we will delete your email address from the waitlist, unless statutory retention obligations apply.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="font-sans text-[13px] tracking-[0.15em] font-bold uppercase text-primary mb-3">
                6. Contacting Us
              </h2>
              <p className="mt-1">
                When you contact us via the contact page, we process the data you submit to handle your inquiry.<br /><br />
                The legal basis is Art. 6 para. 1 lit. b GDPR if your inquiry is related to pre-contractual or contractual measures. In all other cases, the processing is based on our legitimate interest in handling your inquiry pursuant to Art. 6 para. 1 lit. f GDPR.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="font-sans text-[13px] tracking-[0.15em] font-bold uppercase text-primary mb-3">
                7. Cookies and Tracking
              </h2>
              <p className="mt-1">
                We do not currently use any cookies for analysis, marketing, or tracking purposes on this website.<br /><br />
                Should we use analysis or marketing tools in the future, we will update this privacy policy accordingly and, where necessary, obtain your consent.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="font-sans text-[13px] tracking-[0.15em] font-bold uppercase text-primary mb-3">
                8. Storage Period
              </h2>
              <p className="mt-1">
                We store personal data only as long as necessary for the respective purposes.<br /><br />
                We store email addresses for the waitlist until you withdraw your consent or the purpose of storage no longer applies.<br /><br />
                We store data from contact inquiries only as long as necessary to handle your inquiry or as required by statutory retention obligations.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="font-sans text-[13px] tracking-[0.15em] font-bold uppercase text-primary mb-3">
                9. Data Disclosure
              </h2>
              <p className="mt-1">
                Your personal data will only be disclosed to third parties if this is necessary to provide the website, manage the waitlist, handle your inquiry, or due to statutory obligations.<br /><br />
                No further disclosure, sale, or rental of personal data takes place.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="font-sans text-[13px] tracking-[0.15em] font-bold uppercase text-primary mb-3">
                10. Your Rights
              </h2>
              <p className="mt-1">
                Within the framework of legal regulations, you have the right at any time to:<br /><br />
                Access your stored personal data<br />
                Rectify inaccurate personal data<br />
                Erasure of your personal data<br />
                Restriction of processing<br />
                Data portability<br />
                Object to specific data processing activities<br />
                Withdraw consent with future effect<br /><br />
                To exercise your rights, you can contact us at any time via the contact page of this website.
              </p>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="font-sans text-[13px] tracking-[0.15em] font-bold uppercase text-primary mb-3">
                11. Right to Lodge a Complaint with a Supervisory Authority
              </h2>
              <p className="mt-1">
                You also have the right to lodge a complaint with a data protection supervisory authority if you believe that the processing of your personal data violates the GDPR.
              </p>
            </div>

            {/* Section 12 */}
            <div>
              <h2 className="font-sans text-[13px] tracking-[0.15em] font-bold uppercase text-primary mb-3">
                12. Validity of this Privacy Policy
              </h2>
              <p className="mt-1">
                This privacy policy is valid as of May 2026.<br /><br />
                We reserve the right to adapt this privacy policy if the website, utilized services, or legal requirements change.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrivacyModal;
