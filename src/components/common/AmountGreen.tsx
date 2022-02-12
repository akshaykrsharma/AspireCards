import React from 'react';
import {View,Text,StyleSheet } from 'react-native';
import Colors from '../../res/Colors';
import { boldFont } from '../../res/Fonts';

export default function AmountGreen() {
	return(<View style={styles.amountRoundContainer}>
          <Text style={styles.amountRound}>S$</Text>
        </View>)
}

const styles = StyleSheet.create({
  amountRound: {
    ...boldFont(12),
    color: Colors.white,
  },
  amountRoundContainer: {
    paddingHorizontal: 10,
    minWidth: 40,
    paddingVertical: 5,
    backgroundColor: Colors.app_theme,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});