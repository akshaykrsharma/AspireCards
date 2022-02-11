import React from 'react';
import {Text,View,StyleSheet} from 'react-native'
import Colors from '../../../res/Colors';
import Strings from '../../../res/Strings';

function Profile():any {
	return <View style={styles.containerStyle}><Text style={styles.textStyle}>{Strings.TabTitles.profile}</Text></View>;
}


const styles = StyleSheet.create({
	containerStyle: {
		width: '100%',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.background_blue,
	},
	textStyle: {
		fontSize:30,
	}
});

export default Profile;