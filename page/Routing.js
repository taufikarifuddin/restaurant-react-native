import { createStackNavigator  } from 'react-navigation';
import RLoginForm from './RLoginForm';
import RMainPage from './RMainPage';
import RRegisterForm from './RRegisterForm';
import RDetailOrder from './RDetailOrder';
import RCheckout from './RCheckout';
import RHistoryOrder from './RHistoryOrder';

export default Routing = createStackNavigator ({   
    Login : { screen : RLoginForm },                    
    Main : { screen :  RMainPage},         
    DetailOrder : { screen : RDetailOrder },        
    Register : { screen : RRegisterForm },    
    HistoryOrder : { screen : RHistoryOrder },        
    Checkout : {screen : RCheckout},            
},{
    headerMode : 'none',
    mode : 'modal'
});