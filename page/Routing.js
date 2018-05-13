import { createStackNavigator  } from 'react-navigation';
import RLoginForm from './RLoginForm';
import RMainPage from './RMainPage';
import RRegisterForm from './RRegisterForm';
import RDetailOrder from './RDetailOrder';
import RCheckout from './RCheckout';

export default Routing = createStackNavigator ({    
    Main : { screen :  RMainPage},        
    Checkout : {screen : RCheckout},            
    DetailOrder : { screen : RDetailOrder },
    Login : { screen : RLoginForm },
    Register : { screen : RRegisterForm },
},{
    headerMode : 'none',
    mode : 'modal'
});