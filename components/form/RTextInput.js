import React from 'react';
import { Text,View,TextInput,StyleSheet } from 'react-native';
 
export default class RTextInput extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <View style={style.container}>
                <Text style={style.label}>
                    {this.props.label}
                </Text>
                    <TextInput style={style.textInput} 
                        secureTextEntry={this.props.password} 
                        underlineColorAndroid='transparent'
                        />                
            </View>
        );
    }
}

const style = StyleSheet.create({

    container : {
        marginBottom:10,
        marginTop:10
    },
    label :{
        fontWeight:'bold',
        fontSize:15,
        paddingLeft:5,
        paddingRight:5,
        marginBottom:5
    },
    textInput:{
        color:'#666666',      
        borderRadius:25,
        borderColor:'#e6e6e6',
        backgroundColor:'#e6e6e6', 
        paddingLeft:5,
        paddingRight:5,
        paddingBottom:5,
        paddingTop:5,
        borderWidth:0.5,
        textAlign:'center',
    },
    fieldContainer :{
      
    }
});