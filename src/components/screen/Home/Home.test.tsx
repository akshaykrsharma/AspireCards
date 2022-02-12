import 'react-native';
import React from 'react';
import Home from './Home';

import renderer from 'react-test-renderer';

it('Home has been rendered successfully', () => {
  renderer.create(<Home  />);
});