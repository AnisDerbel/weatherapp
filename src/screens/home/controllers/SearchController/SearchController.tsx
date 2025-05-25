import React from 'react';
import {SearchInput} from '../../../../ui/SearchInput';
import {Location} from '../../../../services/parser';

type Props = {
  location: Location | null;
  onPress?: () => void;
};
export const SearchController = ({location, onPress}: Props) => {
  return (
    <SearchInput
      testID="search-input"
      editable={false}
      value={location?.name}
      onPress={onPress}
    />
  );
};
