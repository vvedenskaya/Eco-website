'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Star, User } from 'lucide-react';

export default function MyProfilePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-steward-offwhite p-8 font-exo">
      <button 
        onClick={() => router.back()}
        className="flex items-center gap-2 text-steward-dark hover:text-steward-blue transition-colors mb-12"
      >
        <ArrowLeft size={20} />
        <span className="font-bold uppercase tracking-widest text-sm">Back to Hub</span>
      </button>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-[40px] shadow-xl overflow-hidden border border-steward-dark/5">
          <div className="bg-steward-dark p-12 text-center text-white relative">
            <div className="w-32 h-32 bg-steward-orange rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-white shadow-lg overflow-hidden">
               <User size={64} className="text-white opacity-50" />
            </div>
            <h1 className="text-3xl font-black uppercase tracking-tight">Steward Candidate</h1>
            <p className="text-white/60 font-bold uppercase tracking-widest text-sm mt-2">Imperial Valley Member</p>
          </div>
          
          <div className="p-12 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xs font-black text-steward-dark/30 uppercase tracking-[0.2em]">Learning Style</h3>
                <div className="p-4 bg-steward-offwhite rounded-xl font-bold text-steward-dark">
                  Visual & Hands-on
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xs font-black text-steward-dark/30 uppercase tracking-[0.2em]">Dream Job</h3>
                <div className="p-4 bg-steward-offwhite rounded-xl font-bold text-steward-dark">
                  Environmental Tech
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xs font-black text-steward-dark/30 uppercase tracking-[0.2em]">Badges Earned</h3>
              <div className="flex gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center text-steward-dark shadow-md opacity-20">
                    <Star size={24} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
