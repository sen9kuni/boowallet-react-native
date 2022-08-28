import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SearchReciver from './SearchReciver';
import AmountInput from './AmountInput';
import TransferConfirmation from './TransferConfirmation';
import TransferPin from './TransferPin';
import TransactionSuccess from './TransactionSuccess';
import TransactionFailed from './TransactionFailed';

const StackTrans = createNativeStackNavigator();

const TransactionStack = () => {
  return (
    // <NavigationContainer>
    <StackTrans.Navigator>
      <StackTrans.Screen
        options={{headerShown: false}}
        name="search"
        component={SearchReciver}
      />
      <StackTrans.Screen
        options={{headerShown: false}}
        name="amount input"
        component={AmountInput}
      />
      <StackTrans.Screen
        options={{headerShown: false}}
        name="confirmation"
        component={TransferConfirmation}
      />
      <StackTrans.Screen
        options={{headerShown: false}}
        name="transaction pin"
        component={TransferPin}
      />
      <StackTrans.Screen
        options={{headerShown: false}}
        name="transaction success"
        component={TransactionSuccess}
      />
      <StackTrans.Screen
        options={{headerShown: false}}
        name="transaction failed"
        component={TransactionFailed}
      />
    </StackTrans.Navigator>
    // </NavigationContainer>
  );
};

export default TransactionStack;
