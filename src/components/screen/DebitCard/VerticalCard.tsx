import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Animated} from 'react-native';
import Colors from '../../../res/Colors';
import Strings from '../../../res/Strings';
import {boldFont, regularFont} from '../../../res/Fonts';

export default function VerticalCard() {
  this.anim = new Animated.Value(0);

  const [progressStatus, setProgressStatus] = useState(0);
  const [totalAmount] = useState(5000);
  const [currentAmount] = useState(2500);
  useEffect(() => {
    onAnimate();
  }, []);
  onAnimate = () => {
    let perProgressStatus = (currentAmount / totalAmount) * 100;
    this.anim.addListener(({value}) => {
      setProgressStatus(parseInt(value, 10));
    });
    Animated.timing(this.anim, {
      toValue: perProgressStatus,
      duration: 2000,
    }).start();
  };

  return (
    <View style={styles.container}>
      <View style={styles.amountContainer}>
        <Text style={styles.lableStyle}>{Strings.cardSpendingLimit}</Text>
        <Text style={styles.amountStyle}>
          S${currentAmount}
          <Text style={styles.amountMaxStyle}>
            {} | {totalAmount}
          </Text>
        </Text>
      </View>
      <View style={styles.barContainer}>
        <Animated.View style={[styles.inner, {width: progressStatus + '%'}]} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  amountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  barContainer: {
    width: '100%',
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: Colors.green_semi_transparent,
    marginTop: 5,
  },
  inner: {
    width: '100%',
    height: 20,
    borderRadius: 10,
    backgroundColor: Colors.app_theme,
  },
  lableStyle: {
    color: Colors.black,
    ...regularFont(13),
  },
  amountStyle: {
    color: Colors.app_theme,
    ...boldFont(12),
  },
  amountMaxStyle: {
    color: Colors.secondary_text,
    ...regularFont(12),
  },
});
