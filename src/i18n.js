import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HTTPApi from "i18next-http-backend";
import en from './locales/en/en.json'
import es from './locales/es/es.json'
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HTTPApi)
  .init({
    resources: {
        en: { translation: en },
        es: { translation: es },
      },
    lng: 'es',
    fallbackLng: "es",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;