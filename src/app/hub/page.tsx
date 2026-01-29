'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { 
  FileText, 
  UserCircle,
  Users,
  Cpu,
  HelpCircle
} from 'lucide-react';
import Image from 'next/image';

export default function HubPage() {
  const { t } = useLanguage();
  const router = useRouter();
  const [selectedTopic, setSelectedTopic] = useState<string>('getting-started');
  const [statusMessage, setStatusMessage] = useState('Exploring the environmental literacy hub...');

  const topics = [
    { id: 'env-literacy', title: 'Environmental Literacy', icon: <Users size={32} />, path: '/hub/environmental-literacy', color: 'bg-steward-blue' },
    { id: 'bilingual-content', title: 'Bilingual Content', icon: <FileText size={32} />, path: '/hub/bilingual-content', color: 'bg-steward-orange' },
    { id: 'workforce-pathways', title: 'Workforce Pathways', icon: <Cpu size={32} />, path: '/hub/workforce-pathways', color: 'bg-steward-green' },
    { id: 'tech-support', title: 'Help Desk & FAQ', icon: <HelpCircle size={32} />, path: '/onboarding/bulletin', color: 'bg-steward-gold' },
  ];

  return (
    <div className="laptop-frame-wrapper px-4 pt-12 min-h-screen flex items-end justify-center overflow-hidden font-exo" style={{ backgroundColor: '#FEFAE0' }}>
      {/* Visual Desk Surface */}
      <div className="desk-surface z-0" style={{ backgroundColor: '#DB9B2F', opacity: 0.1 }} />
      
      <div className="laptop-outer-shell max-w-6xl w-full relative mb-[-30px] md:mb-[-60px] z-20">
        {/* Upper Part: Screen */}
        <div className="laptop-bezel relative" style={{ borderColor: '#FFFFFF', backgroundColor: '#FFFFFF' }}>
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] font-bold text-steward-dark opacity-30 uppercase tracking-[0.5em]">
            StewardWorks Portable
          </div>
          
          <div className="laptop-screen-content" style={{ borderColor: '#F3F4F6' }}>
            <div className="crt-overlay" />
            
            <div className="w-full h-full bg-[#21282E] flex flex-col relative z-10 overflow-hidden font-exo">
              {/* OS Header */}
              <div className="bg-steward-dark p-3 flex justify-between items-center border-b border-white/10 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest ml-2">StewardOS v1.0</span>
                </div>
                <div className="text-[10px] text-white/40 font-bold uppercase">
                  {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>

              {/* Desktop Area with Icons */}
              <div className="flex-1 p-8 grid grid-cols-2 md:grid-cols-4 gap-8 items-start justify-items-center">
                {topics.map((topic) => (
                  <Link key={topic.id} href={topic.path} className="group flex flex-col items-center gap-3 w-32">
                    <div className={`${topic.color} w-20 h-20 rounded-2xl flex items-center justify-center text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-active:scale-95 border-4 border-white/10 group-hover:border-white/30`}>
                      {topic.icon}
                    </div>
                    <span className="text-[11px] font-black text-white/70 text-center uppercase tracking-wider leading-tight group-hover:text-white transition-colors">
                      {topic.title}
                    </span>
                  </Link>
                ))}

                {/* User Profile Shortcut */}
                <Link href="/onboarding/questions" className="group flex flex-col items-center gap-3 w-32">
                  <div className="bg-steward-gold w-20 h-20 rounded-2xl flex items-center justify-center text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-active:scale-95 border-4 border-white/10 group-hover:border-white/30">
                    <UserCircle size={32} />
                  </div>
                  <span className="text-[11px] font-black text-steward-gold/80 text-center uppercase tracking-wider leading-tight group-hover:text-steward-gold transition-colors">
                    My Profile
                  </span>
                </Link>
              </div>

              {/* Bottom Taskbar */}
              <div className="h-12 bg-white/5 border-t border-white/10 mt-auto flex items-center px-6 gap-4">
                <div className="w-8 h-8 relative cursor-pointer hover:scale-110 transition-transform" onClick={() => router.push('/')}>
                  <Image src="/logo 1.jpg" alt="Logo" fill className="object-contain rounded-md" />
                </div>
                <div className="h-4 w-[1px] bg-white/10" />
                <div className="text-[9px] text-white/30 font-bold uppercase tracking-widest">
                  Ready for stewardship
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Part: Keyboard and Base */}
        <div className="laptop-base-part" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F3F4F6 100%)' }}>
          <div className="keyboard-grid mb-4">
            {[
              "ESC", "F1", "F2", "F3", "F4", "F5", "PWR",
              "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
              "A", "S", "D", "F", "G", "H", "J", "K", "L", "ENT",
              "SHFT", "Z", "X", "C", "V", "B", "N", "M", "SHFT",
              "CTR", "CMD", " ", "CMD", "←", "↑", "↓", "→"
            ].map((key, i) => (
              <div 
                key={i} 
                className={`key-cap ${
                  key === " " ? "col-span-5" : ""
                }`}
                style={{ backgroundColor: '#FEFAE0', borderColor: '#D1D5DB', color: '#2E5534' }}
              >
                {key}
              </div>
            ))}
          </div>
          <div className="laptop-edge-detail" style={{ backgroundColor: '#D1D5DB', opacity: 0.5 }} />
        </div>
      </div>

      {/* Background Decorative Elements: Lamp & Books */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        {/* Retro Desk Lamp - Positioned BEHIND books */}
        <div className="absolute bottom-0 left-4 md:left-20 z-0 opacity-90">
          <div className="retro-lamp scale-110 md:scale-150 origin-bottom">
            <div className="lamp-glow" style={{ backgroundColor: '#FDDD9A' }} />
            <div className="lamp-shade" style={{ backgroundColor: '#DB9B2F', borderColor: '#A27532' }}>
              <div className="lamp-bulb" />
            </div>
            <div className="lamp-arm" style={{ backgroundColor: '#A27532' }} />
            <div className="lamp-base" style={{ backgroundColor: '#21282E' }} />
          </div>
        </div>

        {/* Books Container */}
        <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 flex items-end justify-between px-4 md:px-12 z-20">
          <div className="flex items-end gap-1 opacity-90">
            <div className="absolute bottom-0 left-0 w-full h-1 bg-steward-dark/10 shadow-sm" />
            <div className="w-6 md:w-10 h-32 md:h-48 bg-steward-gold border-l-4 border-steward-dark rounded-t-sm shadow-md transform hover:translate-y-[-4px] transition-transform" />
            <div className="w-8 md:w-12 h-28 md:h-40 bg-steward-green border-l-4 border-steward-dark rounded-t-sm shadow-md flex flex-col items-center pt-4">
              <div className="w-full h-[1px] bg-white/20 my-1" />
              <div className="w-full h-[1px] bg-white/20 my-1" />
            </div>
            <div className="w-5 md:w-8 h-36 md:h-52 bg-steward-orange border-l-4 border-steward-dark rounded-t-sm shadow-md" />
            <div className="w-7 md:w-10 h-30 md:h-44 bg-steward-blue border-l-4 border-steward-dark rounded-t-sm shadow-md" />
            <div className="w-12 md:w-20 h-24 md:h-32 border-r-2 border-t-2 border-steward-gold/30 rounded-tr-[40px] ml-2 relative">
              <div className="absolute bottom-4 right-2 w-4 h-4 rounded-full border border-steward-gold/20 animate-pulse" />
            </div>
          </div>

          <div className="flex items-end gap-1 opacity-80">
            <div className="w-12 md:w-20 h-24 md:h-32 border-l-2 border-t-2 border-steward-gold/30 rounded-tl-[40px] mr-2 relative">
              <div className="absolute bottom-4 left-2 w-4 h-4 rounded-full border border-steward-gold/20 animate-pulse" />
            </div>
            <div className="w-7 md:w-11 h-34 md:h-50 bg-steward-cream border-r-4 border-steward-gold rounded-t-sm shadow-md" />
            <div className="w-6 md:w-10 h-30 md:h-44 bg-steward-blue/20 border-r-4 border-steward-blue rounded-t-sm shadow-md flex flex-col items-center justify-center">
              <div className="w-4 md:w-6 h-[1px] bg-steward-blue/30 my-1" />
              <div className="w-4 md:w-6 h-[1px] bg-steward-blue/30 my-1" />
            </div>
            <div className="w-8 md:w-12 h-36 md:h-56 bg-steward-gold/40 border-r-4 border-steward-gold rounded-t-sm shadow-md" />
            <div className="w-5 md:w-8 h-32 md:h-48 bg-steward-cream border-r-4 border-steward-gold rounded-t-sm shadow-md" />
          </div>
        </div>
      </div>
    </div>
  );
}
