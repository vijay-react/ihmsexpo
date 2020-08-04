import * as React from 'react';
import {ImageBackground,View} from 'react-native';
let backgroundImage = require("../../BackgroundFiles/splashLogo.png");
export default class Background extends React.Component {
    render(){
        return(
            <View>          
                <ImageBackground source={backgroundImage} style={{ flex: 1,width: '100%', height: '100%'}}>
                </ImageBackground>
            </View>
);
    }
}
