import React from 'react';
import { View, Text } from 'react-native';
import TestRenderer from 'react-test-renderer';

import HomeListItem from './HomeListItem';
const arrItems=HomeListItem.call();
const count = arrItems.length;

test("Action Items on Debit Card Screen = 5", () => {
	expect(count).toBe(5);
})

// // "Weekly spending limit"
// test("Action Items on Debit Card Screen is greater than 6", () => {
// 	expect(count).toBeGreaterThanOrEqual(6);
// })

const dataOfWeeklySpending = arrItems[1].title;

test("Action Items on Debit Card Screen has title Weekly spending limit", () => {
	expect(dataOfWeeklySpending).toMatch("Weekly spending limit");
})

test("Action Items on Debit Card Screen has title Weekly spending limit", () => {
	expect(dataOfWeeklySpending).toContain('limit');
})


function Link(props) {
  return <View>{props.children}</View>;
}

const testRenderer = TestRenderer.create(
	<Link><Text>Hello</Text></Link>
);





console.log(testRenderer.toJSON());