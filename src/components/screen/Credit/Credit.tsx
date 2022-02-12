import React from 'react';
import {View,StyleSheet} from 'react-native'
import Colors from '../../../res/Colors';
import Strings from '../../../res/Strings';
import Header from '../../common/Header';

export default function Credit() {
  return (
    <View style={styles.containerStyle}>
      <Header title={Strings.TabTitles.credit}></Header>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    width: '100%',
    backgroundColor: Colors.background_blue,
  }
});