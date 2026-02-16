'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Users } from 'lucide-react';

export default function CommunityListeningPage() {
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

      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="bg-[#FFD700] w-24 h-24 rounded-2xl flex items-center justify-center text-steward-dark shadow-xl mx-auto mb-6">
          <Users size={48} />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-black text-steward-dark uppercase tracking-tighter">Community Listening Sessions</h1>
        <p className="text-xl text-steward-dark/60 leading-relaxed max-w-2xl mx-auto">
          Recordings and notes space for listening sessions. This area will feature 3 recording sessions and documentation from our community engagements.
        </p>

        <div className="mt-12 p-12 border-4 border-dashed border-steward-dark/10 rounded-3xl">
          <p className="text-steward-dark/40 font-bold uppercase tracking-widest">Archive Coming Soon</p>
        </div>
      </div>
    </div>
  );
}
