import React, {useEffect} from 'react';
import {View, StyleSheet, Text, ScrollView, Dimensions} from 'react-native';
import {DebitProps} from '../../../interfaces/interface';
import {boldFont, lightFont} from '../../../res/Fonts';
import Strings from '../../../res/Strings';
import Colors from '../../../res/Colors';
import Header from '../../common/Header';
import {getIndianAmountFormat, getStatusBarHeight} from '../../../utils/Utils';
import Card from './Card';
import Images from '../../../res/Images';
import HomeListItem from '../DebitCard/HomeListItem';
import CardCell from './CardCell';
import CardView from '../../common/CardView';
import AmountGreen from '../../common/AmountGreen';
import {connect} from 'react-redux';
import {getUser} from '../../../redux/actions/userAction';
import LoadingView from '../../common/LoadingView';

const {height} = Dimensions.get('screen');

function renderBalanceContainer(props: DebitProps) {
  const amount = !!props?.userData ? props?.userData.balance : '';
  return (
    <>
      <Text style={styles.availableBalance}>{Strings.availableBalance}</Text>
      <View style={styles.amountContainer}>
        <AmountGreen />
        <Text style={styles.amountText}>{getIndianAmountFormat(amount)}</Text>
      </View>
    </>
  );
}

function renderListItem(props: DebitProps) {
  let data = HomeListItem();
  return data.map((item, index) => {
    if (item.title == Strings.HomeListItems.limit) {
      const weekly_max = props?.userData?.weekly_max;
      if (!!weekly_max && weekly_max != '0') {
        return (
          <CardCell
            key={index}
            {...item}
            showSwitch={true}
            navigation={props.navigation}
            amount={weekly_max}
          />
        );
      } else {
        return (
          <CardCell
            key={index}
            {...item}
            showSwitch={false}
            description={Strings.spendingLimitDescriptionOff}
            navigation={props.navigation}
          />
        );
      }
    }

    return <CardCell key={index} {...item} navigation={props.navigation} />;
  });
}

function renderCard(props: DebitProps) {
  const value = props?.userData ? props.userData : '';
  let name = Strings.CardMasking.name,
    card_number = Strings.CardMasking.card_number,
    valid_through = Strings.CardMasking.valid_through,
    cvv = Strings.CardMasking.cvv;
  let weekly_max = '0',
    weekly_spend = '0';
  if (!!value) {
    name = value.name;
    card_number = value.card_number;
    valid_through = value.valid_through;
    cvv = value.cvv;
    weekly_spend = value.weekly_spend;
    weekly_max = value.weekly_max;
  }
  return (
    <Card
      style={styles.cardStyle}
      name={name}
      card_number={card_number}
      valid_through={valid_through}
      cvv={cvv}
      image={Images.visa.source}
      weekly_max={weekly_max}
      weekly_spend={weekly_spend}
    />
  );
}

function renderCardInfo(props: DebitProps) {
  return (
    <ScrollView
      style={styles.containerScrollView}
      contentContainerStyle={styles.contentContainerStyle}>
      <CardView style={styles.containerChildScrollView}>
        {renderCard(props)}
        {renderListItem(props)}
      </CardView>
    </ScrollView>
  );
}
function DebitCard(props: DebitProps) {
  useEffect(() => {
    props.userDataCall();
  }, []);

  console.log('data==>' + props.isFetching);

  return (
    <View style={styles.containerStyle}>
      <Header title={Strings.TabTitles.debitCard}></Header>
      {renderBalanceContainer(props)}
      {renderCardInfo(props)}
      <LoadingView isLoading={props.isFetching}></LoadingView>
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

const mapStateToProps = (state: any) => {
  return {
    userData: state.payload?.data,
    isFetching: state.isFetching,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    userDataCall: (params: any) => {
      dispatch(getUser(params));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DebitCard);
