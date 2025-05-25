import React, {useEffect} from 'react';
import {Box} from '../../theme';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useCurrentLocation} from './hooks/useCurrentLocation';
import {RootStackParamList} from '../../navigator';
import {CurrentWeatherController} from './controllers/CurrentWeatherController/CurrentWeatherController';
import {DailyForecastController} from './controllers/DailyForecastController/DailyForecastController';
import {SearchController} from './controllers/SearchController/SearchController';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export const HomeScreen = () => {
  const {navigate} = useNavigation<NavigationProp>();

  const {getCurrentLocation, activeLocation} = useCurrentLocation();

  const onNavigateToSearchScreen = () => navigate('Search');

  useEffect(() => {
    getCurrentLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Box margin="m" gap="s">
      <SearchController
        onPress={onNavigateToSearchScreen}
        location={activeLocation}
      />
      <CurrentWeatherController />
      <DailyForecastController />
    </Box>
  );
};
