'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { 
  FileText, 
  UserCircle,
  Users,
  Cpu,
  HelpCircle,
  Mic,
  Presentation,
  Beaker,
  Palmtree,
  Map,
  Star,
  HelpingHand,
  Hammer,
  Wrench
} from 'lucide-react';
import Image from 'next/image';

export default function HubPage() {
  const { t } = useLanguage();
  const router = useRouter();
  const [selectedTopic, setSelectedTopic] = useState<string>('getting-started');
  const [statusMessage, setStatusMessage] = useState('Exploring the environmental literacy hub...');
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    // Set initial time on mount to avoid hydration mismatch
    setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    
    // Update time every minute
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const topics = [
    { id: 'my-profile', title: 'My Profile', icon: <Star size={32} />, path: '/hub/my-profile', pos: 'top-[5%] left-1/2 -translate-x-1/2' },
    { id: 'workforce-pathways', title: 'Workforce Pathways', icon: <Map size={32} />, path: '/hub/workforce-pathways', pos: 'top-[22%] left-[20%]' },
    { id: 'help-desk', title: 'Help Desk', icon: <HelpingHand size={32} />, path: '/onboarding/bulletin', pos: 'top-[22%] right-[20%]' },
    { id: 'ai-lab', title: 'AI Lab', icon: <Beaker size={32} />, path: '/hub/ai-lab', pos: 'top-[42%] left-1/2 -translate-x-1/2' },
    { id: 'env-literacy', title: 'Environmental Literacy', icon: <Palmtree size={32} />, path: '/hub/environmental-literacy', pos: 'bottom-[25%] left-[15%]' },
    { id: 'pilot-workshops', title: 'Pilot Workshops', icon: <Hammer size={32} />, path: '/hub/pilot-workshops', pos: 'bottom-[25%] right-[15%]' },
    { id: 'listening-sessions', title: 'Community Listening Sessions', icon: <Users size={32} />, path: '/hub/community-listening', pos: 'bottom-[5%] left-1/2 -translate-x-1/2' },
  ];

  return (
    <div className="laptop-frame-wrapper min-h-screen flex flex-col items-center justify-center overflow-hidden font-exo relative bg-[#F5F5F5]">
      {/* 1. LARGE PANORAMIC WINDOW (z-index: 1) */}
      <div className="absolute top-[2%] left-1/2 -translate-x-1/2 w-[1200px] h-[650px] border-[15px] border-[#8B7355] shadow-[0_0_100px_rgba(0,0,0,0.3)] z-1 rounded-sm overflow-hidden flex flex-col">
        {/* Sky Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#87CEEB] via-[#BEE3F8] to-[#FFE5B4]" />
        
        {/* White Fluffy Clouds */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Cloud 1 */}
          <div className="absolute top-12 left-[15%] w-32 h-12 bg-white/80 rounded-full blur-md opacity-60" />
          <div className="absolute top-8 left-[18%] w-16 h-16 bg-white/80 rounded-full blur-md opacity-60" />
          
          {/* Cloud 2 */}
          <div className="absolute top-24 left-[45%] w-40 h-14 bg-white/90 rounded-full blur-lg opacity-40" />
          
          {/* Cloud 3 */}
          <div className="absolute top-16 left-[75%] w-28 h-10 bg-white/80 rounded-full blur-md opacity-50" />
          <div className="absolute top-14 left-[78%] w-12 h-12 bg-white/80 rounded-full blur-md opacity-50" />
          
          {/* Cloud 4 */}
          <div className="absolute top-40 left-[10%] w-48 h-16 bg-white/70 rounded-full blur-xl opacity-30" />
        </div>

        {/* Panoramic City Skyline Silhouettes with Windows */}
        <div className="absolute bottom-0 w-full h-full flex items-end justify-around gap-2 px-6">
          {[
            { h: 'h-[320px]', w: 'w-20', delay: '0s', windows: 12 },
            { h: 'h-[450px]', w: 'w-24', delay: '0.1s', windows: 20 },
            { h: 'h-[280px]', w: 'w-16', delay: '0.2s', windows: 8 },
            { h: 'h-[520px]', w: 'w-28', delay: '0.3s', windows: 25 },
            { h: 'h-[380px]', w: 'w-22', delay: '0.4s', windows: 15 },
            { h: 'h-[480px]', w: 'w-24', delay: '0.5s', windows: 22 },
            { h: 'h-[300px]', w: 'w-18', delay: '0.6s', windows: 10 },
            { h: 'h-[420px]', w: 'w-20', delay: '0.7s', windows: 18 },
            { h: 'h-[250px]', w: 'w-14', delay: '0.8s', windows: 6 },
          ].map((b, i) => (
            <div key={i} className={`${b.h} ${b.w} bg-[#1A202C] rounded-t-md relative shadow-2xl flex-shrink-0`}>
              {/* Building Top Detail */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#1A202C] rounded-t-full" />
              
              {/* Windows (Lights) */}
              <div className="grid grid-cols-2 gap-2 p-3 opacity-30 group-hover:opacity-50 transition-opacity">
                {[...Array(b.windows)].map((_, winIdx) => (
                  <div key={winIdx} className="w-1.5 h-1.5 bg-yellow-100 rounded-sm shadow-[0_0_2px_rgba(255,255,255,0.5)]" />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Window Dividers removed as per user request */}
        
        {/* Glass Reflection Fade */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
      </div>

      {/* 2. FULL-WIDTH WOODEN DESK (z-index: 2) */}
      <div className="absolute bottom-0 w-full h-[250px] z-[2] shadow-[inset_0_15px_30px_rgba(0,0,0,0.2)] border-t-[6px] border-[#C1935F]" style={{ backgroundColor: '#D4A574' }}>
        {/* Wood Texture Detail */}
        <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 12px, rgba(0,0,0,0.5) 13px)' }} />
      </div>

      {/* 3. LAPTOP CENTER (Sitting ON the desk, z-index: 3) */}
      <div className="laptop-outer-shell max-w-[900px] w-full absolute bottom-[-100px] md:bottom-[-120px] left-0 right-0 mx-auto z-[3] transition-all duration-500 drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)] scale-[0.85] md:scale-100 origin-bottom">
        {/* Upper Part: Screen */}
        <div className="laptop-bezel relative aspect-[16/9] flex flex-col rounded-t-3xl border-[10px] md:border-[20px] shadow-2xl overflow-hidden" style={{ borderColor: '#FFFFFF', backgroundColor: '#FFFFFF' }}>
          <div className="absolute top-2 md:top-4 left-1/2 -translate-x-1/2 text-[10px] font-bold text-steward-dark opacity-30 uppercase tracking-[0.5em] z-30">
            StewardWorks Portable
          </div>
          
          <div className="flex-1 relative flex flex-col bg-white overflow-hidden">
            {/* Blurred Logo Background */}
            <div className="absolute inset-0 z-0 opacity-[0.6] flex items-center justify-center p-12 md:p-24">
              <div className="relative w-full h-full">
                <Image 
                  src="/logo 1.jpg" 
                  alt="Background Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
            </div>

            <div className="crt-overlay pointer-events-none" />
            
            <div className="w-full h-full flex flex-col relative z-10 overflow-hidden font-exo">
              {/* OS Header */}
              <div className="bg-white/80 backdrop-blur-sm p-4 flex justify-between items-center border-b border-steward-dark/5 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                    <div className="w-3 h-3 rounded-full bg-green-400/80" />
                  </div>
                  <span className="text-[10px] text-steward-dark/40 font-black uppercase tracking-widest ml-2">StewardOS v2.0</span>
                </div>
                <div className="text-[10px] text-steward-dark/40 font-black uppercase tracking-tighter">
                  {currentTime}
                </div>
              </div>

              {/* Desktop Area with Icons in a Circle Arrangement */}
              <div className="flex-1 relative p-4 md:p-8">
                {topics.map((topic) => (
                  <Link 
                    key={topic.id} 
                    href={topic.path} 
                    className={`absolute ${topic.pos} group flex flex-col items-center gap-2 w-32 md:w-40 text-center z-20 transition-all duration-300 hover:-translate-y-1`}
                  >
                    <div className="bg-[#FFD700] w-14 h-14 md:w-20 md:h-20 rounded-xl flex items-center justify-center text-steward-dark shadow-[0_8px_0_#D1AA4E,0_15px_20px_rgba(0,0,0,0.2)] transition-all duration-300 group-hover:scale-110 group-active:translate-y-1 group-active:shadow-none border-2 border-white/20 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent pointer-events-none" />
                      <div className="relative z-10 scale-90 md:scale-110">
                        {topic.icon}
                      </div>
                    </div>
                    <span className="text-[9px] md:text-[11px] font-black text-steward-dark uppercase tracking-tight leading-tight drop-shadow-sm bg-white/90 px-2 py-0.5 rounded-md border border-gray-100 shadow-sm">
                      {topic.title}
                    </span>
                  </Link>
                ))}
              </div>

              {/* Bottom Taskbar */}
              <div className="h-14 bg-white/60 backdrop-blur-md border-t border-steward-dark/5 mt-auto flex items-center px-8 gap-6">
                <div className="w-10 h-10 relative cursor-pointer hover:scale-110 transition-transform active:scale-95" onClick={() => router.push('/')}>
                  <Image src="/logo 1.jpg" alt="Logo" fill className="object-contain rounded-md drop-shadow-sm" />
                </div>
                <div className="h-6 w-[1px] bg-steward-dark/10" />
                <div className="text-[10px] text-steward-dark/30 font-black uppercase tracking-[0.2em]">
                  Stewardship Active
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Part: Keyboard and Base */}
        <div className="laptop-base-part relative pt-6 pb-10 md:pt-8 md:pb-16 rounded-b-3xl border-x-[10px] md:border-x-[20px] border-b-[10px] md:border-b-[20px] shadow-2xl flex flex-col items-center overflow-hidden" style={{ borderColor: '#E5E7EB', background: 'linear-gradient(180deg, #FFFFFF 0%, #F3F4F6 100%)' }}>
          <div className="keyboard-grid max-w-2xl w-full px-8 md:px-12 grid grid-cols-10 gap-1 md:gap-2 mb-4 md:mb-6 opacity-60">
            {[
              "ESC", "Q", "W", "E", "R", "T", "Y", "U", "I", "PWR",
              "A", "S", "D", "F", "G", "H", "J", "K", "L", "ENT",
              "SHFT", "Z", "X", "C", "V", "B", "N", "M", ",", "SHFT",
              "CTRL", "OPT", "CMD", "SPACE", "SPACE", "SPACE", "SPACE", "CMD", "OPT", "CTRL"
            ].map((key, i) => (
              <div 
                key={i} 
                className={`h-4 md:h-8 rounded-md bg-[#FEFAE0] border-b-[3px] border-gray-300 shadow-md flex items-center justify-center text-[5px] md:text-[8px] font-black text-gray-500 hover:translate-y-[1px] transition-transform ${key === "SPACE" ? "col-span-1" : ""}`}
              >
                {key === "SPACE" ? "" : key}
              </div>
            ))}
          </div>
          <div className="w-40 h-2 bg-steward-dark/5 rounded-full" />
        </div>
      </div>

      {/* 4. FRONT DECORATIONS (z-index: 4) */}
      {/* LEFT SIDE: Art Deco Lamp */}
      <div className="absolute bottom-[250px] left-[5%] md:left-[10%] z-[4] flex items-end pointer-events-none">
        {/* Art Deco Table Lamp - Scaled up */}
        <div className="relative flex flex-col items-center">
          {/* Arched Dome */}
          <div className="w-48 h-32 bg-gradient-to-b from-pink-300/60 via-amber-200/50 to-amber-400/30 rounded-t-full shadow-[inset_0_10px_30px_rgba(255,255,255,0.6),0_0_60px_rgba(251,191,36,0.3)] border-b-4 border-amber-600/20 relative overflow-hidden flex items-center justify-center">
            {/* Inner Light Glow */}
            <div className="w-24 h-24 bg-white/40 blur-3xl rounded-full" />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/30" />
          </div>
          {/* Metallic Stem - Much taller */}
          <div className="w-3.5 h-[500px] bg-gradient-to-r from-amber-800 via-amber-500 to-amber-900 shadow-lg" />
          {/* Brass Base */}
          <div className="w-32 h-8 bg-gradient-to-r from-amber-950 via-amber-600 to-amber-950 rounded-t-2xl shadow-2xl relative">
            <div className="absolute inset-x-0 top-0 h-[1.5px] bg-white/30" />
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: Books & Potted Cacti */}
      <div className="absolute bottom-[250px] right-[2%] md:right-[5%] z-[4] flex items-end gap-8 pointer-events-none">
        {/* Vertical Books - Now closer to the laptop */}
        <div className="flex items-end gap-1 mb-[-10px]">
          <div className="w-10 h-48 bg-steward-green border-x-4 border-steward-dark/20 rounded-sm shadow-md flex flex-col items-center pt-4">
            <div className="w-full h-[1px] bg-white/20 my-1" />
            <div className="w-full h-[1px] bg-white/20 my-1" />
          </div>
          <div className="w-12 h-56 bg-steward-blue border-x-4 border-steward-dark/20 rounded-sm shadow-md" />
          <div className="w-8 h-40 bg-steward-gold border-x-4 border-steward-dark/20 rounded-sm shadow-md" />
          <div className="w-11 h-52 bg-steward-orange border-x-4 border-steward-dark/20 rounded-sm shadow-md" />
          <div className="w-9 h-44 bg-[#8B4513] border-x-4 border-steward-dark/20 rounded-sm shadow-md" />
        </div>

        {/* Potted Cacti - Now behind the books (further from the laptop) */}
        <div className="flex items-end gap-6 mb-[-10px]">
          {/* Cactus 1 (Tall) */}
          <div className="flex flex-col items-center">
            <div className="relative w-20 h-[300px] flex items-center justify-center">
              <div className="w-16 h-[280px] bg-[#6B8E23] rounded-full border-2 border-black/10 shadow-[inset_-6px_-6px_15px_rgba(0,0,0,0.2)] relative overflow-hidden">
                {/* Needles */}
                {[...Array(20)].map((_, i) => (
                  <div 
                    key={i} 
                    className="absolute w-0.5 h-2 bg-white/40 rounded-full"
                    style={{ 
                      top: `${Math.random() * 80 + 10}%`, 
                      left: `${Math.random() * 80 + 10}%`,
                      transform: `rotate(${Math.random() * 360}deg)`
                    }} 
                  />
                ))}
              </div>
            </div>
            {/* Terracotta Pot */}
            <div className="w-24 h-16 bg-[#A0522D] rounded-b-3xl border-t-[15px] border-[#8B4513] shadow-xl relative overflow-hidden">
               <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.2) 50%, transparent)' }} />
            </div>
          </div>

          {/* Cactus 2 (Short) */}
          <div className="flex flex-col items-center">
            <div className="relative w-16 h-56 flex items-center justify-center">
              <div className="w-14 h-48 bg-[#8FBC8F] rounded-full border-2 border-black/10 shadow-[inset_-5px_-5px_12px_rgba(0,0,0,0.2)] relative overflow-hidden">
                {/* Needles */}
                {[...Array(12)].map((_, i) => (
                  <div 
                    key={i} 
                    className="absolute w-0.5 h-1.5 bg-white/30 rounded-full"
                    style={{ 
                      top: `${Math.random() * 80 + 10}%`, 
                      left: `${Math.random() * 80 + 10}%`,
                      transform: `rotate(${Math.random() * 360}deg)`
                    }} 
                  />
                ))}
              </div>
            </div>
            {/* Terracotta Pot */}
            <div className="w-20 h-14 bg-[#A0522D] rounded-b-2xl border-t-8 border-[#8B4513] shadow-lg relative">
              <div className="absolute inset-0 opacity-10 bg-black/20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
