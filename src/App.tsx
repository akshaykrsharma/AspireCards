import React from 'react';
import AppNavigation from './navigation/AppNavigation';
import {store} from './redux/stores';
import {Provider} from 'react-redux';

console.disableYellowBox = true;

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};
export default App;
