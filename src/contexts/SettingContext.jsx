'use client';

import { createContext, useMemo, useState } from 'react'; // ============================================================

// ============================================================
// SET "rtl" OR "ltr" HERE
// THEN GOTO BROWSER CONSOLE AND RUN localStorage.clear() TO CLEAR LOCAL STORAGE
const initialSettings = {
  direction: 'ltr',
};
export const SettingsContext = createContext({
  settings: initialSettings,
  updateSettings: () => {},
});

const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(initialSettings);

  const updateSettings = updatedSetting => {
    setSettings(updatedSetting);
    window.localStorage.setItem('settings', JSON.stringify(updatedSetting));
  };

  const contextValue = useMemo(
    () => ({
      settings,
      updateSettings,
    }),
    [settings, updateSettings],
  );

  return (
    <SettingsContext.Provider value={contextValue}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
