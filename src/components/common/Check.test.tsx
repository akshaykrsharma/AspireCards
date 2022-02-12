import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer'

import Check from './Check';

//it is alias of test so we can use both

describe("Checking Check Component...", () => {
	it('Check has been rendered successfully', () => {
		renderer.create(<Check isChecked />);
	});
});


/// To creating snapshot

describe("Checking for snapshot...", () => {
	test("Taking snapshot of code", () => {
		const component = renderer.create(<Check isChecked />);
		const contentOfCheck = component.toJSON();
		expect(contentOfCheck).toMatchSnapshot();
	});
});




