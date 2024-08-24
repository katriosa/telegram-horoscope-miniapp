import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ZodiacList from "./components/ZodiacList";
import ZodiacDetail from "./components/ZodiacDetail";
import getHoroscope from "./services/horoscopeService";

const App = () => {
  const [description, setDescription] = useState("");
  const { i18n } = useTranslation();

  useEffect(() => {
    let startTouchX = 0;
    let endTouchX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startTouchX = e.changedTouches[0].pageX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      endTouchX = e.changedTouches[0].pageX;
      if (endTouchX > startTouchX) setDescription("");
    };

    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  const handleBack = useCallback(() => setDescription(""), []);

  const handleLanguageChange = useCallback(() => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  }, [i18n]);

  const handleSelectSign = useCallback(
    (sign: string) => {
      const fetchHoroscope = async () => {
        const data = await getHoroscope(
          sign,
          i18n.language === "ru" ? "original" : "translated"
        );
        setDescription(data.horoscope);
      };
      fetchHoroscope();
    },
    [i18n]
  );

  return (
    <div className="app">
      <div className="switch-button-container">
        <button onClick={handleLanguageChange}>
          {i18n.language === "ru" ? "EN" : "RU"}
        </button>
      </div>
      {description ? (
        <ZodiacDetail description={description} onBack={handleBack} />
      ) : (
        <ZodiacList onSelect={handleSelectSign} />
      )}
    </div>
  );
};

export default App;
