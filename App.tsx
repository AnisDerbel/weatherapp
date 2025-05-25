import {ThemeProvider} from '@shopify/restyle';
import React from 'react';
import theme from './src/theme';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Navigator} from './src/navigator';
import {Provider} from 'react-redux';
import {store} from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SafeAreaView style={styles.container}>
          <Navigator />
        </SafeAreaView>
      </ThemeProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.mainBackground,
  },
});
