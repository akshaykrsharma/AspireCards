import React from 'react';
import AppNavigation from './navigation/AppNavigation';
import { LogBox } from 'react-native';
import { store } from './redux/stores';
import { Provider } from 'react-redux';

LogBox.ignoreLogs(['Warning: ...']);

const App = () => {
  return <Provider store={store}><AppNavigation /></Provider>
  //return <AppNavigation />;
};
export default App;
