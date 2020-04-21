import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeView from '../views/HomeView';

const AppNavigation = createStackNavigator(
    {
        Home: {screen: HomeView},
    },
    {
        headerMode: 'none'
    }
);

const Routes = createAppContainer(AppNavigation);

export default Routes;