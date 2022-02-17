/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Screen1 from './ScreenSingUp';
import Login from './ScreenLogin';
import Profile1 from './ScreenProfile'; 
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Profile1);
