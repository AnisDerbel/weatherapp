import React, {ReactElement} from 'react';
import {Box} from '../theme';

type Props = {
  children: ReactElement;
};
export const Card = ({children}: Props) => (
  <Box
    backgroundColor="cardPrimaryBackground"
    borderRadius="m"
    padding="m"
    gap="s">
    {children}
  </Box>
);
