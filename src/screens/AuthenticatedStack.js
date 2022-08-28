import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import CreatePin from './CreatePin';
import PinSuccess from './PinSuccess';
import SearchReciver from './SearchReciver';
import TopUp from './TopUp';
import Profile from './Profile';

const ButtonTab = createBottomTabNavigator();

const AuthenticatedStack = () => {
  return (
    <ButtonTab.Navigator>
      <ButtonTab.Screen name="Home" component={Home} />
      <ButtonTab.Screen name="Transfer" component={SearchReciver} />
      <ButtonTab.Screen name="Top Up" component={TopUp} />
      <ButtonTab.Screen name="Profile" component={Profile} />
      {/* <ButtonTab.Screen name="create pin" component={CreatePin} />
      <ButtonTab.Screen name="create pin success" component={PinSuccess} /> */}
    </ButtonTab.Navigator>
  );
};

export default AuthenticatedStack;
