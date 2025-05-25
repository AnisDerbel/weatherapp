import React from 'react';
import {DailyForecast} from '../../components/DailyForecast/DailyForecast';
import {useDailyForecast} from '../../hooks/useDailyForecast';
import {Card} from '../../../../ui/Card';
import {Typography} from '../../../../ui/Typography';

export const DailyForecastController = () => {
  const {grouppedForecast, loading} = useDailyForecast();

  if (loading) {
    return <Typography>Fetching...</Typography>;
  }

  if (!grouppedForecast) {
    return (
      <Card>
        <Typography> We are not able to get the daily forecast!</Typography>
      </Card>
    );
  }

  return <DailyForecast forecast={grouppedForecast} />;
};
