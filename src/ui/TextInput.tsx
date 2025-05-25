import {
  backgroundColor,
  BackgroundColorProps,
  border,
  BorderProps,
  ColorProps,
  composeRestyleFunctions,
  createVariant,
  spacing,
  SpacingProps,
  useRestyle,
  VariantProps,
} from '@shopify/restyle';
import React from 'react';
import {TextInput as RNTextInput} from 'react-native';
import {Theme} from '../theme';

type TextInputProps = React.ComponentPropsWithRef<typeof RNTextInput> &
  BorderProps<Theme> &
  SpacingProps<Theme> &
  BackgroundColorProps<Theme> &
  ColorProps<Theme> &
  VariantProps<Theme, 'textVariants'>;

const variant = createVariant({themeKey: 'textVariants'});
const restyleFunctions = composeRestyleFunctions<Theme, TextInputProps>([
  spacing,
  border,
  backgroundColor,
  variant,
]);

export const TextInput = ({...rest}) => {
  const props = useRestyle(restyleFunctions, rest);
  return <RNTextInput {...props} />;
};
