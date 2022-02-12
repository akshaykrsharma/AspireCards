import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Animated} from 'react-native';
import Colors from '../../../res/Colors';
import Strings from '../../../res/Strings';
import {boldFont, regularFont} from '../../../res/Fonts';

export default function VerticalCard({weekly_max ,weekly_spend}) {
  const anim = new Animated.Value(0);
  console.log('value==', weekly_max + "-->" + weekly_spend+ (typeof weekly_max));
  const [progressStatus, setProgressStatus] = useState(0);
  const [totalAmount] = useState(weekly_max);
  const [currentAmount] = useState(weekly_spend);
  useEffect(() => {
    onAnimate();
  }, [weekly_max!=0]);
  const onAnimate = () => {
    let perProgressStatus = (currentAmount / totalAmount) * 100;
    anim.addListener(({value}:any) => {
      setProgressStatus(parseInt(value, 10));
    });
    Animated.timing(anim, {
      toValue: perProgressStatus,
      duration: 2000,
      useNativeDriver: false
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
