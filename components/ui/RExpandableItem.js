import React,{Component} from 'react';
import {View,Text,TextInput,Button,
    StyleSheet,UIManager,TouchableOpacity} from 'react-native';
import ItemOrder from './../../dto/ItemOrder';

export default class RExpandableItem extends Component{

    constructor(props){
        super(props);
        this.state = {
            qty : 0,
            price : 0,
            orderItem : new ItemOrder(),
            itemPrice : this.props.detail.price
        }        

        this._onIncr = this._onIncr.bind(this);
        this._onDcrm = this._onDcrm.bind(this);      
    }

    _onDcrm = () => {
        this.setState({
            price : this.state.qty <= 0 ? 0 : 
                (this.state.qty - 1) * this.state.itemPrice,            
            qty : this.state.qty <= 0 ?  0 : this.state.qty - 1
        },function(){
            this.onUpdate(); 
        });
    }

    _onIncr = () => {
        this.setState({
            price : (this.state.qty + 1) * this.state.itemPrice,
            qty : this.state.qty + 1
        },function(){
            this.onUpdate();
        });
    }

    onUpdate = () => {
        this.props.onUpdateItem({
            qty : this.state.qty,
            price : this.state.price,
            detail : this.props.detail
        },this.props.index);
    }

    _onDetail = () => {

    }

    render(){
        return(
            <View padding={15} flexDirection="row" justifyContent="space-between">
                    <Text style={styles.elem}> 
                        { this.props.detail.name }
                    </Text>                                                                                                                          
                    <Text style={styles.elem}>
                        Rp. { this.state.price }
                    </Text>                                   
                    <View  flexDirection="row" style={styles.elem}> 
                        <TouchableOpacity activeOpacity={0.9} onPress={this._onDcrm} style={styles.qtyBtn}>
                            <Text style={styles.btnTxt}>
                                {"<"}
                            </Text>
                        </TouchableOpacity >
                        <TextInput editable={false} value={this.state.qty.toString()} style={{
                            textAlign:'center'
                        }} defaultValue="0" /> 
                        <TouchableOpacity activeOpacity={0.9} onPress={this._onIncr} style={styles.qtyBtn} >
                            <Text style={styles.btnTxt}>
                                {">"}
                            </Text>
                        </TouchableOpacity>                    
                    </View>                                 
            </View>
        );
    }

}

const styles = StyleSheet.create({
    elem : {
        alignSelf : 'stretch'
    },
    qtyBtn : {
    },
    btnTxt : {
        padding:10,
        backgroundColor:'blue',        
        fontWeight : 'bold',
        color:'white',
        backgroundColor:'#5BC0DE'
    },
    btn : {
        height:1
    }
});