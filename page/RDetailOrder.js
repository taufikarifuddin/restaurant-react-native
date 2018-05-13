import React,{ Component } from 'react';
import { 
    View,Text,
    StyleSheet,ScrollView
} from 'react-native';

import {BACKGROUND_COLOR} from './../components/stylesheet/constant';

export default class RDetailOrder extends Component{

    constructor(props){
        super(props);
        this.state = {
            orders : this.props.orders ? 
                this.props.orders : [],
            price : 0
        }
    }

    componentWillMount(){
        let price = 0;
        this.state.orders.forEach((elem,index) => {
            if( !isNaN(elem.price) ) 
                price += elem.price;
            console.log(elem.price);
        });

        this.setState({
            price : price
        });
    }

    componentDidMount(){
        let price = 0;
        this.state.orders.forEach((elem,index) => {
            price += elem.price;
            console.log(price);
        });

        this.setState({
            price : price
        });
    }

    renderColumn(index,name,qty,price){
        return(
            <View style={styles.rowTable} key={index}>
                <View style={styles.rowColumn}>
                    <Text style={[styles.textTable]}>
                        {index}
                    </Text>
                </View>
                <View style={styles.rowColumn}>
                    <Text style={[styles.textTable]}>
                        {name}
                    </Text>
                </View>
                <View style={styles.rowColumn}>
                    <Text style={[styles.textTable]}>
                        {qty}
                    </Text>                    
                </View>
                <View style={styles.rowColumn}>
                    <Text style={[styles.textTable]}>
                        Rp. {price}
                    </Text>                    
                </View>                
            </View>
        );
    }

    componentDidMount(){
        let data = [];
        for (let index = 0; index < 15; index++) {
            data.push({
                name : 'Test',
                qty : 1,
                price : 123
            });            
        }
        this.setState({
            listOrder : data
        });
    }

    render(){
        return(
            <View style={styles.container}>
                <ScrollView>
                    <Text style={[styles.textheader,styles.textHeaderMain]}>
                        Detail Order
                    </Text>
                    <View styles={styles.table}>
                        {
                            this.renderColumn('No','Nama','Jumlah','Harga')
                        }
                        {
                            this.state.orders.map((val,index) => {
                                return this.renderColumn(index+1,val.name,val.qty,val.price);
                            })
                        }
                         <View style={styles.rowTable}>
                            <View style={styles.footerColumn}>
                                <Text style={[styles.textTable]}>
                                    Jumlah
                                </Text> 
                            </View>
                            <View style={styles.footerTotal}>
                                <Text style={[styles.textTable]}>
                                    Rp. {this.state.price}
                                </Text>                    
                            </View> 
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    };

}

const styles = StyleSheet.create({
    container : {
        backgroundColor : BACKGROUND_COLOR,
        flex:1,        
        paddingTop:50,
    },
    textheader : {
        fontWeight:'bold',
        color:'white',
        textAlign:'center'
    },
    textHeaderMain : {
        fontSize : 30,
        alignItems:'center'
    },
    table : {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
    },
    rowTable : {
        flex:1,
        alignSelf:'stretch',
        flexDirection:'row',
    },
    rowColumn : {
        alignItems:'center',
        alignSelf:'stretch',
        flex:1,    
        padding:15
    },
    textTable : {
        fontWeight:'bold',
        fontSize:20
    },
    footerColumn :{
        alignItems:'center',
        alignSelf:'stretch',
        flex:1,    
        padding:15
    },
    footerTotal : {
        alignItems:'center',
        alignSelf:'stretch',
        flex:1,    
        padding:15        
    }

});
