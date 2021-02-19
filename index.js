/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Adduser from './screens/AddUser/Adduser';

AppRegistry.registerComponent(appName, () => Adduser);
