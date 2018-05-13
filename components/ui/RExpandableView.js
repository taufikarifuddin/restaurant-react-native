import React,{Component} from 'react';
import {View,Text,TouchableOpacity,
    StyleSheet,UIManager,LayoutAnimation} from 'react-native';

import RExpandableItem from './RExpandableItem';

export default class ExpandableView extends Component{

    constructor(props){
        super(props);
        this.state = {
            expand : true,
            height : 0,
            layoutHeight : 0,
            bought : []
        }

        this.setLayoutHeight = this.setLayoutHeight.bind(this);
        this.toggleExpand = this.toggleExpand.bind(this);
        this._onUpdate = this._onUpdate.bind(this);
        
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    componentDidMount(){        
        this.setState({
            height : 'auto'
        });
    }
    
    _onUpdate = (data) => {
        let indexOfItem = this.props.items.indexOf(data.detail);
        if( indexOfItem > -1){
            let bought = this.state.bought;
            if( typeof bought[indexOfItem] == 'undefined' && data.qty > 0){
                bought[indexOfItem] = data.detail;
            }

            if( data.qty > 0 ){
                bought[indexOfItem]['price'] = data.price;
                bought[indexOfItem]['qty'] = data.qty;
            }else{
                delete bought[indexOfItem];
            }
            
            this.setState({
                bought : bought                              
            },function(){
                this.props.onUpdate(this.state.bought,this.props.index);
            })
        }
    }

    toggleExpand = () => {
        LayoutAnimation.configureNext( LayoutAnimation.Presets.easeInEaseOut );

        this.setState({
            height : this.state.expand ? 0 : this.state.layoutHeight,                        
            expand : !this.state.expand
        });
    }


    setLayoutHeight = (layoutHeight) => {
        if( this.state.layoutHeight < layoutHeight ){
            this.setState({ layoutHeight : layoutHeight });    
        }
    }

    render(){
        return(
            <View style={{width:'100%',padding:2,backgroundColor:'#B5B076',
                borderTopLeftRadius : this.props.topborder ? 10 : 0,
                borderTopRightRadius : this.props.topborder ? 10 : 0,       
                borderBottomLeftRadius : this.props.bottomborder ? 10 : 0,
                borderBottomRightRadius : this.props.bottomborder ? 10 : 0                        
            }}>
                <TouchableOpacity 
                    activeOpacity={0.8} 
                    onPress = {this.toggleExpand}
                    style={[styles.touchableOpacity,
                    {                        
                        borderTopLeftRadius : this.props.topborder ? 10 : 0,
                        borderTopRightRadius : this.props.topborder ? 10 : 0,       
                        borderBottomLeftRadius : this.props.bottomborder ? 10 : 0,
                        borderBottomRightRadius : this.props.bottomborder ? 10 : 0                        
                    }]}>

                    <Text style={styles.touchableOpacityText}>{ this.props.categoryName }</Text>                            

                </TouchableOpacity>
                <View style={{backgroundColor:'white',
                        width:'100%',
                        overflow:'hidden',
                        height:this.state.height}}>                    
                        <View style={{ padding : 10 }} onLayout = { (val) => this.setLayoutHeight(val.nativeEvent.layout.height) }>
                            {
                                this.props.items.map(function(data,index){
                                    return <RExpandableItem onUpdateItem={this._onUpdate} key={index} index={index} detail={data} />;
                                },this)
                            }
                        </View>
                </View>
            </View>
        );
    };

} 

const styles = StyleSheet.create({
    touchableOpacity: {
        width:'100%',
        padding:15,
        backgroundColor:'#B5B076', 
    },
    touchableOpacityText : {
        color:'white',
        fontWeight:'bold'
    }
});