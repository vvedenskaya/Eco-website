'use client';

import { useRouter } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';

export default function LanguageOnboarding() {
  const { setLanguage, t } = useLanguage();
  const router = useRouter();

  const handleLanguageSelect = (lang: 'en' | 'es') => {
    setLanguage(lang);
    router.push('/onboarding/questions');
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-eden-beige">
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-center space-y-12 md:space-y-0 relative">
        
        {/* English Section (Left) */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-lofi uppercase tracking-tight text-eden-green">
              {t('welcome')}
            </h2>
            <p className="text-sm font-lofi uppercase tracking-widest text-eden-earth">
              {t('onboard.en')}
            </p>
          </div>
          <button 
            onClick={() => handleLanguageSelect('en')}
            className="lofi-button px-10 py-3"
          >
            {t('onboard.button.en')}
          </button>
        </div>

        {/* Divider Section (Center) */}
        <div className="hidden md:flex h-64 items-center">
          <div className="lofi-vertical-line" />
        </div>
        <div className="md:hidden w-full px-12">
          <div className="lofi-line" />
        </div>

        {/* Spanish Section (Right) */}
        <div className="flex-1 flex flex-col items-center md:items-end text-center md:text-right space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-lofi uppercase tracking-tight text-eden-green">
              {t('welcome.es')}
            </h2>
            <p className="text-sm font-lofi uppercase tracking-widest text-eden-earth">
              {t('onboard.es')}
            </p>
          </div>
          <button 
            onClick={() => handleLanguageSelect('es')}
            className="lofi-button px-10 py-3"
          >
            {t('onboard.button.es')}
          </button>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 text-[10px] font-lofi opacity-20 hidden md:block">
          STEP_01 / LANGUAGE_SELECTION
        </div>
      </div>
    </main>
  );
}
