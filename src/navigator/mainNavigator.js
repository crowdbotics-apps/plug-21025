import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps124257Navigator from '../features/Maps124257/navigator';
import UserProfile124253Navigator from '../features/UserProfile124253/navigator';
import Maps124213Navigator from '../features/Maps124213/navigator';
import Add-Item124212Navigator from '../features/Add-Item124212/navigator';
import Maps124208Navigator from '../features/Maps124208/navigator';
import UserProfile124204Navigator from '../features/UserProfile124204/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps124257: { screen: Maps124257Navigator },
UserProfile124253: { screen: UserProfile124253Navigator },
Maps124213: { screen: Maps124213Navigator },
Add-Item124212: { screen: Add-Item124212Navigator },
Maps124208: { screen: Maps124208Navigator },
UserProfile124204: { screen: UserProfile124204Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
