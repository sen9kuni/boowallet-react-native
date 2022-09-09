// import {View, Text} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, presistor} from './src/redux/store';
// import {injectStore} from './src/helpers/httpsInterceptors';
// injectStore(store);

import AuthStack from './src/screens/AuthStack';
import DummyLab from './src/screens/DummyLab';
// import notifications from './src/screens/notifications';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={presistor}>
        <AuthStack />
      </PersistGate>
    </Provider>
  );
};

export default App;
