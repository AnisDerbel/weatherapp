import React from 'react';
import {Box} from '../theme';
import {TextInput} from './TextInput';
import {useTheme} from '@shopify/restyle';
import {Pressable, StyleSheet, TextInputProps} from 'react-native';
import Search from '../assets/icons/Search.svg';
type Props = {
  onChangeLocation?: (location: string) => void;
} & TextInputProps;
export const SearchInput = ({onChangeLocation, onPress, ...rest}: Props) => {
  const theme = useTheme();
  return (
    <Pressable style={styles.pressable} onPress={onPress}>
      <Box
        backgroundColor="cardPrimaryBackground"
        borderRadius="l"
        alignItems="center"
        flexDirection="row"
        paddingHorizontal="s"
        flexGrow={1}>
        <Search fill={theme.colors.textSecondary} />
        <TextInput
          paddingVertical="s"
          paddingHorizontal="s"
          placeholder="Search"
          variant="label2"
          onPress={onPress}
          onChangeText={onChangeLocation}
          placeholderTextColor={theme.colors.textSecondary}
          {...rest}
        />
      </Box>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    flexGrow: 1,
  },
});
