import React from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { HeaderProps } from '../../interfaces/interface';
import Colors from '../../res/Colors';
import {boldFont} from '../../res/Fonts';
import Images from '../../res/Images';

function renderLeft(props: HeaderProps) {
  return (
    <View style={styles.leftContainer}>
      {!!props.onLeftPress && (
        <TouchableOpacity onPress={props.onLeftPress}>
          <Image source={Images.back.source} />
        </TouchableOpacity>
      )}
      {!!props.title && <Text style={styles.titleStyle}>{props.title}</Text>}
    </View>
  );
}
function renderRight() {
  return <Image source={Images.tab1.source} style={styles.logo}></Image>;
}

function Header(props: HeaderProps) {
  const {mainContainerStyle, containerStyle} = styles;
  return (
    <SafeAreaView style={mainContainerStyle}>
      <View style={containerStyle}>
        {renderLeft(props)}
        {renderRight()}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainerStyle: {
    width: '100%',
  },
  containerStyle: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyle: {
    fontSize: 30,
  },
  logo: {
    tintColor: Colors.app_theme,
    marginTop:5
  },
  leftContainer: {},
  titleStyle: {
    ...boldFont(24),
    color: Colors.white,
    marginVertical: 20,
  },
});

export default Header;
