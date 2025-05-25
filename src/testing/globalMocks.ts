import {ForeCast, Location, Weather} from '../services/parser';

jest.mock('../assets/icons/Search.svg', () => 'Search');

export const mockLocation: Location = {
  city: 'Paris',
  name: 'Paris',
  country: 'France',
  lat: 48.8566,
  lon: 2.3522,
};

export const mockWeather: Weather = {
  name: 'Paris',
  temperature: 22,
  feelsLike: 20,
  description: 'Clear sky',
  icon: 'https://example.com/icon.png',
  maxTemperature: 25,
  minTemperature: 18,
  windSpeed: 10,
  humidity: 60,
};

export const mockForecast: Array<{title: string; data: ForeCast[]}> = [
  {
    title: 'Monday',
    data: [
      {
        name: 'Paris',
        temperature: 16,
        minTemperature: 9,
        maxTemperature: 21,
        description: 'Clear sky',
        icon: 'https://example.com/icon1.png',
        windSpeed: 8,
        feelsLike: 15,
        humidity: 65,
        date: '10:00',
      },
      {
        name: 'Paris',
        temperature: 18,
        minTemperature: 14,
        maxTemperature: 22,
        description: 'Partly cloudy',
        icon: 'https://example.com/icon2.png',
        windSpeed: 12,
        feelsLike: 17,
        humidity: 70,
        date: '15:00',
      },
    ],
  },
  {
    title: 'Tuesday',
    data: [
      {
        name: 'Paris',
        temperature: 16,
        minTemperature: 12,
        maxTemperature: 20,
        description: 'Clear sky',
        icon: 'https://example.com/icon1.png',
        windSpeed: 8,
        feelsLike: 15,
        humidity: 65,
        date: '10:00',
      },
      {
        name: 'Paris',
        temperature: 18,
        minTemperature: 10,
        maxTemperature: 35,
        description: 'Partly cloudy',
        icon: 'https://example.com/icon2.png',
        windSpeed: 12,
        feelsLike: 17,
        humidity: 70,
        date: '15:00',
      },
    ],
  },
];
