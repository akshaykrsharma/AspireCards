import React from 'react';
import { View, StyleSheet, Text, ScrollView, Dimensions } from 'react-native';
import { DebitProps } from '../../../interfaces/interface';
import {boldFont, lightFont} from '../../../res/Fonts';
import Strings from '../../../res/Strings';
import Colors from '../../../res/Colors';
import Header from '../../common/Header';
import {getIndianAmountFormat, getStatusBarHeight} from '../../../utils/Utils';
import Card from './Card';
import Images from '../../../res/Images';
import HomeListItem from '../DebitCard/HomeListItem';
import CardCell from './CardCell';

const {height} = Dimensions.get('screen');

function renderBalanceContainer() {
  const amount = '5000';
  return (
    <>
      <Text style={styles.availableBalance}>{Strings.availableBalance}</Text>
      <View style={styles.amountContainer}>
        <View style={styles.amountRoundContainer}>
          <Text style={styles.amountRound}>S$</Text>
        </View>
        <Text style={styles.amountText}>{getIndianAmountFormat(amount)}</Text>
      </View>
    </>
  );
}

function renderListItem() {
  let data = HomeListItem();
  return data.map((item, index) => (
    <CardCell {...item} amount={index == 1 ? '4000' : ''} />
  ));
}

function renderCardInfo() {
  return (
    <ScrollView
      style={styles.containerScrollView}
      contentContainerStyle={styles.contentContainerStyle}>
      <View style={styles.containerChildScrollView}>
        <Card
          style={styles.cardStyle}
          name={'Mark Henry'}
          card_number={'5647341124132020'}
          valid_through="12/20"
          cvv="456"
          image={Images.visa.source}
        />
        {renderListItem()}
      </View>
    </ScrollView>
  );
}
function DebitCard(props: DebitProps) {
  return (
    <View style={styles.containerStyle}>
      <Header title={Strings.TabTitles.debitCard}></Header>
      {renderBalanceContainer()}
      {renderCardInfo()}
      {/* <Button
        title={'GOTO Spending'}
        onPress={() => props.navigation.navigate('SpendingLimit')}></Button> */}
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    width: '100%',
    flex: 1,
    backgroundColor: Colors.background_blue,
  },
  availableBalance: {
    ...lightFont(14),
    color: Colors.white,
    paddingHorizontal: 24,
  },
  amountContainer: {
    paddingVertical: 15,
    paddingHorizontal: 24,
    flexDirection: 'row',
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
  cardStyle: {
    width: '88%',
    marginTop: -80,
    alignSelf: 'center',
    paddingBottom: 20,
  },
  amountRound: {
    ...boldFont(12),
    color: Colors.white,
  },
  amountText: {
    ...boldFont(24),
    marginLeft: 10,
    color: Colors.white,
  },
  containerScrollView: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  containerChildScrollView: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: Colors.white,
    paddingBottom: 0.32 * height,
  },
  contentContainerStyle: {
    marginTop: 0.32 * (height - getStatusBarHeight()),
  },
});

export default DebitCard;
