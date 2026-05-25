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

    // 800ms visible, then start the 400ms fade-out transition (total ~1.2s lifecycle)
    const fadeTimer = setTimeout(() => {
      setVisible(false);
    }, 800);

    // Completely unmount/remove the component from DOM after the transition finishes
    const destroyTimer = setTimeout(() => {
      setRender(false);
    }, 1200);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(destroyTimer);
    };
  }, [render]);

  if (!render) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-[#0B0D14] flex flex-col items-center justify-center transition-opacity duration-500 ease-out select-none pointer-events-none ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Self-contained CSS for the slow breathing animation */}
      <style>{`
        @keyframes slow-breath {
          0%, 100% { opacity: 0.65; }
          50% { opacity: 1; }
        }
        .animate-slow-breath {
          animation: slow-breath 4.5s ease-in-out infinite;
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
