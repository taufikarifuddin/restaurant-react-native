import React,{Component} from 'react';
import {View,UIManager,
    Text,StyleSheet,
    TouchableOpacity,
    ToastAndroid,ScrollView} from 'react-native';

import RExpandableView from '../components/ui/RExpandableView';

import FloatingButton from '../components/ui/FloatingButton';

export default class RMainPage extends Component{

    constructor(props){
        super(props)
        this.state = {
            name : 'Taufik Arifuddin',
            saldo : 100000,
            categories : [],
            orders : []
        };
        this._onClick = this._onClick.bind(this);

    }

    onUpdate = (data,index) =>{
        let orders = this.state.orders;
        orders[index] = data;
        this.setState({
            orders : orders
        });
    }

    componentWillMount = () => {        
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

    concatingAllOrderFromCategory = () => {
        let orders = [];
        
        this.state.orders.forEach((elem,index) => {
            if( orders.length == 0 ){
                orders = elem;
            }else{
                orders = orders.concat(elem);
            }            
        })

        return orders;
    }

    _onClick = () => {
        let orders = this.concatingAllOrderFromCategory();

        this.props.navigation.navigate('Checkout',{ orders : orders }); 
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
                                return <RExpandableView key={data.id.toString()} onUpdate={this.onUpdate} index={index} topborder={ index == 0 ? true : false } 
                                    categoryName={data.categoryName} items={data.items} />      
                            },this)
                        }
                    </View>
                </ScrollView>
                <FloatingButton onClick={this._onClick} />
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