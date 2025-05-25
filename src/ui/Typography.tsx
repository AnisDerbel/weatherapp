/*
 * Copyright (C) 2023 Alfen N.V.
 *
 *  The file and the file content is proprietary and confidential,
 *  unauthorized copying of this file, via any medium is strictly prohibited
 *
 */

import {TextProps as RestyletextProps} from '@shopify/restyle';
import React from 'react';
import {TextProps, TextStyle} from 'react-native';
import {Text, Theme} from '../theme';

export type FontWeight = TextStyle['fontWeight'];

type Props = {
  children: string | React.ReactNode;
} & RestyletextProps<Theme> &
  TextProps;

export const Typography = ({children, variant = 'body', ...rest}: Props) => {
  return (
    <Text
      variant={variant}
      allowFontScaling={false}
      textBreakStrategy="simple"
      {...rest}>
      {children}
    </Text>
  );
};
