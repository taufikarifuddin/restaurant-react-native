import React,{Component} from 'react';

import {View,StyleSheet,Text,
    ScrollView,TouchableOpacity,
    ToastAndroid} from 'react-native';

export default class RTable extends Component{

    constructor(props){
        super(props);                        
       this._onClick = this._onClick.bind(this);
    }

    componentWillMount(){

        const{title,names,labels,datas,onItemSelected} = this.props;

        this.setState({
            title : title,
            names : names ? names : [],
            labels : labels ? labels : [],
            datas : datas ? datas : [],
            onItemSelected : onItemSelected
        });
    }

    _onClick(index){
        console.log(index);
        if( this.state.onItemSelected ){
            this.state.onItemSelected(index);
        }
    }

    renderColumn(data,index,isLabel = false){

        getString = (data,isLabel,val,index) => {
            if(isLabel){
                console.log(index);
                return this.state.labels[index];
            }

            if( typeof val == 'string' ){
                return data[val];
            }

            let text = "";
            if( typeof val == 'object' ){
                if( !isUndefined(val.prefix) ){
                    text += val.prefix;
                }
                text += data[val.name];
                if( !isUndefined(val.postfix) ){
                    text += val.postfix;
                }                
            }

            return text;

        }

        isUndefined = (val) =>{
            return typeof val == 'undefined' && val.toString().trim() != "";
        }

        return(            
            <View key={'table'+index}>
                    <TouchableOpacity 
                        activeOpacity={isLabel ? 1:0.7} 
                        onPress={ isLabel ? () => {} : () => this._onClick(index)  }
                     style={[styles.rowTable]}>
                    {
                        this.state.names.map((val,i) => {
                            return (
                                <View style={[styles.rowColumn]} key={'column'+i}>
                                    <Text style={styles.textTable} key={'text'+i}>
                                        {getString(data,isLabel,val,i)}
                                    </Text>    
                                </View>                               
                            );
                        }) 
                    }
                    </TouchableOpacity>
            </View>
        );
    }

    render(){
        return(
            <View>
                <Text style={[styles.textheader,styles.textHeaderMain]}>
                    { this.state.title ? this.state.title : ''  }
                </Text>
                {
                    this.state.labels ? this.renderColumn(null,0,this,true) : ''
                }                
                <View styles={[styles.table]}>
                    <ScrollView>
                    {
                        this.state.datas.map((val,index) => {
                            return this.renderColumn(val,index);
                        })
                    }
                    </ScrollView>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
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
        alignSelf:'stretch',
        flexDirection:'row',
        borderBottomColor:'black',
    },
    rowColumn : {
        alignItems:'center',
        alignSelf:'stretch',
        flex:1,    
        padding:15,
        borderStyle:'solid',
        borderColor:'black'
    },
    textTable : {
        fontWeight:'bold',
        fontSize:12,
    },
    headerTable : {
        height:10
    }
});