import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translateEN from '@i18n/locales/en/translations.json';

const resources = {
    en: {
        translation: translateEN
    }
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    debug: true,
    keySeparator: '.',
    fallbackLng: 'en', // In case if it couldn't load selected name space
    interpolation: {
        escapeValue: false // react already safe from xss
    }
});

export default i18n;