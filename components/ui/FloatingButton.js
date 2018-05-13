import React,{Component} from 'react';
import {
    View,Text,
    StyleSheet,PanResponder,
    Animated,Dimensions,TouchableOpacity
} from 'react-native';


let window = Dimensions.get('window');
const CIRCLE_RADIUS = 50;

export default class FloatingButton extends Component{

    
    constructor(props){
        super(props);
        
        this._onPress = this._onPress.bind(this);

        this.state = {
            backgroundColor : this.props.backgroundColor ?
                this.props.backgroundColor : '#007bff',             
            fontColor : this.props.fontColor ? 
                this.props.fontColor : '#fff',
            pan : new Animated.ValueXY()
        };

        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder : () => true,
            onPanResponderMove          : Animated.event([null,{ 
                dx : this.state.pan.x,
                dy : this.state.pan.y
            }]),
            onPanResponderRelease        : (e, gesture) => {
                /*
                    for not resetting pos ontouchrelease 
                */
                // let windowWidth = window.width;
                // let windowHeight = window.height;
                // let posY = gesture.dy <= 0 ? 0 : gesture.dy;
                // if( posY >= windowHeight ){
                //     posY = gesture.dy - CIRCLE_RADIUS;
                // }
                
                Animated.spring(this.state.pan,{
                    toValue : {
                        x : 0,
                        y : 0,
                        // x : gesture.dx > (windowWidth / 2)  ? windowWidth - CIRCLE_RADIUS : 0 ,
                        // y : posY
                    }
                }).start();
            }
        });
    }

    _onPress = () => {
        this.props.onClick();
    }

    render(){
        return(
                <Animated.View                     
                    {...this.panResponder.panHandlers}
                    style={[{backgroundColor : this.state.backgroundColor},styles.animatedObj,this.state.pan.getLayout()]}>
                    <TouchableOpacity activeOpacity={0.7} onPress={this._onPress}>
                        <Text style={[{ color : this.state.fontColor },styles.buttonText]}>
                            $
                        </Text>
                    </TouchableOpacity>
                </Animated.View>
        );
    }

}

const styles = StyleSheet.create({
    animatedObj : {
        position : 'absolute',    
        borderRadius : CIRCLE_RADIUS / 2,              
        width:CIRCLE_RADIUS,
        height:CIRCLE_RADIUS,
        justifyContent : 'center',
        marginTop:window.height - CIRCLE_RADIUS * 2,
        marginLeft: 10
    },
    buttonText : {
        fontWeight : 'bold',
        fontSize : CIRCLE_RADIUS / 2,                
        textAlign : 'center'
    } 
});