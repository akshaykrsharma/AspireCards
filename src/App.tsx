import React from 'react';
import AppNavigation from './navigation/AppNavigation';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Warning: ...']);

const App = () => {
  return <AppNavigation />;
};
export default App;
