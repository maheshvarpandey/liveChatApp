/* eslint-disable react/react-in-jsx-scope */
/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {extendTheme, NativeBaseProvider} from 'native-base';
// 2. Extend the theme to include custom colors, fonts, etc
const newColorTheme = {
  brand: {
    900: '#8287af',
    800: '#7c83db',
    700: '#b3bef6',
  },
};
const theme = extendTheme({colors: newColorTheme});
// 3. Pass the `theme` prop to the `NativeBaseProvider`

// 3. Pass the `theme` prop to the `NativeBaseProvider`
function AppWrapper() {
  return (
    <NativeBaseProvider theme={theme}>
      <App />
    </NativeBaseProvider>
  );
}

AppRegistry.registerComponent(appName, () => AppWrapper);
