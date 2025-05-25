import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ForeCast, Location, Weather} from '../services/parser';

interface WeatherState {
  activeLocation: Location | null;
  locationHistory: Location[];
  currentWeather: Weather | null;
  dailyForecast: ForeCast[] | null;
}

const initialState: WeatherState = {
  activeLocation: null,
  locationHistory: [],
  currentWeather: null,
  dailyForecast: null,
};

const locationSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setActiveLocation: (state, action: PayloadAction<Location>) => {
      state.activeLocation = action.payload;
      state.locationHistory = setLocationHistory(
        action.payload,
        state.locationHistory,
      );
    },
    setCurrentWeather: (state, action: PayloadAction<Weather | null>) => {
      state.currentWeather = action.payload;
    },
    setDailyForecast: (state, action: PayloadAction<ForeCast[] | null>) => {
      state.dailyForecast = action.payload;
    },
  },
});

const setLocationHistory = (location: Location, history: Location[]) => {
  const filtered = history.filter(
    item => item.lat !== location.lat || item.lon !== location.lon,
  );
  return [location, ...filtered].slice(0, 10);
};

export const {setActiveLocation, setCurrentWeather, setDailyForecast} =
  locationSlice.actions;
export default locationSlice.reducer;
