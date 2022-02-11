import React from 'react'
import {GestureResponderEvent,ImageSourcePropType} from 'react-native'

export interface HeaderProps {
  title?: string; //?: it means it is optional property
  onLeftPress?: ((event: GestureResponderEvent) => void) | undefined;
}

export interface HomeProps {
  navigation: {
    navigate:Function
  }
}
export interface DebitProps {
  navigation: {
    navigate:Function
  }
}

export interface DetailPropsType {
  navigation: {
    goBack: Function,
  };
}
export interface CardCellPropsType {
  title?: string,
  image?: ImageSourcePropType,
  description: string,
  showSwitch: boolean,
  amount: string,
  navigation: {
    navigate: Function
  }
}
export interface CheckedPropType {
  selectedValue?: Function,
  isChecked: boolean,
  label?: string,
  image?: ImageSourcePropType,
}
export interface CardPropsType {
  name: string,
  card_number: string,
  valid_through: string,
  cvv: string,
  image: ImageSourcePropType,
  style: object
  // navigation: {
  //   goBack: Function,
  // };
}