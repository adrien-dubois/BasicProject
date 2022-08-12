import common_fr from "./Translations/fr/common.json";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            fr : { 
                common : common_fr
            }
        },
        lng : 'fr',
        interpolation: { 
            escapeValue : false
        }
    })

export default i18n;