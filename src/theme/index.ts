import {createBox, createText, createTheme} from '@shopify/restyle';

const theme = createTheme({
  colors: {
    mainBackground: 'rgb(39,51,67)',
    cardPrimaryBackground: 'rgb(28, 38, 50)',
    textPrimary: 'rgb(242,242,242)',
    textSecondary: 'rgb(135,136,142)',
    cardPrimaryBackgroundOpacity: 'rgba(39, 51, 67, 0.8)',
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    header1: {
      fontSize: 40,
      fontWeight: 'bold',
    },
    header2: {
      fontSize: 22,
      fontWeight: 'bold',
    },
    label: {
      fontSize: 20,
      fontWeight: 500,
    },
    label2: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    body: {
      fontSize: 17,
      fontWeight: 500,
    },

    defaults: {
      color: 'textPrimary',
      fontFamily: 'Poppins',
    },
  },
});

export type Theme = typeof theme;
export default theme;

export const Box = createBox<Theme>();
export const Text = createText<Theme>();
