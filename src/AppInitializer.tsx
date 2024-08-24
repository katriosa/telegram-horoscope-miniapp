import React, { useEffect } from "react";
import App from "./App";
import i18n from "./i18n";

const AppInitializer = () => {
  useEffect(() => {
    try {
      const userLang =
        window.Telegram.WebApp.initDataUnsafe?.user?.language_code || "en";
      i18n.changeLanguage(userLang === "ru" ? "ru" : "en");
    } catch (error) {
      console.error("Error changing language:", error);
    }

    window.Telegram.WebApp.ready();
  }, [i18n]);

  return <App />;
};

export default AppInitializer;
