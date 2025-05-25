export const parseWeatherData = (data: any) => {
  return {
    name: data?.name,
    temperature: Math.round(data?.main?.temp),
    minTemperature: Math.round(data?.main?.temp_min),
    maxTemperature: Math.round(data?.main?.temp_max),
    description: data.weather?.at(0)?.description,
    icon: getIconUrl(data.weather?.at(0)?.icon),
    windSpeed: Math.round(data?.wind?.speed),
    feelsLike: Math.round(data?.main?.feels_like),
    humidity: data?.main?.humidity,
  };
};

export const parseDailyForecast = (data: any) => {
  return (
    data?.list?.map((item: any) => {
      return {
        date: item.dt_txt,
        temperature: Math.round(item.main.temp),
        minTemperature: Math.round(item.main.temp_min),
        maxTemperature: Math.round(item.main.temp_max),
        description: item.weather?.at(0)?.description,
        icon: getIconUrl(item.weather?.at(0)?.icon),
        windSpeed: Math.round(item.wind.speed),
        feelsLike: Math.round(item.main.feels_like),
        humidity: item.main.humidity,
      };
    }) || null
  );
};

export const parseLocationData = (data: any) => {
  return data.features.map((feature: any) => ({
    name: feature.properties.address_line1,
    city: feature.properties.city,
    country: feature.properties.country,
    lon: feature.properties.lon,
    lat: feature.properties.lat,
  }));
};

export const getTime = (dateStr: string) => {
  const date = new Date(dateStr);
  const time = date.toTimeString().slice(0, 5); // Gets HH:MM
  const formatted = `${time}`;
  return formatted;
};

export const getIconUrl = (icon: string) =>
  `https://openweathermap.org/img/wn/${icon}@2x.png`;

export type Weather = ReturnType<typeof parseWeatherData>;
export type ForeCast = Weather & {
  date: string;
};

export type Location = {
  lat: number;
  lon: number;
  name: string;
  city: string;
  country: string;
};
