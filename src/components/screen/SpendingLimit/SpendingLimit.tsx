import React from 'react';
import {View, StyleSheet} from 'react-native';
import Strings from '../../../res/Strings';
import Header from '../../common/Header';

interface PropsType {
  navigation: {
    goBack: Function,
  };
}

function SpendingLimit(props: PropsType) {
  return (
    <View style={styles.containerStyle}>
      <Header
        onLeftPress={() => props.navigation.goBack()}
        title={Strings.HeadingTitle.spendingLimit}></Header>
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
});

export default SpendingLimit;
