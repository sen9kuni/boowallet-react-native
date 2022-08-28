import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TransactionsDetail from './TransactionsDetail';
import TransactionsHistory from './TransactionsHistory';

const StackHistory = createNativeStackNavigator();

const HistoryStack = () => {
  return (
    <StackHistory.Navigator>
      <StackHistory.Screen
        options={{headerShown: false}}
        name="Transaction Detail"
        component={TransactionsDetail}
      />
      <StackHistory.Screen
        options={{headerShown: false}}
        name="Transaction History"
        component={TransactionsHistory}
      />
    </StackHistory.Navigator>
  );
};

export default HistoryStack;
