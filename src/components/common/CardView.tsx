import React from 'react';
import {View, StyleSheet} from 'react-native';
import Colors from '../../res/Colors';
export default function CardView(props: any) {
  return (
    <View style={styles.whiteSpace}>
      <View style={[styles.cardStyle, props.style]}>{props.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardStyle: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: Colors.white,
  },
  whiteSpace: {
    width: '100%',
    paddingTop: 80,
  },
});
