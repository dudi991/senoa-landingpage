import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Preloader = () => {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(true);
  const [render, setRender] = useState(() => {
    // Check if the preloader has already been shown in this session
    const shown = sessionStorage.getItem('hespyra_preloader_shown');
    return !shown;
  });

  useEffect(() => {
    if (!render) return;

    // Mark as shown in sessionStorage so it doesn't appear on reloads in the same session
    sessionStorage.setItem('hespyra_preloader_shown', 'true');

    // Keep fully visible for 2000ms (2.0 seconds) to ensure comfortable reading of both lines
    const fadeTimer = setTimeout(() => {
      setVisible(false);
    }, 2000);

    // Completely unmount/remove the component from DOM after the 1500ms fade-out transition finishes (total 3500ms)
    const destroyTimer = setTimeout(() => {
      setRender(false);
    }, 3500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(destroyTimer);
    };
  }, [render]);

  if (!render) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-[#0B0D14] flex flex-col items-center justify-center preloader-transition select-none pointer-events-none ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Self-contained CSS for the slow breathing and elegant slow fade-out */}
      <style>{`
        @keyframes slow-breath {
          0%, 100% { opacity: 0.65; }
          50% { opacity: 1; }
        }
        .animate-slow-breath {
          animation: slow-breath 4.5s ease-in-out infinite;
        }
        .preloader-transition {
          transition: opacity 1500ms cubic-bezier(0.25, 1, 0.5, 1);
        }
      `}</style>

      <div className="flex flex-col items-center justify-center text-center px-6">
        {/* Brand Name - Elegant Serif in gold/cream tones to reflect HESPYRA Hallmark styling */}
        <span className="font-sans text-[20px] sm:text-[22px] tracking-[0.25em] font-semibold text-white/95 uppercase mb-4 leading-none">
          HESPYRA
        </span>

        {/* Poetic Subtitle - Slow breathing opacity (65% to 100%) */}
        <span className="font-sans text-[11px] sm:text-[12px] tracking-[0.2em] font-light text-white/60 uppercase animate-slow-breath">
          {t('preloader.subtitle')}
        </span>
      </div>
    </div>
  );
};

export default Preloader;

