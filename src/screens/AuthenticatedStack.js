import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './Home';
import TopUp from './TopUp';
import TransactionStack from './TransactionStack';
import ProfileStack from './ProfileStack';
import HistoryStack from './HistoryStack';
import HomeStack from './HomeStack';

const ButtonTab = createBottomTabNavigator();

const AuthenticatedStack = () => {
  return (
    <ButtonTab.Navigator>
      <ButtonTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
        name="Dashboard"
        component={HomeStack}
      />
      <ButtonTab.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="money" size={size} color={color} />
          ),
        }}
        name="Transfer"
        component={TransactionStack}
      />
      <ButtonTab.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="plus" size={size} color={color} />
          ),
        }}
        name="Top Up"
        component={TopUp}
      />
      <ButtonTab.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="file-text-o" size={size} color={color} />
          ),
        }}
        name="History"
        component={HistoryStack}
      />
      <ButtonTab.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="user" size={size} color={color} />
          ),
        }}
        name="Profile"
        component={ProfileStack}
      />
    </ButtonTab.Navigator>
  );
};

export default AuthenticatedStack;
