import React,{Component} from 'react';

import {View,StyleSheet,Text} from 'react-native';

export default class RTable extends Component{

    constructor(props){
        super(props);                        
    }

    componentWillMount(){

        const{title,names,labels,datas} = this.props;

        this.setState({
            title : title,
            names : names ? names : [],
            labels : labels ? labels : [],
            datas : datas ? datas : []
        });
    }

    renderColumn(data,isLabel,index){

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
            <View style={styles.rowTable} key={'table'+index}>
                    {
                        this.state.names.map((val,i) => {
                            return (
                                <View style={styles.rowColumn} key={'column'+i}>
                                    <Text style={styles.textTable} key={'text'+i}>
                                        {getString(data,isLabel,val,i)}
                                    </Text>    
                                </View>                               
                            );
                        })
                    }
            </View>
        );
    }

    render(){
        return(
            <View>
                <Text style={[styles.textheader,styles.textHeaderMain]}>
                    Detail Order
                </Text>
                <View styles={styles.table}>
                    {
                        this.renderColumn(null,true,0)
                    }
                    {
                        this.state.datas.map((val,index) => {
                            return this.renderColumn(val,false,index);
                        },this)
                    }
                    {/* <View style={styles.rowTable}>
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
                    </View> */}
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
});