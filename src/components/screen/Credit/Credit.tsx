import React from 'react';
import {Text,View,StyleSheet} from 'react-native'
import Strings from '../../../res/Strings';

export default function Credit() {
	return <View style={styles.containerStyle}><Text style={styles.textStyle}>{ Strings.TabTitles.credit}</Text></View>;
}


const styles = StyleSheet.create({
	containerStyle: {
		width: '100%',
		justifyContent:'center',
		flex: 1,
	},
	textStyle: {
		fontSize: 30,
		alignSelf: 'center',
	}
});