import React from 'react';
import { Text, View} from 'react-native';

const Header = () => {
	const {textStyle, viewStyle} = styles;
    return (
    	<View style={viewStyle}>
    		<Text style={textStyle}>Albums!</Text>
    	</View>
    );
};

const styles = {
	textStyle : {
		fontSize: 20
	},
	viewStyle : {
		backgroundColor : '#f0f0f0',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 15,
		height: 60
	}
}
export default Header;