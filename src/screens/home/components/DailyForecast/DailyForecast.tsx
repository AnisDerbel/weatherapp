import React from 'react';
import {Box} from '../../../../theme';
import {Typography} from '../../../../ui/Typography';
import {Image, SectionList} from 'react-native';
import {ForeCast} from '../../../../services/parser';
import {Card} from '../../../../ui/Card';
import {ListItemSeperator} from '../../../../ui/ListItemSeperator';

type Props = {
  forecast: Array<{title: string; data: ForeCast[]}>;
};

export const DailyForecast = ({forecast}: Props) => {
  return (
    <Card>
      <>
        <Typography variant="title" color="textSecondary">
          5-Day Forecast
        </Typography>

        <SectionList
          style={styles.scrollView}
          sections={forecast || []}
          ItemSeparatorComponent={ListItemSeperator}
          keyExtractor={item => item.date}
          renderItem={({item: weather, index}) => (
            <Box
              key={index}
              flexDirection="row"
              justifyContent="space-around"
              alignItems="center">
              <Box flexDirection="row" gap="l" alignItems="center">
                <Typography variant="label2">{weather.date}</Typography>
                <Image
                  tintColor={'white'}
                  width={45}
                  height={45}
                  source={{uri: weather?.icon}}
                />
              </Box>
              <Box flexDirection="row" gap="l" alignItems="center">
                <Typography variant="label2">
                  {weather.minTemperature}°
                </Typography>
                <Typography variant="label2">
                  {weather.maxTemperature}°
                </Typography>
              </Box>
            </Box>
          )}
          renderSectionHeader={({section: {title}}) => (
            <Box
              backgroundColor="cardPrimaryBackgroundOpacity"
              padding="s"
              borderRadius="m">
              <Typography variant="label2">{title}</Typography>
            </Box>
          )}
        />
      </>
    </Card>
  );
};

const styles = {
  scrollView: {
    maxHeight: 300,
  },
};
