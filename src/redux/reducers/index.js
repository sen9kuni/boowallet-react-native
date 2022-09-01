import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import authUser from './authUser';
import costomPage from './costomPage';

const authConfig = {
  storage: AsyncStorage,
  key: 'auth',
};

const reducer = combineReducers({
  authUser: persistReducer(authConfig, authUser),
  costomPage,
});

export default reducer;
