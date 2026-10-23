import React, { createContext, useContext, useState } from 'react';
import { translations } from './Translation';

const LanguageContext = createContext();

const lookup = (dict, path) =>
    path.split('.').reduce((node, key) => (node == null ? undefined : node[key]), dict);

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState('zh');

    // 界面文字：t('home.joinUs')，缺英文时回退到中文
    const t = (path) => lookup(translations[lang], path) ?? lookup(translations.zh, path) ?? path;

    // 数据里的中英文字段：pick(event.title)，其中 title 为 { zh, en }
    const pick = (field) => {
        if (field == null || typeof field === 'string') return field;
        return field[lang] || field.zh;
    };

    const toggleLanguage = () => {
        setLang((prev) => (prev === 'zh' ? 'en' : 'zh'));
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t, pick }}>
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