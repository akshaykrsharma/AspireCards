import React, {useState, useEffect} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {CheckedPropType} from '../../interfaces/interface';
import Images from '../../res/Images';

function Check(props: CheckedPropType) {
  const [checked, setChecked] = useState(props.isChecked);
  // useEffect(() => {
  // props.selectedValue &&  props.selectedValue(checked);
  // }, [checked]);

  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <TouchableOpacity
        onPress={() => {
          props.selectedValue && props.selectedValue(!checked);
          setChecked(!checked);
        }}>
        <Image
          style={Images.checked.style}
          source={checked ? Images.checked.source : Images.unChecked.source}
        />
      </TouchableOpacity>
      {props.label && <Text style={{marginLeft: 5}}>{props.label}</Text>}
    </View>
  );
}

export default Check;
