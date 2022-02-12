import React from 'react';
import {Modal, ActivityIndicator, View} from 'react-native';
import {LoaderPropsType} from '../../interfaces/interface';
import Colors from '../../res/Colors';
function LoadingView(props: LoaderPropsType) {
	if (props.isLoading) {
		return (
			<Modal transparent={true} visible={props.isLoading}>
				<View
					style={{
						flex: 1,
						backgroundColor: 'rgba(0,0,0,0.5)',
						justifyContent: 'center',
					}}>
					<ActivityIndicator size="large" color={Colors.app_theme} />
				</View>
			</Modal>
		);
	}
	else return <></>;
}

export default LoadingView;
