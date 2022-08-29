import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import authUser from './authUser';

const authConfig = {
  storage: AsyncStorage,
  key: 'auth',
};

const reducer = combineReducers({
  authUser: persistReducer(authConfig, authUser),
});

export default reducer;
