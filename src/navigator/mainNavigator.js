import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps124391Navigator from '../features/Maps124391/navigator';
import Add-Item124390Navigator from '../features/Add-Item124390/navigator';
import Maps124386Navigator from '../features/Maps124386/navigator';
import UserProfile124382Navigator from '../features/UserProfile124382/navigator';
import Maps124311Navigator from '../features/Maps124311/navigator';
import Add-Item124310Navigator from '../features/Add-Item124310/navigator';
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
Maps124391: { screen: Maps124391Navigator },
Add-Item124390: { screen: Add-Item124390Navigator },
Maps124386: { screen: Maps124386Navigator },
UserProfile124382: { screen: UserProfile124382Navigator },
Maps124311: { screen: Maps124311Navigator },
Add-Item124310: { screen: Add-Item124310Navigator },
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
