import React from 'react';
import { Text, View} from 'react-native';

const Header = () => {
    return (
    	<View>
    		<Text style={textStyle}>Albums!</Text>
    	</View>
    );
};

const styles = {
	textStyle : {
		fontSize: 20
	}
}
export default Header;