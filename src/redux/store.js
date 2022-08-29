import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {persistStore} from 'redux-persist';

import reducer from './reducers';

export const store = configureStore({
  reducer: reducer,
  middleware: [thunk, logger],
});

export const presistor = persistStore(store);
