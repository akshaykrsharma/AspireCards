import 'react-native';
import React from 'react';
import Check from './Check';

import renderer from 'react-test-renderer';

it('Check has been rendered successfully', () => {
  renderer.create(<Check isChecked />);
});