'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function PreHome() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 md:p-24 relative overflow-hidden">
      {/* Background/LoFi feel decorative elements */}
      <div className="absolute top-10 left-10 opacity-20 hidden md:block">
        <div className="w-32 h-32 lofi-border rounded-full flex items-center justify-center text-[10px] font-lofi uppercase tracking-widest">
          StewardWorks
        </div>
      </div>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Logo Section (Center Left) */}
        <div className="flex justify-center md:justify-start">
          <div className="w-48 h-48 lofi-border flex items-center justify-center relative">
            <span className="text-2xl font-lofi tracking-tighter uppercase font-bold text-eden-green">
              Lit Hub
            </span>
            <div className="absolute -bottom-4 -right-4 bg-eden-beige px-2 text-[10px] font-lofi lofi-border">
              stewardworks.space
            </div>
          </div>
        </div>

        {/* Text Section (Center Right) */}
        <div className="flex flex-col space-y-4">
          <div>
            <h1 className="text-xl md:text-2xl font-lofi font-bold uppercase tracking-wide text-eden-green">
              {t('mission.phrase')}
            </h1>
            <p className="mt-4 text-sm md:text-base leading-relaxed max-w-md">
              {t('mission.body')}
            </p>
          </div>

          <div className="lofi-line" />

          <div className="text-[11px] md:text-[13px] font-lofi uppercase tracking-wider text-eden-earth">
            {t('credits')}
          </div>
        </div>
      </div>

      {/* Footer Section (Center Bottom) */}
      <div className="mt-16 md:mt-24">
        <Link href="/onboarding/language">
          <button className="lofi-button px-12 py-4 text-lg">
            {t('enter.site')}
          </button>
        </Link>
      </div>

      {/* LoFi visual accents */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-eden-green opacity-10" />
      <div className="absolute bottom-4 left-0 w-full h-[1px] bg-eden-green opacity-5" />
    </main>
  );
}
