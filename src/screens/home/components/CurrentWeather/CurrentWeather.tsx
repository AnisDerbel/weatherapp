import React from 'react';
import {Box} from '../../../../theme';
import {Typography} from '../../../../ui/Typography';
import {Image} from 'react-native';
import {Location, Weather} from '../../../../services/parser';
import {Card} from '../../../../ui/Card';

export type Props = {
  location: Location;
  weather: Weather;
};
export const CurrentWeather = ({location, weather}: Props) => {
  return (
    <Card>
      <>
        <Typography variant="title" color="textSecondary">
          Current
        </Typography>
        <Typography variant="header2">
          {location?.city || location?.name}
        </Typography>
        <Box flexDirection="row" justifyContent="space-between">
          <Image
            tintColor={'white'}
            width={100}
            height={100}
            source={{uri: weather?.icon}}
          />
          <Box>
            <Typography variant="header1">{weather?.temperature}°</Typography>
            <Typography color="textSecondary">
              feels like <Typography> {weather?.feelsLike}°</Typography>
            </Typography>
            <Typography marginTop="s" variant="label">
              {weather?.description}
            </Typography>
          </Box>
        </Box>
        <Box marginTop="s" flexDirection="row" justifyContent="space-between">
          <Typography>
            High: {weather?.maxTemperature}° Low: {weather?.minTemperature}°
          </Typography>
          <Typography>Wind: {weather?.windSpeed} Km/h</Typography>
        </Box>
        <Typography>Humidity: {weather?.humidity}</Typography>
      </>
    </Card>
  );
};
