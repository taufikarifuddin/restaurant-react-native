import React,{Component} from 'react';
import {View,Text,ToastAndroid,StyleSheet,Button} from 'react-native';
import RTextInput from './RTextInput';
import RButton from './RButton';

export default class LoginForm extends Component{

    constructor(props){
        super(props);
        this._onPress = this._onPress.bind(this);
    }

    _onPress = function(){
        ToastAndroid.show('Clicked',ToastAndroid.SHORT);
    }

    render(){
        return(
            <View style={styles.container}>
            <View style={styles.loginContainer}>
                <View style={{alignItems:'center',marginBottom:50}}>
                    <Text style={[styles.textLoginheader,styles.textLoginHeaderMain]}>
                        Member Login
                    </Text>
                    <Text style={[styles.textLoginheader,styles.textLoginHeaderSubMain]}>
                        Please Login to Continue...
                    </Text>
                </View>
                <View>
                    <RTextInput 
                        label="Username"  />
                    <RTextInput 
                        label="Password" 
                        password={true}/>
                    <RButton onClick={this._onPress} text="Login" />
                </View>
            </View>
          </View>    
        );
    }

} 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EBCB64',
      alignItems: 'center',
      justifyContent: 'center',
    },
    loginContainer:{
      backgroundColor:'#FFF',
      width:'80%',
      height:'60%',
      borderRadius:10,
      justifyContent: 'center',
      paddingLeft:10,
      paddingRight:10
    },
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
    },
    textLoginheader : {
        fontWeight:'bold'
    },
    textLoginHeaderMain : {
        fontSize : 30,
        alignItems:'center'
    },
    textLoginHeaderSubMain:{
        fontSize : 15
    }
  });
  