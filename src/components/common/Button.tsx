import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { ButtonProps } from '../../interfaces/interface';
import Colors from '../../res/Colors';
import {boldFont} from '../../res/Fonts'


function Button(props: ButtonProps) {
  const {containerStyle,titleStyle} = styles;
  return (
		  <TouchableOpacity onPress={props.onPress} style={[containerStyle,props.style]}>
			  <Text style={[titleStyle,props.textStyle]}>{props.title}</Text>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    padding: 8,
    backgroundColor: Colors.app_theme,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight:48,
	  borderRadius: 30,
  },
  titleStyle: {
    ...boldFont(16),
    color: Colors.white,
  },
});

export default Button;
