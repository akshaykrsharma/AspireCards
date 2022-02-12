import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {CardCellPropsType} from '../../../interfaces/interface';
import {boldFont, regularFont} from '../../../res/Fonts';
import Colors from '../../../res/Colors';
import {getIndianAmountFormat} from '../../../utils/Utils';
import Images from '../../../res/Images';

function CardCell(props: CardCellPropsType) {
  const {
    title,
    image,
    description,
    showSwitch,
    amount,
    navigate,
    disableService,
  } = props;
  return (
    <TouchableOpacity
      style={styles.containerStyle}
      onPress={() => {
        if (!!showSwitch) {
          disableService(title);
        } else {
          if (navigate) {
            props.navigation.navigate(navigate);
          }
        }
      }}>
      <Image source={image} />
      <View style={styles.midContainer}>
        <Text style={styles.textStyle}>{title}</Text>
        <Text style={styles.descriptionStyle}>{`${description} ${
          !!amount && amount != '0' ? getIndianAmountFormat(amount) : ''
        }`}</Text>
      </View>
      {showSwitch != undefined && (
        <Image
          style={Images.checked.style}
          source={showSwitch ? Images.checked.source : Images.unChecked.source}
        />
      )}
    </TouchableOpacity>
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
