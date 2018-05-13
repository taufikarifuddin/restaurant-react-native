import { createStackNavigator  } from 'react-navigation';
import RLoginForm from './RLoginForm';
import RMainPage from './RMainPage';
import RRegisterForm from './RRegisterForm';
import RDetailOrder from './RDetailOrder';

export default Routing = createStackNavigator ({    
    Main : { screen :  RMainPage},    
    Login : { screen : RLoginForm },
    Register : { screen : RRegisterForm },
    DetailOrder : { screen : RDetailOrder }
},{
    headerMode : 'none',
    mode : 'modal'
});