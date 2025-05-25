import {ThemeProvider} from '@shopify/restyle';
import {render, renderHook} from '@testing-library/react-native';
import React, {JSXElementConstructor, ReactElement} from 'react';
import theme from '../theme';

const AllTheProviders = ({children}: {children: React.ReactNode}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export const customRender = (
  ui: ReactElement<React.ReactElement, string | JSXElementConstructor<any>>,
  options?: any,
) => render(ui, {wrapper: AllTheProviders, ...options});

export const customRenderHook = (hook: any) =>
  renderHook(hook, {wrapper: AllTheProviders});

// re-export everything
export * from '@testing-library/react-native';

// override render method
export {customRender as render, customRenderHook as renderHook};
