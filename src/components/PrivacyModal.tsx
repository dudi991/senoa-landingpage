import { X } from 'lucide-react';
import { useEffect } from 'react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyModal = ({ isOpen, onClose }: PrivacyModalProps) => {
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
          SCHLIESSEN
          <X className="w-4 h-4" strokeWidth={1.5} />
        </button>
      </div>

      {/* Content Container */}
      <div className="max-w-2xl mx-auto px-8 pt-32 pb-24 font-sans text-primary">
        <span className="font-sans text-[11px] tracking-[0.3em] font-semibold text-primary/40 uppercase mb-3 block">
          Rechtliches
        </span>
        <div className="w-12 h-[1px] bg-primary/20 mb-8"></div>
        
        <h1 className="font-serif text-4xl lg:text-5xl font-light text-primary mb-12">
          Datenschutzerklärung
        </h1>

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
      </div>
    </div>
  );
};

export default PrivacyModal;
