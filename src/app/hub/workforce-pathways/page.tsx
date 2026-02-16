'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Map } from 'lucide-react';

export default function WorkforcePathwaysPage() {
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
          <Map size={48} />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-black text-steward-dark uppercase tracking-tighter">Workforce Pathways</h1>
        <p className="text-xl text-steward-dark/60 leading-relaxed max-w-2xl mx-auto">
          Career maps for environmental professions. Discover the skills and connections needed to secure high-quality jobs in the growing green economy of Southern California.
        </p>

        <div className="mt-12 relative h-96 bg-white rounded-3xl shadow-sm border border-steward-dark/5 overflow-hidden p-8">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, black 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
             <p className="text-steward-dark/40 font-black uppercase tracking-widest mb-4 text-center">Interactive Career Roadmap</p>
             <div className="w-64 h-[2px] bg-steward-dark/10" />
          </div>
        </div>
      </div>
    </div>
  );
}
