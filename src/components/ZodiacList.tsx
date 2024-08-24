import React from "react";
import { useTranslation } from "react-i18next";

const ZODIAC_SIGNS = [
  { name: "aries", icon: "♈" },
  { name: "taurus", icon: "♉" },
  { name: "gemini", icon: "♊" },
  { name: "cancer", icon: "♋" },
  { name: "leo", icon: "♌" },
  { name: "virgo", icon: "♍" },
  { name: "libra", icon: "♎" },
  { name: "scorpio", icon: "♏" },
  { name: "sagittarius", icon: "♐" },
  { name: "capricorn", icon: "♑" },
  { name: "aquarius", icon: "♒" },
  { name: "pisces", icon: "♓" },
];

interface ZodiacListProps {
  onSelect: (sign: string) => void;
}

const ZodiacList = ({ onSelect }: ZodiacListProps) => {
  const { t } = useTranslation();

  return (
    <div className="zodiac-list">
      {ZODIAC_SIGNS.map((sign) => (
        <div
          className="zodiac-item"
          key={sign.name}
          onClick={() => onSelect(sign.name)}
        >
          <h2>
            {sign.icon} {t(`zodiac_signs.${sign.name}`)}
          </h2>
          <p>{t(`zodiac_dates.${sign.name}`)}</p>
        </div>
      ))}
    </div>
  );
};

export default ZodiacList;
