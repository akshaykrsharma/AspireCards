import React from 'react';
import {Text,View,StyleSheet} from 'react-native'
import Strings from '../../../res/Strings';

function DebitCard() {
	return <View style={styles.containerStyle}><Text style={styles.textStyle}>{ Strings.TabTitles.payments}</Text></View>;
}


const styles = StyleSheet.create({
	containerStyle: {
		width: '100%',
		height: '100%',
		flex: 1,
		justifyContent: 'center',
		alignItems:'center'
	},
	textStyle: {
		fontSize:30,
	}
});

export default DebitCard;