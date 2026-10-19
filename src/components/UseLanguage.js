import React, { createContext, useContext, useState } from 'react';
import { translations } from './Translation';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState('zh');

    const t = (path) => {
        const keys = path.split('.');
        let current = translations[lang];

        for (const key of keys) {
            if (current && current[key] !== undefined) {
                current = current[key];
            } else {
                return path; 
            }
        }
        return current;
    };

    const toggleLanguage = () => {
        setLang((prev) => (prev === 'zh' ? 'en' : 'zh'));
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};


export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};