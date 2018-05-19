import React,{Component} from 'react';
import {View,Text,Modal,ToastAndroid,TouchableHighlight,StyleSheet,Button} from 'react-native';
import RTextInput from '../components/form/RTextInput';
import RButton from '../components/form/RButton';
import { MAIN_PAGE } from './../components/stylesheet/constant';

export default class LoginForm extends Component{

    constructor(props){
        super(props);
        this.state = { 
            isVisible : false,
            loginForm : {
                username : null,
                password : null
            }
        };

        this._onPress = this._onPress.bind(this);    
        this._onSignUp = this._onSignUp.bind(this);            
        this.onChange = this.onChange.bind(this);
    }

    _onPress = function(){
        let loginForm = this.state.loginForm;
        if( loginForm.username == 'admin' 
                && loginForm.password == 'admin' ){
            this.props.navigation.navigate(MAIN_PAGE);
        }else{
            ToastAndroid.show('Invalid Username / Password',ToastAndroid.SHORT);
        }
    }

    _onSignUp = function(){
        this.props.navigation.navigate('Register');
    }

    onChange(value,name){

        let loginForm = this.state.loginForm;
        
        loginForm[name] = value;

        this.setState({
            loginForm : loginForm
        });
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.loginContainer}>
                    <View style={{alignItems:'center',marginBottom:10}}>
                        <Text style={[styles.textLoginheader,styles.textLoginHeaderMain]}>
                            Member Login
                        </Text>
                        <Text style={[styles.textLoginheader,styles.textLoginHeaderSubMain]}>
                            Please Login to Continue...
                        </Text>
                    </View>
                    <View>
                        <RTextInput 
                            label="Username" name="username" onChange={this.onChange}  />
                        <RTextInput
                            label="Password"  name="password" password={true} onChange={this.onChange}/>
                        <RButton onClick={this._onPress} text="Sign In" />
                        <RButton onClick={this._onSignUp} text="Register" />                        
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
      borderRadius:10,
      justifyContent: 'center',
      paddingLeft:10,
      paddingRight:10,
      paddingBottom:30,
      paddingTop:30
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
  