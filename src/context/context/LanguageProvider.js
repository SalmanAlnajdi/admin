import { createContext, useContext, useEffect, useState } from "react";
import { local } from "../translate";

// Create context
const LanguageContext = createContext();

// Provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("lang") || "EN";
  });

  const translate = (key) => {
    const translation = local[key];
    if (!translation) {
      console.warn(`Translation key "${key}" not found.`);
      return key; // Fallback to the key if translation not found
    }
    return translation[language] || translation["EN"] || key; // Fallback to default language or key
  };

  useEffect(() => {
    const lang = localStorage.getItem("lang");
    if (lang && lang !== language) {
      setLanguage(lang);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};
// Custom hook to use the LanguageContext
export const useTranslation = () => {
  return useContext(LanguageContext);
};
