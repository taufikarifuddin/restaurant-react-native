import { createStackNavigator  } from 'react-navigation';
import RLoginForm from './RLoginForm';
import RMainPage from './RMainPage';
import RRegisterForm from './RRegisterForm';
import RDetailOrder from './RDetailOrder';
import RCheckout from './RCheckout';

export default Routing = createStackNavigator ({    
    DetailOrder : { screen : RDetailOrder },
    Login : { screen : RLoginForm },
    Main : { screen :  RMainPage},    
    Register : { screen : RRegisterForm },
    Checkout : {screen : RCheckout},        
},{
    headerMode : 'none',
    mode : 'modal'
});