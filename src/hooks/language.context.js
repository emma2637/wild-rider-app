import React, { createContext, useCallback,useRef,useState } from "react";
import detectBrowserLanguage from 'detect-browser-language'
// const detectBrowserLanguage = require('detect-browser-language')

export const LanguageContext = createContext({
    language: 'en',
    updateLanguage: (language) => {}
});

export const LanguageProvider = ({ children }) => {
    const [ language, setLanguage] = useState({
        language:'en'
    });

    const initialStringsLoaded = useRef(false)
    const updateLanguage = useCallback(async (newLanguage) => {
        if (initialStringsLoaded.current && newLanguage === language) {
            return;
        }

        initialStringsLoaded.current = true;
        setLanguage(newLanguage);
    });
    
    const context = {
        language,
        updateLanguage: updateLanguage
    }
    return (
        <LanguageContext.Provider value={context}>
            {children}
        </LanguageContext.Provider>
    );
};

