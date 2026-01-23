'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { 
  Search, 
  ChevronRight, 
  FileText, 
  Download,
  UserCircle,
  Music
} from 'lucide-react';
import Image from 'next/image';

export default function HubPage() {
  const { t } = useLanguage();
  const router = useRouter();
  const [selectedTopic, setSelectedTopic] = useState<string>('getting-started');
  const [statusMessage, setStatusMessage] = useState('Exploring the environmental literacy hub...');

  const topics = [
    { id: 'getting-started', title: 'Getting Started', users: 15, status: 'online', content: 'Welcome to the AI Content Creation & Environmental Literacy Hub! This room will guide you through AI tools.' },
    { id: 'env-literacy', title: 'Environmental Literacy', users: 8, status: 'online', content: 'Understanding bioregions, watersheds, and indigenous environmental knowledge.' },
    { id: 'bilingual-content', title: 'Bilingual Content', users: 12, status: 'busy', content: 'Strategies for creating content in both English and Spanish using AI tools.' },
    { id: 'workforce-pathways', title: 'Workforce Pathways', users: 6, status: 'online', content: 'Mapping your skills to careers in the green economy and lithium/geothermal sectors.' },
    { id: 'tech-support', title: 'Tech Support & FAQ', users: 20, status: 'away', content: 'Got questions? Our support team and community are here to help with any technical issues.' },
  ];

  return (
    <div className="laptop-frame-wrapper px-4 pt-12 min-h-screen flex items-end justify-center overflow-hidden font-exo" style={{ backgroundColor: '#FEFAE0' }}>
      {/* Visual Desk Surface */}
      <div className="desk-surface z-0" style={{ backgroundColor: '#DB9B2F', opacity: 0.1 }} />
      
      <div className="laptop-outer-shell max-w-6xl w-full relative mb-[-30px] md:mb-[-60px] z-20">
        {/* Upper Part: Screen */}
        <div className="laptop-bezel relative" style={{ borderColor: '#FDDD9A', backgroundColor: '#FEFAE0' }}>
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] font-bold text-steward-gold opacity-50 uppercase tracking-[0.5em]">
            StewardWorks Portable
          </div>
          
          <div className="laptop-screen-content" style={{ borderColor: '#A27532' }}>
            <div className="crt-overlay" />
            
            <div className="w-full h-full bg-white flex flex-col relative z-10 overflow-y-auto font-exo">
              {/* MSN Header Area */}
              <div className="bg-gradient-to-b from-steward-cream to-steward-offwhite p-4 flex justify-between items-center border-b border-steward-gold/20 shrink-0">
                <div className="flex items-center gap-4">
                  <div className="relative group" onClick={() => router.push('/onboarding/questions')}>
                    <div className="w-12 h-12 rounded-lg border-2 border-white shadow-md overflow-hidden bg-white cursor-pointer hover:brightness-110 transition-all">
                      <UserCircle size={48} className="text-steward-blue" strokeWidth={1} />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-steward-green border-2 border-white rounded-full shadow-sm" />
                  </div>
                  
                  <div className="flex flex-col">
                    <h1 className="text-base font-black text-steward-green tracking-tight flex items-center gap-2">
                      StewardWorks Admin <span className="text-[10px] font-normal text-steward-green/60">(Online)</span>
                    </h1>
                    <div className="flex items-center gap-2">
                      <input 
                        type="text" 
                        value={statusMessage} 
                        onChange={(e) => setStatusMessage(e.target.value)}
                        className="bg-transparent border-none text-[10px] text-steward-blue italic focus:ring-0 p-0 w-48 hover:bg-white/30 rounded px-1 transition-colors font-exo"
                      />
                      <Music size={10} className="text-steward-blue/40" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <div className="w-10 h-10 relative cursor-pointer hover:scale-105 transition-transform" onClick={() => router.push('/')}>
                    <Image src="/logo 1.jpg" alt="Logo" fill className="object-contain rounded-lg" />
                  </div>
                  <div className="flex gap-1">
                    <div className="w-5 h-5 bg-steward-gold/30 rounded-sm flex items-center justify-center text-steward-dark text-[8px] font-bold cursor-default hover:bg-steward-gold/50">_</div>
                    <div className="w-5 h-5 bg-steward-gold/30 rounded-sm flex items-center justify-center text-steward-dark text-[8px] font-bold cursor-default hover:bg-steward-gold/50">□</div>
                    <div className="w-5 h-5 bg-red-400 rounded-sm flex items-center justify-center text-white text-[8px] font-bold cursor-default hover:bg-red-600">X</div>
                  </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 flex overflow-hidden">
                <aside className="w-64 bg-steward-offwhite/50 border-r border-steward-gold/20 hidden md:flex flex-col overflow-hidden">
                  <div className="p-3">
                    <div className="bg-white border border-steward-gold/20 rounded-full px-3 py-1 flex items-center gap-2 shadow-inner">
                      <Search size={12} className="text-steward-gold" />
                      <input type="text" placeholder="Search..." className="bg-transparent border-none text-[10px] p-0 focus:ring-0 w-full font-exo" />
                    </div>
                  </div>
                  <div className="flex-1 overflow-y-auto">
                    <div className="px-4 py-1 flex items-center justify-between text-[10px] font-bold text-steward-green bg-steward-cream/30 uppercase tracking-wider border-y border-steward-gold/10">
                      <span>Chapters</span>
                      <ChevronRight size={12} className="rotate-90" />
                    </div>
                    <div className="py-1">
                      {topics.map((topic) => (
                        <button
                          key={topic.id}
                          onClick={() => setSelectedTopic(topic.id)}
                          className={`w-full text-left px-6 py-2 flex items-center gap-2 transition-colors ${
                            selectedTopic === topic.id ? 'bg-steward-cream' : 'hover:bg-steward-cream/50'
                          }`}
                        >
                          <div className={`w-2 h-2 rounded-full shadow-sm ${
                            topic.status === 'online' ? 'bg-steward-green' : 'bg-steward-orange'
                          }`} />
                          <span className="text-[11px] text-steward-dark truncate">{topic.title}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </aside>

                <div className="flex-1 flex flex-col bg-white overflow-hidden">
                  <div className="bg-steward-offwhite/20 p-6 border-b border-steward-gold/10 overflow-y-auto">
                    <div className="max-w-xl mx-auto space-y-4">
                      <div className="flex items-center gap-3 text-steward-green">
                        <FileText size={20} />
                        <h2 className="text-base font-black uppercase">{topics.find(t => t.id === selectedTopic)?.title}</h2>
                      </div>
                      <p className="text-xs leading-relaxed text-steward-dark bg-white border border-steward-gold/10 p-4 rounded-lg shadow-sm">
                        {topics.find(t => t.id === selectedTopic)?.content}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                        <button className="flex items-center justify-between p-3 bg-steward-offwhite border border-steward-gold/20 rounded-lg hover:bg-white transition-all group">
                          <span className="text-[10px] font-bold text-steward-blue group-hover:text-steward-orange">GUIDE.PDF</span>
                          <Download size={14} className="text-steward-blue group-hover:text-steward-orange" />
                        </button>
                        <button className="flex items-center justify-between p-3 bg-steward-offwhite border border-steward-gold/20 rounded-lg hover:bg-white transition-all group">
                          <span className="text-[10px] font-bold text-steward-blue group-hover:text-steward-orange">TASKS.DOCX</span>
                          <Download size={14} className="text-steward-blue group-hover:text-steward-orange" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="h-48 bg-white flex flex-col border-t border-steward-gold/20">
                    <div className="bg-steward-cream/30 px-4 py-1 border-b border-steward-gold/10 text-[9px] font-bold text-steward-green">
                      CONVERSATION
                    </div>
                    <div className="flex-1 p-4 space-y-2 opacity-40 grayscale pointer-events-none select-none">
                      <div className="text-[10px] flex gap-2">
                        <span className="text-steward-green font-bold">Admin:</span>
                        <span>Welcome to the hub!</span>
                      </div>
                    </div>
                    <div className="p-3 bg-white border-t border-steward-gold/20 flex gap-2">
                      <div className="flex-1 bg-steward-offwhite/30 border border-steward-gold/10 rounded p-2 text-[10px] text-gray-400 italic font-exo">
                        Onboarding required...
                      </div>
                      <button disabled className="bg-steward-gold/20 text-white font-bold px-4 rounded-lg text-[10px] uppercase">
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Part: Keyboard and Base */}
        <div className="laptop-base-part" style={{ background: 'linear-gradient(180deg, #FDDD9A 0%, #DB9B2F 100%)' }}>
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
                style={{ backgroundColor: '#FEFAE0', borderColor: '#A27532', color: '#2E5534' }}
              >
                {key}
              </div>
            ))}
          </div>
          <div className="laptop-edge-detail" />
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
