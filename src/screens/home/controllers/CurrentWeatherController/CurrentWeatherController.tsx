import React from 'react';
import {CurrentWeather} from '../../components/CurrentWeather/CurrentWeather';
import {useCurrentWeather} from '../../hooks/useCurrentWeather';
import {Card} from '../../../../ui/Card';
import {Typography} from '../../../../ui/Typography';

export const CurrentWeatherController = () => {
  const {currentWeather, activeLocation, loading} = useCurrentWeather();

  if (loading) {
    return <Typography>Fetching...</Typography>;
  }

  if (!currentWeather || !activeLocation) {
    return (
      <Card>
        <Typography> We are not able to get the current weather!</Typography>
      </Card>
    );
  }

  return <CurrentWeather weather={currentWeather} location={activeLocation} />;
};
