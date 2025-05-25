import React from 'react';
import {SearchInput} from '../../../ui/SearchInput';
import {Typography} from '../../../ui/Typography';
import {FlatList, Pressable, TouchableOpacity} from 'react-native';
import {ListItemSeperator} from '../../../ui/ListItemSeperator';
import {useSearchLocation} from '../hooks/useSearchLocation';
import {Box} from '../../../theme';
import {Location} from '../../../services/parser';

type Props = {
  onClose: () => void;
};
export const LocationSearchController = ({onClose}: Props) => {
  const {
    suggestedLocations,
    locationHistory,
    query,
    setQuery,
    onSetActiveLocation,
  } = useSearchLocation();

  const onPressLocation = (loc: Location) => {
    onSetActiveLocation(loc);
    onClose();
  };

  return (
    <>
      <Box flexDirection="row" alignItems="center" gap="m">
        <SearchInput autoFocus onChangeLocation={setQuery} value={query} />
        <TouchableOpacity onPress={onClose}>
          <Typography color="textSecondary">Close</Typography>
        </TouchableOpacity>
      </Box>
      <Box
        backgroundColor="cardPrimaryBackground"
        borderRadius="m"
        padding="m"
        marginTop="m">
        {!query && (
          <Typography marginBottom="m" variant="title" color="textSecondary">
            Recent search ({locationHistory.length})
          </Typography>
        )}

        <FlatList
          data={query ? suggestedLocations : locationHistory}
          keyExtractor={item => item.lat + item.lon + item.name}
          ItemSeparatorComponent={ListItemSeperator}
          renderItem={({item}) => (
            <Pressable onPress={() => onPressLocation(item)}>
              <Typography color="textPrimary">
                {item.name}, {item.city}
              </Typography>
            </Pressable>
          )}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        />
      </Box>
    </>
  );
};
