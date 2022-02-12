import React from 'react'
import {GestureResponderEvent,ImageSourcePropType} from 'react-native'

export interface HeaderProps {
  title?: string; //?: it means it is optional property
  onLeftPress?: ((event: GestureResponderEvent) => void) | undefined;
}
export interface ButtonProps {
  title?: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

export interface HomeProps {
  navigation: {
    navigate:Function
  }
}
export interface DebitProps {
  navigation: {
    navigate:Function
  },
  userDataCall: Function,
  updateUserData:Function,
  isFetching: boolean,
  userData: {
      name: string,
      card_number: string,
      valid_through: string,
      cvv: string,
      weekly_spend: string,
      weekly_max: string,
      balance: string,
  },
  
}

export interface DetailPropsType {
  getUser: Function,
  updateUserData: Function,
  isFetching: boolean,
  userData: {
      name: string,
      card_number: string,
      valid_through: string,
      cvv: string,
      weekly_spend: string,
      weekly_max: string,
      balance: string,
  },
  navigation: {
    goBack: Function,
  };
}
export interface CardCellPropsType {
  title?: string,
  image?: ImageSourcePropType,
  description: string,
  showSwitch?: boolean,
  amount?: string,
  navigate?: string,
  disableService: Function,
  navigation: {
    navigate: Function
  }
}
export interface CheckedPropType {
  selectedValue?: Function,
  isChecked: boolean,
  labelChecked?: string,
  labelUnChecked?: string,
  imageChecked?: ImageSourcePropType,
  imageUnChecked?: ImageSourcePropType,
  style?:object
}
export interface CardPropsType {
  name: string,
  card_number: string,
  valid_through: string,
  cvv: string,
  weekly_spend: string,
  weekly_max: string,
  image: ImageSourcePropType,
  style: object,
  // navigation: {
  //   goBack: Function,
  // };
}

export interface LoaderPropsType {
  isLoading: boolean,
}
export interface HorizontalCardProps {
  weekly_max: number,
  weekly_spend: number,
}
