import { StackNavigator } from 'react-navigation';

import Main from '../screen/Main';
import Home from '../screen/Home';
import Home2 from '../screen/Home2';

export default StackNavigator({
    //nó render trình tự, nào trước rend trước sau rend sau
    Main: {
        screen: Main,
        //các dòng code về navigationoption để cho màn hình khỏi bị chèn xuống dưới.
        navigationOptions:{
            header: () => null,
        },
    },
    Home: {
        screen: Home,
        navigationOptions:({ navigation })=>({
            headerTitle: navigation.state.params.title, 
        })
    },
    Home2: {
        screen: Home2,
        navigationOptions:({ navigation })=>({
            headerTitle: navigation.state.params.title, 
        })
    },
});