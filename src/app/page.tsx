'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function PreHome() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden">
      <div className="w-full max-w-6xl z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* 1. Logo Section (Center Left) */}
        <div className="md:col-span-5 flex justify-center md:justify-start">
          <Link href="/hub" className="group">
            <div className="relative w-72 h-72 md:w-96 md:h-96 transition-transform duration-700 group-hover:scale-[1.02]">
              <Image 
                src="/logo 1.jpg" 
                alt="StewardWorks Logo" 
                fill
                style={{ objectFit: 'contain' }}
                priority
                className="drop-shadow-2xl"
              />
              {/* Subtle borderless URL label */}
              <div className="absolute -bottom-8 left-0 text-[10px] font-lofi tracking-[0.5em] uppercase opacity-30 group-hover:opacity-60 transition-opacity whitespace-nowrap">
                stewardworks.space
              </div>
            </div>
          </Link>
        </div>

        {/* Text Section (Center Right) */}
        <div className="md:col-span-7 flex flex-col space-y-8 text-eden-green">
          {/* 2. Mission Phrase (Numen Aquae) - Top Right */}
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-sans font-black uppercase tracking-tighter leading-none animate-in fade-in slide-in-from-right-10 duration-1000">
              {t('mission.phrase')}
            </h1>
            <div className="h-[2px] w-24 bg-eden-green/20" />
          </div>

          {/* 3. Mission Statement - Center Right below phrase */}
          <div className="max-w-xl animate-in fade-in slide-in-from-right-10 duration-1000 delay-300">
            <p className="text-base md:text-lg font-sans leading-relaxed tracking-tight font-medium opacity-90">
              {t('mission.body')}
            </p>
          </div>

          {/* 4. Horizontal Line element */}
          <div className="w-full h-[1px] bg-eden-green/20" />

          {/* 5. Credits - Center Right below line */}
          <div className="flex flex-col space-y-4 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-500">
            <p className="text-[10px] font-lofi uppercase tracking-[0.3em] text-eden-earth">
              {t('credits')}
            </p>
            <div className="relative w-64 h-20 grayscale opacity-40 hover:opacity-100 transition-all duration-500">
              <Image 
                src="/partner_logo_strip_current.jpg" 
                alt="Partner Logos" 
                fill
                style={{ objectFit: 'contain', objectPosition: 'left' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 6. Button (Center Bottom) */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20">
        <Link href="/onboarding/language">
          <button className="group relative overflow-hidden lofi-button px-20 py-5 text-xl font-bold tracking-[0.2em] transition-all duration-300 hover:bg-eden-green hover:text-eden-beige bg-white">
            <span className="relative z-10">{t('enter.site')}</span>
            <div className="absolute inset-0 bg-eden-green transform translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
          </button>
        </Link>
      </div>

      {/* Post-modern background accents */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] right-[5%] text-[12vw] font-black opacity-[0.03] select-none uppercase tracking-tighter">
          Steward
        </div>
        <div className="absolute bottom-[20%] left-[2%] text-[8vw] font-black opacity-[0.02] select-none uppercase tracking-tighter -rotate-90">
          Resilience
        </div>
      </div>
    </main>
  );
}
