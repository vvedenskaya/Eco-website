'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Palmtree } from 'lucide-react';

export default function EnvironmentalLiteracyPage() {
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
          <Palmtree size={48} />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-black text-steward-dark uppercase tracking-tighter">Environmental Literacy</h1>
        <p className="text-xl text-steward-dark/60 leading-relaxed max-w-2xl mx-auto">
          Resources and curriculum for building environmental knowledge. Explore our roadmap to understanding the unique ecology and challenges of the Imperial Valley.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-steward-dark/5 text-left">
              <div className="w-10 h-10 bg-steward-offwhite rounded-full mb-4" />
              <div className="h-4 bg-steward-dark/10 w-3/4 rounded mb-2" />
              <div className="h-3 bg-steward-dark/5 w-1/2 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
