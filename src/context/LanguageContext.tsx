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
    'mission.phrase': 'Numen Aquae',
    'mission.body': "A possibility to bridge economic opportunity and environmental resilience by building Environmental literacy and bilingual content creation pathways through AI for historically disinvested communities in Imperial County's Southern Border Region.",
    'enter.site': 'Enter Site',
    'welcome.en': 'Welcome to stewardworks.space',
    'onboard.en': 'enter here to learn in English',
    'onboard.button.en': 'Onboard',
    'welcome.es': 'Bienvenida a stewardworks.space',
    'onboard.es': 'Entra aquí para aprender en Español',
    'onboard.button.es': 'A bordo',
    'credits': 'Supported by our fiscal contributors',
  },
  es: {
    'mission.phrase': 'Numen Aquae',
    'mission.body': "Una posibilidad de cerrar la brecha entre la oportunidad económica y la resiliencia ambiental mediante la alfabetización ambiental y vías de creación de contenido bilingüe a través de la IA para comunidades históricamente desatendidas en la región de la frontera sur del Condado Imperial.",
    'enter.site': 'Entrar al sitio',
    'welcome.en': 'Welcome to stewardworks.space',
    'onboard.en': 'enter here to learn in English',
    'onboard.button.en': 'Onboard',
    'welcome.es': 'Bienvenida a stewardworks.space',
    'onboard.es': 'Entra aquí para aprender en Español',
    'onboard.button.es': 'A bordo',
    'credits': 'Con el apoyo de nuestros contribuyentes fiscales',
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
