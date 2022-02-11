import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {CardCellPropsType} from '../../../interfaces/interface';
import {boldFont, regularFont} from '../../../res/Fonts';
import Colors from '../../../res/Colors';
import { getIndianAmountFormat } from '../../../utils/Utils';

function CardCell(props: CardCellPropsType) {
  const {title, image, description, showSwitch,amount} = props;
  return (
    <View style={styles.containerStyle}>
      <Image source={image}></Image>
      <View style={styles.midContainer}>
        <Text style={styles.textStyle}>{title}</Text>
        <Text style={styles.descriptionStyle}>{`${description} ${getIndianAmountFormat(amount)}`}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    width: '90%',
    padding: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
  },
  textStyle: {
    ...boldFont(14),
    color: Colors.black,
    marginHorizontal: 5,
  },
  midContainer: {
    flex: 1,
    marginLeft: 5,
  },
  descriptionStyle: {
    ...regularFont(13),
    color: Colors.secondary_text,
    marginTop: 5,
    paddingHorizontal: 5,
  },
});

export default CardCell;
