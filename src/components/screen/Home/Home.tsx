import React from 'react';
import {View, StyleSheet} from 'react-native';
import Strings from '../../../res/Strings';
import Header from '../../common/Header';

function Home() {
  return (
    <View style={styles.containerStyle}>
      <Header title={Strings.TabTitles.home}></Header>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    width: '100%',
  }
});

export default Home;
