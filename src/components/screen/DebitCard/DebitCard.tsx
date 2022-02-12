import React, { useEffect } from 'react';
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
import APIManager from '../../../networking/APIManager';
import USER_DATA_URL  from '../../../networking/EndPoints';
import CardView from '../../common/CardView';
import AmountGreen from '../../common/AmountGreen';
import { connect } from 'react-redux';
import { getUser, getUserData } from '../../../redux/actions/userAction';


const {height} = Dimensions.get('screen');

function renderBalanceContainer() {
  const amount = '5000';
  return (
    <>
      <Text style={styles.availableBalance}>{Strings.availableBalance}</Text>
      <View style={styles.amountContainer}>
        <AmountGreen/>
        <Text style={styles.amountText}>{getIndianAmountFormat(amount)}</Text>
      </View>
    </>
  );
}

function renderListItem(props:DebitProps) {
  let data = HomeListItem();
  return data.map((item, index) => (
    <CardCell key={index} {...item} navigation={props.navigation} amount={index == 1 ? '4000' : ''} />
  ));
}

function renderCardInfo(props:DebitProps) {
  return (
    <ScrollView
      style={styles.containerScrollView}
      contentContainerStyle={styles.contentContainerStyle}>
      <CardView style={styles.containerChildScrollView}>
        <Card
          style={styles.cardStyle}
          name={'Mark Henry'}
          card_number={'5647341124132020'}
          valid_through="12/20"
          cvv="456"
          image={Images.visa.source}
        />
        {renderListItem(props)}
      </CardView>
    </ScrollView>
  );
}
function DebitCard(props: DebitProps) {
 
  useEffect(() => {
    props.userDataCall();
  },[])

  return (
    <View style={styles.containerStyle}>
      <Header title={Strings.TabTitles.debitCard}></Header>
      {renderBalanceContainer()}
      {renderCardInfo(props)}
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
  cardStyle: {
    width: '88%',
    marginTop: -80,
    alignSelf: 'center',
    paddingBottom: 20,
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
    paddingBottom: 0.34 * height,
  },
  contentContainerStyle: {
    marginTop: 0.34 * (height - getStatusBarHeight()) - 80,
  },
});

const mapStateToProps=(state:any)=>{
  return {
    userdata:state.user_reducer
  }
}

const mapDispatchToProps=(dispatch:any)=>{
  return {
    userDataCall:(params:any)=>{dispatch(getUser(params))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(DebitCard);
