import { IWeatherValues } from "../const";

export const useWeatherAPI = () => {
  let errorMessage = "";
  const getWeather = async (location: string) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=b547e25b75c161d0d32aeaf97a880a52&units=metric`;

    const weatherDeatails:IWeatherValues = await fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Please enter a valid city name");
      })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        errorMessage = err.message;
      });
    return { errorMessage, weatherDeatails };
  };

  return {
    getWeather,
  };
};
