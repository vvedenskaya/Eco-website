'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { Camera, Save } from 'lucide-react';

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
    // Logic for "Save by email" would go here
    alert('Progress saved to your email!');
  };

  return (
    <main className="min-h-screen bg-eden-beige p-4 md:p-8 flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center mb-12">
        <div className="w-12 h-12 lofi-border flex items-center justify-center font-lofi font-bold text-eden-green cursor-pointer" onClick={() => router.push('/')}>
          LH
        </div>
        <h1 className="text-sm font-lofi uppercase tracking-widest text-eden-earth hidden md:block">
          Onboarding Questions
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
      <div className="max-w-2xl mx-auto w-full flex-1 flex flex-col space-y-12 pb-24">
        
        {/* Photo Upload */}
        <section className="flex flex-col items-center space-y-4">
          <div className="w-32 h-32 lofi-border rounded-full flex flex-col items-center justify-center text-eden-earth bg-white/50 cursor-pointer hover:bg-white transition-colors relative group">
            <Camera size={32} />
            <span className="text-[10px] uppercase font-lofi mt-2">Upload</span>
            <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
          </div>
          <p className="text-[10px] font-lofi uppercase text-eden-earth">Profile Photo (Optional)</p>
        </section>

        {/* Questions */}
        <div className="space-y-10">
          {/* Name */}
          <div className="space-y-4">
            <label className="block text-center space-y-1">
              <span className="text-lg font-lofi uppercase tracking-tight text-eden-green block">What is your name?</span>
              <span className="text-[10px] font-lofi text-eden-earth block italic">(Optional) Real name only required for account recovery</span>
            </label>
            <input 
              type="text" 
              className="w-full bg-transparent border-b lofi-border border-x-0 border-t-0 p-2 text-center focus:outline-none focus:border-eden-green font-lofi"
              placeholder="Type here..."
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          {/* Residency MCQ */}
          <div className="space-y-4">
            <label className="block text-center">
              <span className="text-lg font-lofi uppercase tracking-tight text-eden-green block">How long have you called Imperial County home?</span>
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { id: 'less-1', label: '< 1 year' },
                { id: '1-5', label: '1-5 years' },
                { id: 'more-5', label: '5+ years' },
                { id: 'multi', label: 'Multigenerational' }
              ].map((choice) => (
                <button 
                  key={choice.id}
                  onClick={() => setFormData({...formData, residency: choice.id})}
                  className={`lofi-button text-xs ${formData.residency === choice.id ? 'bg-eden-green text-eden-beige' : ''}`}
                >
                  {choice.label}
                </button>
              ))}
            </div>
          </div>

          {/* Learner Type */}
          <div className="space-y-4">
            <label className="block text-center">
              <span className="text-lg font-lofi uppercase tracking-tight text-eden-green block">What type of learner are you?</span>
            </label>
            <input 
              type="text" 
              className="w-full bg-transparent border-b lofi-border border-x-0 border-t-0 p-2 text-center focus:outline-none focus:border-eden-green font-lofi"
              placeholder="Visual, hands-on, etc..."
              onChange={(e) => setFormData({...formData, learnerType: e.target.value})}
            />
          </div>

          {/* Dream Job */}
          <div className="space-y-4">
            <label className="block text-center">
              <span className="text-lg font-lofi uppercase tracking-tight text-eden-green block">What is your dream Eco job?</span>
            </label>
            <input 
              type="text" 
              className="w-full bg-transparent border-b lofi-border border-x-0 border-t-0 p-2 text-center focus:outline-none focus:border-eden-green font-lofi"
              placeholder="Solar technician, conservationist, etc..."
              onChange={(e) => setFormData({...formData, dreamJob: e.target.value})}
            />
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="flex justify-center pt-8">
          <button 
            onClick={() => router.push('/onboarding/legal')}
            className="lofi-button px-12 py-3"
          >
            Continue
          </button>
        </div>
      </div>
    </main>
  );
}
