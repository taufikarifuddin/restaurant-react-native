import React,{Component} from 'react';
import {View,UIManager,
    Text,StyleSheet,
    TouchableOpacity,ScrollView} from 'react-native';

import ExpandableView from '../components/ui/ExpandableView';

export default class RMainPage extends Component{

    constructor(props){
        super(props)
        this.state = {
            name : 'Taufik Arifuddin',
            saldo : 100000
        };
    }

    render(){
        return(        
            <View style={styles.container} flex={1}>
                <ScrollView>
                    <View style={styles.header} flex={1}>
                        <Text style = {styles.text}>
                            {this.state.name}
                        </Text>
                        <Text style = {styles.text}>
                            Rp. {this.state.saldo},-
                        </Text>
                    </View>            
                    <View style={styles.content} flex={5}>
                        <Text style={styles.contentTitle}> Choose menu do you want </Text>
                        <ExpandableView topborder />
                        <ExpandableView />
                        <ExpandableView />                        
                        <ExpandableView />                                                
                    </View>
                </ScrollView>
            </View>            
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EBCB64',
    },
    header : {
        marginTop:50,
        alignItems: 'center',        
    },    
    text : {
        color:'white',
        fontWeight : 'bold',
        fontSize : 20,
    },
    content: {
        padding:10,
        marginTop:50,
        alignItems:'center'
    },
    contentTitle : {
        fontSize : 25,
        color:'white',
        marginBottom:10
    },
});