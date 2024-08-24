import axios from "axios";

export interface HoroscopeRequestPayload {
  sign: string;
  language: string;
  period: string;
}

export interface HoroscopeResponse {
  sign: string;
  language: string;
  period: string;
  horoscope: string;
}

const getHoroscope = async (
  sign: string,
  language: string = "original"
): Promise<HoroscopeResponse> => {
  const payload: HoroscopeRequestPayload = {
    sign,
    language,
    period: "today",
  };

  const response = await axios.post<HoroscopeResponse>(
    "https://poker247tech.ru/get_horoscope/",
    payload
  );
  return response.data;
};

export default getHoroscope;
