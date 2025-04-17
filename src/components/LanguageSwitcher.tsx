import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="relative inline-flex bg-dark-lighter rounded-md overflow-hidden border border-dark-light/30">
      <button
        onClick={() => changeLanguage('pt-BR')}
        className={`relative px-3 py-1.5 text-sm font-medium transition-colors ${i18n.language === 'pt-BR'
          ? 'text-primary'
          : 'text-gray-400 hover:text-white'
          }`}
      >
        {i18n.language === 'pt-BR' && (
          <motion.div
            className="absolute inset-0 bg-dark-light"
            layoutId="activeLang"
            initial={false}
            transition={{ type: "spring", duration: 0.3 }}
            style={{ zIndex: 0 }}
          />
        )}
        <span className="relative z-10">PT</span>
      </button>

      <button
        onClick={() => changeLanguage('en')}
        className={`relative px-3 py-1.5 text-sm font-medium transition-colors ${i18n.language === 'en'
          ? 'text-primary'
          : 'text-gray-400 hover:text-white'
          }`}
      >
        {i18n.language === 'en' && (
          <motion.div
            className="absolute inset-0 bg-dark-light"
            layoutId="activeLang"
            initial={false}
            transition={{ type: "spring", duration: 0.3 }}
            style={{ zIndex: 0 }}
          />
        )}
        <span className="relative z-10">EN</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;