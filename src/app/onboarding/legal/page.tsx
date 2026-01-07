'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { Save, Check } from 'lucide-react';

export default function LegalNotice() {
  const { t } = useLanguage();
  const router = useRouter();
  const [accepted, setAccepted] = useState(false);

  const handleSaveProgress = () => {
    alert('Progress saved to your email!');
  };

  return (
    <main className="min-h-screen bg-eden-beige p-4 md:p-8 flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center mb-12">
        <div className="w-12 h-12 lofi-border flex items-center justify-center font-lofi font-bold text-eden-green cursor-pointer" onClick={() => router.push('/')}>
          LH
        </div>
        <h1 className="text-sm font-lofi uppercase tracking-widest text-eden-earth">
          Legal Notice
        </h1>
        <button 
          onClick={handleSaveProgress}
          className="lofi-button flex items-center gap-2 text-[10px]"
        >
          <Save size={14} />
          Save Progress
        </button>
      </header>

      {/* Body */}
      <div className="max-w-3xl mx-auto w-full flex-1 flex flex-col space-y-8 pb-24">
        
        {/* Legal Text Area */}
        <div className="bg-white/50 lofi-border p-6 md:p-10 h-64 overflow-y-auto font-lofi text-sm leading-relaxed text-eden-green">
          <p className="mb-4 font-bold uppercase">Terms and Conditions of Use</p>
          <p className="mb-4">
            By using the Lit Hub platform, you agree to participate in our environmental career roadmap program. 
            All data collected during the onboarding process is used solely for the purpose of helping you identify 
            and track your educational and career goals.
          </p>
          <p className="mb-4">
            We value your privacy and data security. Your information will not be shared with third parties 
            without your explicit consent, except as required to fulfill the program objectives (e.g., connecting 
            you with mentors or job opportunities).
          </p>
          <p className="mb-4">
            The resources provided on this site are for educational purposes. StewardWorks and Nureaum are not 
            responsible for any third-party content or external links provided within the roadmap.
          </p>
          <p>
            [Insert full legal terms here as provided by StewardWorks]
          </p>
        </div>

        {/* Action Area */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-4">
          {/* Signature/Accept Button */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <button 
              onClick={() => setAccepted(!accepted)}
              className={`flex items-center gap-3 px-6 py-4 lofi-border transition-all duration-200 ${accepted ? 'bg-eden-green text-eden-beige' : 'bg-white hover:bg-eden-beige'}`}
            >
              <div className={`w-5 h-5 lofi-border flex items-center justify-center ${accepted ? 'bg-eden-beige text-eden-green' : 'bg-white'}`}>
                {accepted && <Check size={16} />}
              </div>
              <span className="font-lofi uppercase tracking-wider text-sm">
                Accept Terms & Sign
              </span>
            </button>
            <p className="text-[9px] font-lofi uppercase text-eden-earth italic px-1">
              * By clicking, you agree to the terms listed above
            </p>
          </div>

          {/* Continue Button */}
          <button 
            disabled={!accepted}
            onClick={() => router.push('/hub')}
            className={`lofi-button px-14 py-4 text-lg ${!accepted ? 'opacity-30 cursor-not-allowed' : 'opacity-100'}`}
          >
            Continue
          </button>
        </div>
      </div>

      {/* LoFi visual accents */}
      <div className="absolute top-1/2 left-4 w-1 h-24 bg-eden-green opacity-5 hidden lg:block" />
      <div className="absolute top-1/2 right-4 w-1 h-24 bg-eden-green opacity-5 hidden lg:block" />
    </main>
  );
}
