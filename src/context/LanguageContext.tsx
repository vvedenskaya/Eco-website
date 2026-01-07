'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'mission.phrase': 'Stewardship for a Sustainable Future',
    'mission.body': 'Empowering communities to transition into environmental careers through education and roadmapping.',
    'enter.site': 'Enter Site',
    'welcome': 'Welcome',
    'onboard.en': 'Enter here to learn in English',
    'onboard.button.en': 'Onboard',
    'welcome.es': 'Bienvenida',
    'onboard.es': 'Entra aquí para aprender en Español',
    'onboard.button.es': 'A bordo',
    'credits': 'Supported by Nureaum and StewardWorks Grant Sponsors',
  },
  es: {
    'mission.phrase': 'Administración para un Futuro Sostenible',
    'mission.body': 'Empoderando a las comunidades para la transición a carreras ambientales a través de la educación y la planificación.',
    'enter.site': 'Entrar al sitio',
    'welcome': 'Bienvenida',
    'onboard.en': 'Enter here to learn in English',
    'onboard.button.en': 'Onboard',
    'welcome.es': 'Bienvenida',
    'onboard.es': 'Entra aquí para aprender en Español',
    'onboard.button.es': 'A bordo',
    'credits': 'Con el apoyo de los patrocinadores de la subvención Nureaum y StewardWorks',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
