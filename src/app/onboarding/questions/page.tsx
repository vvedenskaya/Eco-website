'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { Plus, Check } from 'lucide-react';

export default function OnboardingQuestions() {
  const { t } = useLanguage();
  const router = useRouter();
  
  // State for all 10 questions
  const [answers, setAnswers] = useState<Record<number, string | string[]>>({
    1: '', 2: [], 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '', 10: []
  });

  const questions = [
    { id: 1, required: true, type: 'single' },
    { id: 2, required: true, type: 'multiple' },
    { id: 3, required: true, type: 'single' },
    { id: 4, required: true, type: 'single' },
    { id: 5, required: true, type: 'single' },
    { id: 6, required: true, type: 'single' },
    { id: 7, required: true, type: 'single' },
    { id: 8, required: false, type: 'single' },
    { id: 9, required: false, type: 'single' },
    { id: 10, required: false, type: 'multiple' },
  ];

  const handleSingleSelect = (qId: number, option: string) => {
    setAnswers(prev => ({ ...prev, [qId]: option }));
  };

  const handleMultiSelect = (qId: number, option: string) => {
    setAnswers(prev => {
      const current = prev[qId] as string[];
      if (current.includes(option)) {
        return { ...prev, [qId]: current.filter(o => o !== option) };
      } else {
        return { ...prev, [qId]: [...current, option] };
      }
    });
  };

  const isComplete = questions
    .filter(q => q.required)
    .every(q => {
      const ans = answers[q.id];
      return Array.isArray(ans) ? ans.length > 0 : ans !== '';
    });

  return (
    <div className="min-h-screen bg-steward-offwhite flex flex-col relative z-10 font-exo">
      <header className="bg-steward-dark px-4 md:px-8 py-3 flex justify-between items-center sticky top-0 z-50 shadow-md">
        <div 
          className="w-10 h-10 bg-steward-blue rounded-full flex items-center justify-center font-black text-white text-sm cursor-pointer hover:scale-105 transition-transform" 
          onClick={() => router.push('/hub')}
        >
          SW
        </div>
        <h1 className="text-lg md:text-xl font-bold text-white tracking-tight">
          {t('onboarding.title')}
        </h1>
        <button 
          onClick={() => alert('Progress saved!')}
          className="bg-steward-green hover:bg-steward-orange text-white px-4 py-1.5 rounded-md text-sm font-bold shadow-sm transition-all active:scale-95"
        >
          {t('onboarding.save')}
        </button>
      </header>

      <div className="max-w-2xl mx-auto w-full flex-1 flex flex-col space-y-12 py-10 px-6">
        <section className="flex flex-col items-center space-y-2">
          <div className="w-28 h-28 bg-white border-2 border-steward-blue rounded-full flex flex-col items-center justify-center text-steward-blue cursor-pointer hover:bg-steward-cream transition-colors relative group overflow-hidden shadow-inner">
            <Plus size={32} />
            <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
          </div>
          <span className="text-[10px] font-bold text-steward-gold uppercase">Upload Photo</span>
        </section>

        <div className="space-y-16">
          {questions.map((q) => {
            const options = t(`onboarding.q${q.id}.options`).split(',');
            const currentAnswer = answers[q.id];

            return (
              <div key={q.id} className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="bg-steward-blue text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                      {q.id}
                    </span>
                    <h2 className="text-xl font-bold text-steward-dark leading-tight">
                      {t(`onboarding.q${q.id}.title`)}
                    </h2>
                  </div>
                  <span className={`text-[10px] font-black uppercase tracking-widest ${q.required ? 'text-steward-orange' : 'text-steward-gold/50'}`}>
                    {q.required ? t('onboarding.required') : t('onboarding.optional')}
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {options.map((option, idx) => {
                    const isSelected = Array.isArray(currentAnswer) 
                      ? currentAnswer.includes(option) 
                      : currentAnswer === option;

                    return (
                      <button
                        key={idx}
                        onClick={() => q.type === 'single' ? handleSingleSelect(q.id, option) : handleMultiSelect(q.id, option)}
                        className={`group flex items-center p-4 border-2 rounded-xl transition-all text-left ${
                          isSelected 
                          ? 'border-steward-blue bg-steward-cream text-steward-blue shadow-md' 
                          : 'border-steward-gold/10 bg-white text-steward-dark/70 hover:border-steward-gold'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-md border-2 mr-4 flex items-center justify-center transition-colors ${
                          isSelected ? 'bg-steward-blue border-steward-blue' : 'border-steward-gold/20'
                        }`}>
                          {isSelected && <Check size={14} className="text-white" />}
                        </div>
                        <span className={`text-sm font-medium ${isSelected ? 'font-bold' : ''}`}>
                          {option}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center pt-12 pb-20">
          <button 
            disabled={!isComplete}
            onClick={() => router.push('/onboarding/legal')}
            className={`w-full max-w-sm py-5 rounded-2xl shadow-xl transition-all duration-300 font-black uppercase tracking-widest text-base ${
              isComplete 
              ? 'bg-steward-blue hover:bg-steward-orange text-white hover:scale-[1.02] active:scale-95' 
              : 'bg-steward-gold/20 text-steward-gold/40 cursor-not-allowed opacity-50'
            }`}
          >
            {t('onboarding.continue')}
          </button>
        </div>
      </div>
    </div>
  );
}
