import React from 'react';
import {Box} from '../../theme';
import {useNavigation} from '@react-navigation/native';
import {LocationSearchController} from './controllers/LocationSearchController';

export const SearchScreen = () => {
  const {goBack} = useNavigation();

  return (
    <Box margin="m">
      <LocationSearchController onClose={goBack} />
    </Box>
  );
};
