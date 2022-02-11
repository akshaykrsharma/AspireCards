import React from 'react';
import {View, StyleSheet} from 'react-native';
import { DetailPropsType } from '../../../interfaces/interface';
import Strings from '../../../res/Strings';
import Header from '../../common/Header';
 
function SpendingLimit(props: DetailPropsType) {
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
