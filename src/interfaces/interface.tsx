import React from 'react'
import {GestureResponderEvent} from 'react-native'

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