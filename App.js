import {View, Text} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, presistor} from './src/redux/store';

import DummyLab from './src/screens/DummyLab';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import CreatePin from './src/screens/CreatePin';
import PinSuccess from './src/screens/PinSuccess';
import ResetPasswordEmail from './src/screens/ResetPasswordEmail';
import ResetPasswordInput from './src/screens/ResetPasswordInput';
import Home from './src/screens/Home';
import TransactionsDetail from './src/screens/TransactionsDetail';
import TransactionsHistory from './src/screens/TransactionsHistory';
import SearchReciver from './src/screens/SearchReciver';
import AmountInput from './src/screens/AmountInput';
import TransferConfirmation from './src/screens/TransferConfirmation';
import TransferPin from './src/screens/TransferPin';
import TransactionSuccess from './src/screens/TransactionSuccess';
import TransactionFailed from './src/screens/TransactionFailed';
import EditPhone from './src/screens/EditPhone';
import AuthStack from './src/screens/AuthStack';
import AuthenticatedStack from './src/screens/AuthenticatedStack';
import PersonalInformation from './src/screens/PersonalInformation';
import Profile from './src/screens/Profile';

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
