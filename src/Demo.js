import React from 'react';
import {Dimensions, Platform} from 'react-native';

export function getIndianAmountFormat(number: string): string {
  return !!number ? number.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') : number;
}

export function removeIndianAmountFormat(number: string): string {
  return !!number ? number.replace(',', '').replace(' ', '') : '';
}

export function getStatusBarHeight(): number {
  return isIphoneX() ? 44 : Platform.OS == 'android' ? 0 : 20;
}

export function isIphoneX(): boolean {
  let {height, width} = Dimensions.get('window');
  return (
    Platform.OS === 'ios' && !Platform.isPad && (height >= 812 || width >= 812)
  );
}

export function getCCFormatNumber(value: string): string {
  var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
  var matches = v.match(/\d{4,16}/g);
  var match = (matches && matches[0]) || '';
  var parts = [];

  for (let i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }

  if (parts.length) {
    return parts.join('   ');
  } else {
    return value;
  }
}
