import React, {useState} from 'react';
import {Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {CheckedPropType} from '../../interfaces/interface';
import Colors from '../../res/Colors';
import {boldFont} from '../../res/Fonts';
import Images from '../../res/Images';

function getCheckedImage(props: CheckedPropType, checked: boolean) {
  const {imageChecked, imageUnChecked} = props;
  if (imageChecked) {
    return checked ? imageChecked : imageUnChecked;
  } else {
    return checked ? Images.checked.source : Images.unChecked.source;
  }
}

function callback(props: CheckedPropType, setChecked: any, checked: boolean) {
  props.selectedValue && props.selectedValue(!checked);
  setChecked(!checked);
}

function Check(props: CheckedPropType) {
  const [checked, setChecked] = useState(props.isChecked);
  return (
    <TouchableOpacity
      style={[styles.container, props.style]}
      onPress={() => {
        callback(props, setChecked, checked);
      }}>
      <Image
        style={Images.checked.style}
        source={getCheckedImage(props, checked)}
      />
      {props.labelChecked && (
        <Text style={styles.labelStyle}>
          {checked ? props.labelChecked : props.labelUnChecked}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelStyle: {
    marginLeft: 10,
    ...boldFont(13),
    color: Colors.app_theme,
  },
});

export default Check;