import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import { CardPropsType } from '../../../interfaces/interface';
import Images from '../../../res/Images';
import Colors from '../../../res/Colors';
import { boldFont, regularFont } from '../../../res/Fonts';
import { getCCFormatNumber } from '../../../utils/Utils';
import Strings from '../../../res/Strings';
import VerticalCard from './VerticalCard';
 
function Card(props: CardPropsType) {
  return (
	  <View style={[styles.containerStyle, props.style]}>
		  <TouchableOpacity style={styles.topContainer}>
			  <Image source={Images.eye_on.source} style={styles.eyeStyle}></Image>
			  <Text style={styles.hideCardStyle}>{ Strings.hideCardNumber}</Text>
		  </TouchableOpacity>
		  <View style={styles.cardStyle}>
			  <Image source={Images.logo.source} style={styles.logo}></Image>
			  <Text style={styles.nameStyle}>{props.name}</Text>
			  <Text style={styles.creditCardNumber}>{getCCFormatNumber(props.card_number)}</Text>
			  <View style={styles.cvvContainer}>
				  <Text style={styles.validThruStyle}>{`${Strings.validthru} ${props.valid_through}`}</Text>
				  <Text style={styles.cvvStyle}>{`${Strings.cvv} ${props.cvv}`}</Text>
			  </View>
			 <Image source={props.image} style={styles.logo}></Image>

		  </View>

		  <VerticalCard></VerticalCard>
     
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    width: '100%',
  },
  textStyle: {
    fontSize: 30,
  },
   logo: {
	   alignSelf: 'flex-end',
	   marginTop: 10,
	},
	cardStyle: {
		backgroundColor: Colors.app_theme,
		borderRadius: 10,
		minHeight: 180,
		padding: 24,
	},
	nameStyle: {
		...boldFont(24),
		color: Colors.white,
		marginTop: 20,
		marginBottom: 20
	},
	creditCardNumber: {
		...regularFont(14),
		color: Colors.white,
		marginBottom: 20,
	},
	validThruStyle: {
		...regularFont(13),
		color: Colors.white,
		marginRight: 50,
	},
	cvvStyle: {
		...regularFont(13),
		color: Colors.white,
	},
	cvvContainer: {
		flexDirection: 'row',
	},
	topContainer: {
		backgroundColor: Colors.white,
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
		padding:10,
		paddingBottom: 20,
		minHeight: 15,
		flexDirection:'row',
		marginBottom: -10,
		width: 170,
		justifyContent: 'center',
		alignSelf:'flex-end'
		
	},
	eyeStyle: {
		marginRight: 5,
		marginTop: -3,
	},
	hideCardStyle: {
		...boldFont(13),

		color: Colors.app_theme,
	},


});

export default Card;
