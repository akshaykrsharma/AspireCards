import React from 'react';
import {View,StyleSheet,Button} from 'react-native'
import { DebitProps } from '../../../interfaces/interface';
import Strings from '../../../res/Strings';
import Header from '../../common/Header';

function DebitCard(props:DebitProps) {
 return (
    <View style={styles.containerStyle}>
      <Header title={Strings.TabTitles.debitCard}></Header>
      <Button
        title={'GOTO Spending'}
        onPress={() => props.navigation.navigate('SpendingLimit')}></Button>
    </View>
  );
}


const styles = StyleSheet.create({
	containerStyle: {
		width: '100%',
		flex: 1,
		alignItems:'center'
	}
});

export default DebitCard;