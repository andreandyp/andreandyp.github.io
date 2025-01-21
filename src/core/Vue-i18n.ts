import { createI18n } from "vue-i18n";
import es from "@/locales/es.json";
import en from "@/locales/en.json";

const usersLanguage = window.navigator.language;

export const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: usersLanguage,
    messages: {
        es: {
            ...es,
        },
        en: {
            ...en,
        }
    },
    fallbackLocale: {
        default: ["es"],
    }
});