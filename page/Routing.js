import { createStackNavigator  } from 'react-navigation';
import RLoginForm from './RLoginForm';
import RMainPage from './RMainPage';
import RRegisterForm from './RRegisterForm';
import RDetailOrder from './RDetailOrder';
import RCheckout from './RCheckout';
import RHistoryOrder from './RHistoryOrder';

export default Routing = createStackNavigator ({    
    HistoryOrder : { screen : RHistoryOrder },    
    Main : { screen :  RMainPage},    
    Login : { screen : RLoginForm },        
    Checkout : {screen : RCheckout},            
    DetailOrder : { screen : RDetailOrder },
    Register : { screen : RRegisterForm },
},{
    headerMode : 'none',
    mode : 'modal'
});