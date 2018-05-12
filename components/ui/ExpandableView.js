import React,{Component} from 'react';
import {View,Text,TouchableOpacity,
    StyleSheet,UIManager,LayoutAnimation} from 'react-native';

export default class ExpandableView extends Component{

    constructor(props){
        super(props);
        this.state = {
            expand : true,
            height : 1,
            layoutHeight : 1
        }

        this.setLayoutHeight = this.setLayoutHeight.bind(this);
        this.toggleExpand = this.toggleExpand.bind(this);
        
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    componentDidMount(){
        this.setState({
            expand : false,
            height : 0.1
        });
    }

    toggleExpand = () => {
        LayoutAnimation.configureNext( LayoutAnimation.Presets.easeInEaseOut );

        this.setState({
            height : this.state.expand ? 0 : this.state.layoutHeight,                        
            expand : !this.state.expand
        });

        console.log(this.state);
    }


    setLayoutHeight = (layoutHeight) => {
        if( this.state.layoutHeight < layoutHeight ){
            this.setState({ layoutHeight : layoutHeight });    
        }
    }

    render(){
        return(
            <View style={{width:'100%'}}>
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

                    <Text style={styles.touchableOpacityText}>Testing</Text>                            

                </TouchableOpacity>
                <View style={{backgroundColor:'white',
                        width:'100%',
                        overflow:'hidden',
                        height:this.state.height}}>                    
                        <View style={{ padding : 10 }} onLayout = { (val) => this.setLayoutHeight(val.nativeEvent.layout.height) }>
                            <Text>testing lagi gan</Text>                     
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