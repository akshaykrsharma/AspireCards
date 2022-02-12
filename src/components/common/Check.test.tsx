import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer'

import Check from './Check';

it('Check has been rendered successfully', () => {
  renderer.create(<Check isChecked />);
});


/// To creating snapshot
test("Taking snapshot of code", () => {
	const component = renderer.create(<Check isChecked />);
	const contentOfCheck = component.toJSON();
	expect(contentOfCheck).toMatchSnapshot();
});

