import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Text, Image} from 'react-native';
import {DetailPropsType} from '../../../interfaces/interface';
import Strings from '../../../res/Strings';
import Colors from '../../../res/Colors';
import Header from '../../common/Header';
import CardView from '../../common/CardView';
import Images from '../../../res/Images';
import {boldFont, regularFont} from '../../../res/Fonts';
import AmountGreen from '../../common/AmountGreen';
import Button from '../../common/Button';
import {getIndianAmountFormat} from '../../../utils/Utils';
import {SafeAreaView} from 'react-native-safe-area-context';
import {connect} from 'react-redux';
import {getUser, updateUserData} from '../../../redux/actions/userAction';
import LoadingView from '../../common/LoadingView';

function submitUpdateAmount(props: DetailPropsType, amount: number) {
  props.updateUserData({weekly_max: amount});
  if (props.isFetching == false) {
    props.navigation.goBack();
  }
}

function renderAmountContainer(value: any, updateAmount: Function) {
  return (
    <View style={{flexDirection: 'row', marginTop: 20, paddingHorizontal: 0}}>
      <AmountGreen />
      <TextInput
        style={styles.textInput}
        onChangeText={text => {
          updateAmount(text.replace(' ', '').replace(',', ''));
        }}
        defaultValue={`${getIndianAmountFormat('' + value)}`}
        keyboardType={'decimal-pad'}
        testID="input"></TextInput>
    </View>
  );
}

function renderAmountButtons(updateAmount: Function) {
  return (
    <View style={styles.horizontalStyle}>
      <Button
        onPress={() => updateAmount(5000)}
        title={Strings.amount1}
        textStyle={styles.amountTextStyle}
        style={styles.buttonSemiStyle}
      />
      <Button
        onPress={() => updateAmount(10000)}
        title={Strings.amount2}
        textStyle={styles.amountTextStyle}
        style={styles.buttonSemiStyle}
      />
      <Button
        onPress={() => updateAmount(20000)}
        title={Strings.amount3}
        textStyle={styles.amountTextStyle}
        style={styles.buttonSemiStyle}
      />
    </View>
  );
}

function SpendingLimit(props: DetailPropsType) {
  const weekly_max = props?.userData?.weekly_max;
  const [value, updateAmount] = useState(!!weekly_max ? weekly_max : 0);
  return (
    <View style={styles.containerStyle}>
      <Header
        onLeftPress={() => props.navigation.goBack()}
        title={Strings.HeadingTitle.spendingLimit}></Header>
      <CardView style={styles.cardStyle} topStyle={{paddingTop: 0}}>
        <View style={styles.topHeading}>
          <Image
            style={styles.imgMeterStyle}
            source={Images.meter.source}></Image>
          <Text style={styles.spendingLimitStyle}>
            {Strings.spendingLimitText}
          </Text>
        </View>
        {renderAmountContainer(value, updateAmount)}
        <View style={styles.sep}></View>
        <Text style={styles.spendingLimitDescriptionStyle}>
          {Strings.spendingLimitDescription}
        </Text>
        {renderAmountButtons(updateAmount)}
        <View style={{flex: 1}} />
        <SafeAreaView>
          <Button
            onPress={() => {
              submitUpdateAmount(props, value);
            }}
            style={styles.buttonStyle}
            title={Strings.submit}></Button>
        </SafeAreaView>
      </CardView>
      <LoadingView isLoading={props.isFetching}></LoadingView>
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
    height: '88%',
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
    ...boldFont(24),
  },
  sep: {
    marginTop: 6,
    backgroundColor: Colors.secondary_text,
    width: '100%',
    height: 1,
  },
  buttonStyle: {
    width: '70%',
    alignSelf: 'center',
    marginBottom: 80,
  },
  buttonSemiStyle: {
    alignSelf: 'center',
    marginTop: 50,
    backgroundColor: Colors.background_amount_button,
    borderRadius: 4,
    marginHorizontal: 10,
    minHeight: 40,
    padding: 8,
    flex: 1,
    paddingHorizontal: 10,
  },
  amountTextStyle: {
    color: Colors.app_theme,
    ...regularFont(12),
  },
  horizontalStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const mapStateToProps = (state: any) => {
  return {
    userData: state.payload?.data,
    isFetching: state.isFetching,
    updateSuccess: state.updateSuccess,
  };
};

export default connect(mapStateToProps, {
  getUser,
  updateUserData,
})(SpendingLimit);
