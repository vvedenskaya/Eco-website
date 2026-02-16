'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface AdminSettings {
  wallpaperUrl: string | null;
  leftPosterUrl: string | null;
  rightPosterUrl: string | null;
}

interface AdminContextType {
  settings: AdminSettings;
  updateSettings: (newSettings: Partial<AdminSettings>) => void;
  resetSettings: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AdminSettings>({
    wallpaperUrl: null,
    leftPosterUrl: null,
    rightPosterUrl: null,
  });

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('hub-admin-settings');
    if (saved) {
      try {
        setSettings(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse admin settings', e);
      }
    }
  }, []);

  const updateSettings = (newSettings: Partial<AdminSettings>) => {
    const updated = { ...settings, ...newSettings };
    setSettings(updated);
    localStorage.setItem('hub-admin-settings', JSON.stringify(updated));
  };

  const resetSettings = () => {
    const initial = {
      wallpaperUrl: null,
      leftPosterUrl: null,
      rightPosterUrl: null,
    };
    setSettings(initial);
    localStorage.removeItem('hub-admin-settings');
  };

  return (
    <AdminContext.Provider value={{ settings, updateSettings, resetSettings }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};
