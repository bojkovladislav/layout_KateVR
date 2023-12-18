import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          About: "About",
          Tech: "Tech",
          Benefits: "Benefits",
          Contact: "Contact",
          BUY: "BUY NOW",
          Help: "Help",
          More: "More",
          "THE NEW START OF": "THE NEW START OF",
          "HOMEPAGE-DESCRIPTION":
            "Discover the most comprehensive VR Locomotion system, and unlock infinite motion in any games on any platforms!",
        },
      },
      ua: {
        translation: {
          About: "Про нас",
          Tech: "Технології",
          Benefits: "Переваги",
          Contact: "Контакти",
          BUY: "КУПИТИ ПРЯМО ЗАРАЗ",
          Help: "Допомога",
          More: "Дізнатись більше",
          "THE NEW START OF": "НОВИЙ СТАРТ",
          "HOMEPAGE-DESCRIPTION":
            "Відкрийте для себе найповнішу систему VR Locomotion і розблокуйте нескінченний рух у будь-яких іграх на будь-якій платформі!",
        },
      },
    },
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
