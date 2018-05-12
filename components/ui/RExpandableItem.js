import React,{Component} from 'react';
import {View,Text,TextInput,Button,StyleSheet,UIManager} from 'react-native';

export default class RExpandableItem extends Component{


    constructor(props){
        super(props);
        this.state = {
            qty : 0,
            price : 0
        }        
    }

    _onDcrm = () => {
        this.setState({
            qty : this.state.qty <= 0 ?  0 : this.state.qty - 1,
            price : this.state.qty <= 0 ? 0 : 
                (this.state.qty - 1) * this.props.detail.price            
        });
    }

    _onIncr = () => {
        this.setState({
            qty : this.state.qty + 1,
            price : (this.state.qty + 1) * this.props.detail.price
        });
    }

    _onDetail = () => {

    }

    render(){
        return(
            <View padding={15} flexDirection="row" justifyContent="space-between">
                    <Text> 
                        { this.props.detail.name }
                    </Text>                                      
                    <Button onPress={this._onDetail} title="Detail" />                                                                 
                    <Text>
                        Rp. { this.state.price }
                    </Text>                                   
                    <View  flexDirection="row"> 
                        <Button onPress={this._onDcrm} style={styles.qtyBtn} title = "<" />
                        <TextInput editable={false} value={this.state.qty.toString()} style={{
                            paddingLeft:19
                        }} defaultValue="0" /> 
                        <Button onPress={this._onIncr} style={styles.qtyBtn}  title = ">" />                    
                    </View>                                 
            </View>
        );
    }

}

const styles = StyleSheet.create({
    qtyBtn : {
        fontWeight:'bold'
    } 
});