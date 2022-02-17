/**
 * @format
 */

import {AppRegistry} from 'react-native'; 
import Screen1 from './ScreenSingUp';
import Login from './ScreenLogin';
import Profile1 from './ScreenProfile'; 
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Screen1);
