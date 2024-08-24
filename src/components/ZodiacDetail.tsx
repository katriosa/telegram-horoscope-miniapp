import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

interface ZodiacDetailProps {
  description: string;
  onBack: () => void;
}

const ZodiacDetail = ({ description, onBack }: ZodiacDetailProps) => {
  const { t } = useTranslation();
  const showTelegramBackButton =
    parseInt(window.Telegram?.WebApp?.version) > 6 &&
    window.Telegram?.WebApp?.BackButton;

  useEffect(() => {
    if (showTelegramBackButton) {
      window.Telegram.WebApp.BackButton.show();
      window.Telegram.WebApp.onEvent("backButtonClicked", onBack);
      return () => {
        window.Telegram.WebApp.offEvent("backButtonClicked", onBack);
      };
    }
  }, [onBack]);

  return (
    <div className="zodiac-detail">
      <p className="horoscope-text">{description}</p>
      {!showTelegramBackButton && (
        <button onClick={onBack}>{t("buttons.back")}</button>
      )}
    </div>
  );
};

export default ZodiacDetail;
