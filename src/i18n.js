import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// const resources = {
//   en: {
//     translation: {
//       language: "Select Language",
//       login: "Login",
//       register: "Register",
//     },
//   },
//   tr: {
//     translation: {
// language: "Dil Seç",
//       login: "Giriş Yap",
//       register: "Kayıt Ol",
//     },
//   },
// };

// i18n.use(initReactI18next).init({
//   resources,
//   lng: "tr",
// });

i18n.use(Backend).use(initReactI18next).use(LanguageDetector).init({
  fallbackLng: "tr",
});

export default i18n;
