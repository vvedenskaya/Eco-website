'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { Plus } from 'lucide-react';

export default function OnboardingQuestions() {
  const { t } = useLanguage();
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    name: '',
    residency: '',
    learnerType: '',
    dreamJob: ''
  });

  const handleSaveProgress = () => {
    alert('Progress saved to your email!');
  };

  return (
    <main className="min-h-screen bg-white/30 backdrop-blur-[2px] flex flex-col relative z-10 font-sans">
      {/* Header - Dark theme as per reference */}
      <header className="bg-[#2D3748] px-4 md:px-8 py-3 flex justify-between items-center sticky top-0 z-50 shadow-md">
        {/* 1. Logo (SW blue circle, link to pg 5) */}
        <div 
          className="w-10 h-10 bg-[#4D8AC9] rounded-full flex items-center justify-center font-black text-white text-sm cursor-pointer hover:scale-105 transition-transform" 
          onClick={() => router.push('/hub')}
        >
          SW
        </div>
        
        {/* 2. Text (Onboarding Questions, center top) */}
        <h1 className="text-lg md:text-xl font-bold text-white tracking-tight">
          Onboarding Questions
        </h1>
        
        {/* 3. Button (Save Progress, top right - Green) */}
        <button 
          onClick={handleSaveProgress}
          className="bg-[#48BB78] hover:bg-[#38A169] text-white px-4 py-1.5 rounded-md text-sm font-bold shadow-sm transition-all active:scale-95"
        >
          Save Progress
        </button>
      </header>

      {/* Body */}
      <div className="max-w-xl mx-auto w-full flex-1 flex flex-col space-y-10 py-10 px-6">
        
        {/* 1. Photo upload for profile */}
        <section className="flex flex-col items-center space-y-2">
          <div className="w-28 h-28 bg-[#E2E8F0] border-2 border-[#4D8AC9] rounded-full flex flex-col items-center justify-center text-[#4D8AC9] cursor-pointer hover:bg-[#EDF2F7] transition-colors relative group overflow-hidden">
            <Plus size={32} />
            <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
          </div>
          <span className="text-[10px] font-bold text-[#718096] uppercase">Upload Photo</span>
        </section>

        {/* Questions */}
        <div className="space-y-10">
          {/* 2. Name Question */}
          <div className="space-y-3 text-center">
            <label className="block space-y-1">
              <span className="text-xl font-bold text-[#1A202C] block">Name</span>
              {/* Subtext 1 */}
              <span className="text-[11px] text-[#718096] block font-medium">
                (Optional) Real Name Required for account recovery only
              </span>
            </label>
            {/* 3. Text Answer field */}
            <input 
              type="text" 
              className="w-full bg-white border border-[#E2E8F0] rounded-lg p-3 text-center focus:outline-none focus:ring-2 focus:ring-[#4D8AC9]/20 focus:border-[#4D8AC9] transition-all font-medium text-[#2D3748]"
              placeholder="Your name"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          {/* 4. Residency Question */}
          <div className="space-y-4 text-center">
            <label className="block">
              <span className="text-xl font-bold text-[#1A202C] block leading-tight">
                How long have you called Imperial County home?
              </span>
            </label>
            {/* 5. Multiple choice box Answer field */}
            <div className="space-y-2 max-w-sm mx-auto">
              {[
                { id: 'less-1', label: 'Less than a year' },
                { id: '1-5', label: '1-5 years' },
                { id: 'more-5', label: '5 years or more' },
                { id: 'multi', label: 'Multigenerational' }
              ].map((choice) => (
                <button 
                  key={choice.id}
                  onClick={() => setFormData({...formData, residency: choice.id})}
                  className={`w-full flex items-center p-3 border rounded-lg transition-all ${
                    formData.residency === choice.id 
                    ? 'border-[#4D8AC9] bg-[#EBF8FF] text-[#2B6CB0] font-bold ring-1 ring-[#4D8AC9]' 
                    : 'border-[#E2E8F0] bg-white text-[#4A5568] hover:border-[#CBD5E0]'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center mr-3 ${
                    formData.residency === choice.id ? 'border-[#4D8AC9] bg-white' : 'border-[#E2E8F0]'
                  }`}>
                    {formData.residency === choice.id && <div className="w-2 h-2 bg-[#4D8AC9] rounded-full" />}
                  </div>
                  <span className="text-sm">{choice.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 6. Learner Question */}
          <div className="space-y-3 text-center">
            <label className="block">
              <span className="text-xl font-bold text-[#1A202C] block">What type of learner are you?</span>
            </label>
            {/* 7. Text Answer field */}
            <input 
              type="text" 
              className="w-full bg-white border border-[#E2E8F0] rounded-lg p-3 text-center focus:outline-none focus:ring-2 focus:ring-[#4D8AC9]/20 focus:border-[#4D8AC9] transition-all font-medium text-[#2D3748]"
              placeholder="e.g. Visual, Hands-on"
              onChange={(e) => setFormData({...formData, learnerType: e.target.value})}
            />
          </div>

          {/* 8. Dream Job Question */}
          <div className="space-y-3 text-center">
            <label className="block">
              <span className="text-xl font-bold text-[#1A202C] block">What is your dream Eco job?</span>
            </label>
            {/* 9. Text Answer field (TextArea for more space) */}
            <textarea 
              rows={4}
              className="w-full bg-white border border-[#E2E8F0] rounded-lg p-3 text-center focus:outline-none focus:ring-2 focus:ring-[#4D8AC9]/20 focus:border-[#4D8AC9] transition-all font-medium text-[#2D3748] resize-none"
              placeholder="Tell us about your dream job..."
              onChange={(e) => setFormData({...formData, dreamJob: e.target.value})}
            />
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="flex justify-center pt-8 pb-10">
          <button 
            onClick={() => router.push('/onboarding/legal')}
            className="w-full max-w-xs py-4 bg-[#4D8AC9] hover:bg-[#3D7AB9] text-white font-black rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-95 uppercase tracking-widest text-sm"
          >
            Continue
          </button>
        </div>
      </div>
    </main>
  );
}
