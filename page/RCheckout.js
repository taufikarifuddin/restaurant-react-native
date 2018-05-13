import React,{Component} from 'react';
import {View,StyleSheet,
    Animation,UIManager} from 'react-native';

import RDetailOrder from "./RDetailOrder";
import {BACKGROUND_COLOR} from './../components/stylesheet/constant';
import FloatingButton from './../components/ui/FloatingButton';

export default class RCheckout extends Component{
    
    constructor(props){
        super(props);
        const{navigation} = this.props;

        this._onClick = this._onClick.bind(this);

        this.state = {
            orders : navigation.getParam('orders',[])
        }

        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    
    _onClick = () => {

    }

    render(){
        return(
            <View style={styles.container}>
                <RDetailOrder orders={this.state.orders} />
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