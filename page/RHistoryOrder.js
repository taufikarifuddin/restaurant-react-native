import React,{Component} from 'react';

import {View,StyleSheet,Text,ScrollView} from 'react-native';

import {BACKGROUND_COLOR} from './../components/stylesheet/constant';

import RTable from './../components/ui/RTable';

export default class RHistoryOrder extends Component{

    constructor(props){
        super(props);
    }

    componentWillMount(){
        let data = [];
        for (let index = 0; index <15; index++) {
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

    render(){
        return(
            <View style={styles.container}>
                <ScrollView>
                    <RTable 
                        title='History Order'
                        names={this.state.names}
                        labels = {this.state.labels}
                        datas = {this.state.datas}
                        />
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
});
