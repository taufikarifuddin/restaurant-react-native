import React,{Component} from 'react';
import {View,StyleSheet,
    Animation,UIManager} from 'react-native';

import RDetailOrder from "./RDetailOrder";
import {BACKGROUND_COLOR} from './../components/stylesheet/constant';
import FloatingButton from './../components/ui/FloatingButton';

export default class RCheckout extends Component{
    
    constructor(props){
        super(props);
        this._onClick = this._onClick.bind(this);

        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    _onClick = () => {
        
    }

    render(){
        return(
            <View style={styles.container}>
                <RDetailOrder />
                <FloatingButton onClick={this._onClick} />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container : {
        backgroundColor : BACKGROUND_COLOR,
        flex : 1
    }
});