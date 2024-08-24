import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      zodiac_signs: {
        aries: "Aries",
        taurus: "Taurus",
        gemini: "Gemini",
        cancer: "Cancer",
        leo: "Leo",
        virgo: "Virgo",
        libra: "Libra",
        scorpio: "Scorpio",
        sagittarius: "Sagittarius",
        capricorn: "Capricorn",
        aquarius: "Aquarius",
        pisces: "Pisces",
      },
      zodiac_dates: {
        aries: "21 March - 19 April",
        taurus: "20 April - 22 May",
        gemini: "23 May - 21 June",
        cancer: "22 June - 22 July",
        leo: "23 July - 22 August",
        virgo: "23 August - 22 September",
        libra: "23 September - 22 October",
        scorpio: "23 October - 21 November",
        sagittarius: "22 November - 22 December",
        capricorn: "23 December - 20 January",
        aquarius: "21 January - 19 February",
        pisces: "20 February - 20 March",
      },
      buttons: {
        back: "Back",
      },
    },
  },
  ru: {
    translation: {
      zodiac_signs: {
        aries: "Овен",
        taurus: "Телец",
        gemini: "Близнецы",
        cancer: "Рак",
        leo: "Лев",
        virgo: "Дева",
        libra: "Весы",
        scorpio: "Скорпион",
        sagittarius: "Стрелец",
        capricorn: "Козерог",
        aquarius: "Водолей",
        pisces: "Рыбы",
      },
      zodiac_dates: {
        aries: "21 марта - 19 апреля",
        taurus: "20 апреля - 22 мая",
        gemini: "23 мая - 21 июня",
        cancer: "22 июня - 22 июля",
        leo: "23 июля - 22 августа",
        virgo: "23 августа - 22 сентября",
        libra: "23 сентября - 22 октября",
        scorpio: "23 октября - 21 ноября",
        sagittarius: "22 ноября - 22 декабря",
        capricorn: "23 декабря - 20 января",
        aquarius: "21 января - 19 февраля",
        pisces: "20 февраля - 20 марта",
      },
      buttons: {
        back: "Назад",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
