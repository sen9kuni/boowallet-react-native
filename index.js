/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import './src/helpers/notifService';

AppRegistry.registerComponent(appName, () => App);
