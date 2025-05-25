import geoapifyClient from './geoapifyClient';
import openWeatherMapClient from './openWeatherMapClient';
import {
  ForeCast,
  Location,
  parseDailyForecast,
  parseLocationData,
  parseWeatherData,
  Weather,
} from './parser';

export type GeoLocation = {
  lat: number;
  lon: number;
};
export const getCurrentWeather = async (
  geoLocation: GeoLocation,
): Promise<Weather> => {
  try {
    const response = await openWeatherMapClient.get('/data/2.5/weather', {
      params: {...geoLocation, units: 'metric'},
    });
    return parseWeatherData(response.data);
  } catch (error) {
    throw error;
  }
};
export const getCoordonatesByLocation = async (
  text: string,
): Promise<Location[]> => {
  try {
    const response = await geoapifyClient.get('/v1/geocode/autocomplete?', {
      params: {
        text,
      },
    });

    return parseLocationData(response.data);
  } catch (error) {
    throw error;
  }
};

export const getLocationByCoordonates = async (
  geolocation: GeoLocation,
): Promise<Location[]> => {
  try {
    const response = await openWeatherMapClient.get('/geo/1.0/reverse', {
      params: geolocation,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getDailyForcast = async (
  geoLocation: GeoLocation,
): Promise<ForeCast[]> => {
  try {
    const response = await openWeatherMapClient.get('/data/2.5/forecast', {
      params: {
        ...geoLocation,
        units: 'metric',
      },
    });

    return parseDailyForecast(response.data);
  } catch (error) {
    throw error;
  }
};
