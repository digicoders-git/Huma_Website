import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {}
  },
  ar: {
    translation: {}
  },
  fr: {
    translation: {}
  },
  ru: {
    translation: {}
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

// Handle RTL for Arabic
i18n.on('languageChanged', (lng) => {
  if (lng === 'ar') {
    document.dir = 'rtl';
    document.documentElement.lang = 'ar';
  } else {
    document.dir = 'ltr';
    document.documentElement.lang = lng || 'en';
  }
});

export default i18n;
