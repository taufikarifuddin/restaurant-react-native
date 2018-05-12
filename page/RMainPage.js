import React,{Component} from 'react';
import {View,UIManager,
    Text,StyleSheet,
    TouchableOpacity,ScrollView} from 'react-native';

import RExpandableView from '../components/ui/RExpandableView';

export default class RMainPage extends Component{

    constructor(props){
        super(props)
        this.state = {
            name : 'Taufik Arifuddin',
            saldo : 100000,
            categories : []
        };
    }

    componentDidMount = () => {        
        this.setState({
            categories : [
                {
                    id : 1,
                    categoryName : 'Category 1',
                    items : [
                        {
                            id : 1,
                            name : 'Makanan 1',
                            price : '10'
                        },
                        {
                            id : 2,
                            name : 'Makanan 2',
                            price : '10'
                        },                        
                    ]
                },
                {
                    id : 2,
                    categoryName : 'Category 2',
                    items : [
                        {
                            id : 3,
                            name : 'Makanan 3',
                            price : '10'
                        },
                        {
                            id : 4,
                            name : 'Makanan 4',
                            price : '10'
                        },                        
                    ]
                }
            ]
        });
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
                        {
                            this.state.categories.map(function(data,index){
                                return <RExpandableView key={data.id.toString()} topborder={ index == 0 ? true : false } 
                                    categoryName={data.categoryName} items={data.items} />      
                            })
                        }
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