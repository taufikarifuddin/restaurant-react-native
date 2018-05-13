import React,{Component} from 'react';
import {View,Text,Modal,ToastAndroid,TouchableHighlight,StyleSheet,Button} from 'react-native';
import {NavigationAction} from 'react-navigation';

import RTextInput from '../components/form/RTextInput';
import RButton from '../components/form/RButton';

export default class RRegisterForm extends Component{
    constructor(props){
        super(props);
        this.state = { 
            registerForm : {
                username : null,
                email : null,
                password : null,
                rePassword : null
            }
        };
        this._onPress = this._onPress.bind(this);   
        this._backToLogin = this._backToLogin.bind(this); 
        this.onChange = this.onChange.bind(this);
    }

    _onPress = function(){
        console.log(this.state.registerForm);
        this._backToLogin();
    }

    _backToLogin = function(){
        this.props.navigation.goBack();
    }

    onChange = (value,name) =>{
        let registerForm = this.state.registerForm;
        registerForm[name] = value;
        this.setState({
            registerForm : registerForm
        });
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.loginContainer}>
                    <View onTouchStart={this._backToLogin} style={{ position:'absolute',top:20,left:20 }}>
                        <Text style={{ fontWeight:'bold' }}>Back</Text>
                    </View>
                    <View style={{alignItems:'center',marginBottom:50}}>
                        <Text style={[styles.textRegisterheader,styles.textRegisterheaderMain]}>
                            Registration Page
                        </Text>
                        <Text style={[styles.textRegisterheader,styles.textRegisterheaderSubMain]}>
                            Introduce yourself with fill your identity
                        </Text>
                    </View>
                    <View>
                        <RTextInput 
                            onChange = {this.onChange}
                            name="username"
                            label="Username"  />
                        <RTextInput 
                            onChange = {this.onChange}                        
                            name="email"
                            label="Email"  />                            
                        <RTextInput 
                            onChange = {this.onChange}                        
                            name="password"
                            label="Password" 
                            password={true}/>
                        <RTextInput 
                            onChange = {this.onChange}                        
                            name="rePassword"
                            label="Retype Password"
                            password={true}  />                            
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
    textRegisterheader : {
        fontWeight:'bold'
    },
    textRegisterheaderMain : {
        fontSize : 30,
        alignItems:'center'
    },
    textRegisterheaderSubMain:{
        fontSize : 15
    }
  });
  