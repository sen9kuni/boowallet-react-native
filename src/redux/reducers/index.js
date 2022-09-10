import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import authUser from './authUser';
import costomPage from './costomPage';
import notification from './notification';
import historyUser from './historyUser';
import profileUser from './profileUser';
import transactionUser from './transactionUser';
import notifUser from './notifUser';

const authConfig = {
  storage: AsyncStorage,
  key: 'auth',
};

const notifConfig = {
  storage: AsyncStorage,
  key: 'notifi',
};

const reducer = combineReducers({
  authUser: persistReducer(authConfig, authUser),
  notification: persistReducer(notifConfig, notification),
  historyUser,
  profileUser,
  transactionUser,
  costomPage,
  notifUser,
});

export default reducer;
