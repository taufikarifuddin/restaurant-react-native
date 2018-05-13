import React,{Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';

export default class RButton extends Component{

    constructor(props){
        super(props);
        this._onPress = this._onPress.bind(this);
    }

    _onPress(){
        this.props.onClick();
    }

    render(){
        return( 
            <View style={styles.loginBtn} onTouchStart={this._onPress}>
                <Text style={styles.loginBtnText}>{this.props.text}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    loginBtn : {
        padding:5,
        backgroundColor:'#FF9106',
        padding:15,
        borderRadius:25,
        marginTop:10,
        alignItems:'center'
    },
    loginBtnText : {
        color:'white',
        fontWeight:'bold',
        alignContent:'center',        
        fontSize:15
    }
});