import React,{Component} from 'react';
import {View,Text,Modal,ToastAndroid,TouchableHighlight,StyleSheet,Button} from 'react-native';
import RTextInput from '../components/form/RTextInput';
import RButton from '../components/form/RButton';

export default class RRegisterForm extends Component{
    constructor(props){
        super(props);
        this.state = { isVisible : false };
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
                            Registration Page
                        </Text>
                        <Text style={[styles.textLoginheader,styles.textLoginHeaderSubMain]}>
                            Introduce yourself with fill your identity
                        </Text>
                    </View>
                    <View>
                        <RTextInput 
                            label="Username"  />
                        <RTextInput 
                            label="Email"  />                            
                        <RTextInput 
                            label="Password" 
                            password={true}/>
                        <RTextInput 
                            label="Retype Password"  />                            
                        <RButton onClick={this._onPress} text="Register" />
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
      height:'80%',
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
  