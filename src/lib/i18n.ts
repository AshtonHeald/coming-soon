import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translation files
import enTranslation from "@/locales/en/translation.json";
import frTranslation from "@/locales/fr/translation.json";
import jaTranslation from "@/locales/ja/translation.json";

const resources = {
	en: {
		translation: enTranslation,
	},
	fr: {
		translation: frTranslation,
	},
	ja: {
		translation: jaTranslation,
	},
};

i18n.use(LanguageDetector) // Add the language detector here
	.use(initReactI18next)
	.init({
		resources,
		fallbackLng: "en", // Fallback language if detection fails
		interpolation: {
			escapeValue: false, // React already escapes values to prevent XSS
		},
	});

export default i18n;
