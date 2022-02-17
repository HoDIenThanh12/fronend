/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Screen from './ScreenSingUp';
import Login from './ScreenLogin';
import Profile from './ScreenProfile';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Login);
