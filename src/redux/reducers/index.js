import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import authUser from './authUser';
import costomPage from './costomPage';
import notification from './notification';

const authConfig = {
  storage: AsyncStorage,
  key: 'auth',
};

const notifConfig = {
  storage: notification,
  key: 'notifications',
};

const reducer = combineReducers({
  authUser: persistReducer(authConfig, authUser),
  notification: persistReducer(notifConfig, notification),
  costomPage,
});

export default reducer;
