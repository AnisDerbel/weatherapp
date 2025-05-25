import {configureStore} from '@reduxjs/toolkit';
import locationReducer from './locationSlice';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['locationHistory'],
};

const persistedReducer = persistReducer(persistConfig, locationReducer);

export const store = configureStore({
  reducer: {
    weather: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
