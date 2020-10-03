import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps124306Navigator from '../features/Maps124306/navigator';
import UserProfile124302Navigator from '../features/UserProfile124302/navigator';
import Maps124262Navigator from '../features/Maps124262/navigator';
import Add-Item124261Navigator from '../features/Add-Item124261/navigator';
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
Maps124306: { screen: Maps124306Navigator },
UserProfile124302: { screen: UserProfile124302Navigator },
Maps124262: { screen: Maps124262Navigator },
Add-Item124261: { screen: Add-Item124261Navigator },
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
