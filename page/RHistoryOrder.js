import React,{Component} from 'react';

import {View,StyleSheet,Text,ScrollView,ToastAndroid} from 'react-native';

import {BACKGROUND_COLOR} from './../components/stylesheet/constant';

import RTable from './../components/ui/RTable';

export default class RHistoryOrder extends Component{

    constructor(props){
        super(props);
    }

    componentWillMount(){
        let data = [];
        for (let index = 0; index <5; index++) {
            data.push( {
                date : '12-12-2012',
                price : 'testing',
                status : 'done'
            });            
        }

        this.setState({
            title : 'History Order',
            names : ['date',{ name : 'price',prefix : 'Rp.',postfix : ',-' },'status'],
            labels : ['Date','Price Total','Status'],
            datas : data
        });
    }

    _onItemSelected(index){
        ToastAndroid.show("clicked : "+index,ToastAndroid.SHORT);
    }

    render(){
        return(
            <View style={styles.container}>
                <View styles={[styles.header,{ flex : 1 }]}>
                    <Text style={[{
                        textAlign:'center',
                        color:'white',
                        fontWeight:'bold',
                        fontSize:30
                    }]}>Your HISTORY ORDER</Text>
                               
                </View>
                <View styles={[{flex : 1}]}>
                        <RTable 
                            onItemSelected = {this._onItemSelected}
                            names={this.state.names}
                            labels = {this.state.labels}
                            datas = {this.state.datas}
                            />
                </View>                
            </View>
        );
    };

} 


const styles = StyleSheet.create({
    container : {
        backgroundColor : BACKGROUND_COLOR,
        flex:1,        
    },
    header : {
        padding:20,        
    }
});
