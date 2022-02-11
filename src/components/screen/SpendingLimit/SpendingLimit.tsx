import React from 'react';
import {View, StyleSheet, TextInput, Text, Image} from 'react-native';
import {DetailPropsType} from '../../../interfaces/interface';
import Strings from '../../../res/Strings';
import Colors from '../../../res/Colors';
import Header from '../../common/Header';
import CardView from '../../common/CardView';
import Images from '../../../res/Images';
import {regularFont} from '../../../res/Fonts';
import AmountGreen from '../../common/AmountGreen';

function SpendingLimit(props: DetailPropsType) {
  return (
    <View style={styles.containerStyle}>
      <Header
        onLeftPress={() => props.navigation.goBack()}
        title={Strings.HeadingTitle.spendingLimit}></Header>
      <CardView style={styles.cardStyle}>
        <View style={styles.topHeading}>
          <Image
            style={styles.imgMeterStyle}
            source={Images.meter.source}></Image>
          <Text style={styles.spendingLimitStyle}>
            {Strings.spendingLimitText}
          </Text>
        </View>
        <View
          style={{flexDirection: 'row', marginTop: 20, paddingHorizontal: 0}}>
          <AmountGreen />
          <TextInput style={styles.textInput} testID="input"></TextInput>
        </View>
        <View style={styles.sep}></View>
        <Text style={styles.spendingLimitDescriptionStyle}>
          {Strings.spendingLimitDescription}
        </Text>
      </CardView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.background_blue,
  },
  textStyle: {
    fontSize: 30,
  },
  cardStyle: {
    height: '100%',
    marginTop: 30,
    paddingHorizontal: 30,
    paddingVertical: 20,
    marginBottom: 10,
  },
  topHeading: {
    flexDirection: 'row',
  },
  imgMeterStyle: {
    marginRight: 10,
  },
  spendingLimitStyle: {
    color: Colors.black,
    ...regularFont(14),
  },
  spendingLimitDescriptionStyle: {
    color: Colors.secondary_text,
    ...regularFont(13),
    marginTop: 5,
  },
  textInput: {
    flex: 1,
    minHeight: 40,
    padding: 5,
  },
  sep: {
    marginTop: 6,
    backgroundColor: Colors.secondary_text,
    width: '100%',
    height: 1,
  },
});

export default SpendingLimit;
