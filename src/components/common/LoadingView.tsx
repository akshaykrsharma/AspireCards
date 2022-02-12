import React from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import {LoaderPropsType} from '../../interfaces/interface';
import LottieView from 'lottie-react-native';
import Colors from '../../res/Colors';
const lottiePath = '../../assests/loader.json';

function LoadingView(props: LoaderPropsType) {
  if (props.isLoading) {
    return (
      <Modal transparent={true} visible={props.isLoading}>
        <View style={styles.containerStyle}>
          <LottieView
            style={styles.loaderStyle}
            source={require(lottiePath)}
            autoPlay
            loop
          />
        </View>
      </Modal>
    );
  } else return <></>;
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: Colors.secondary_text,
    justifyContent: 'center',
  },
  loaderStyle: {
    width: 150,
    height: 100,
    alignSelf: 'center'
  }
});

export default LoadingView;
