import 'react-native';
import React from 'react';
import Header from './Header';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Header has been render successfully', () => {
  renderer.create(<Header />);
});