import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Profile from './Profile';
import PersonalInformation from './PersonalInformation';
import ChangePassword from './ChangePassword';
import CurrentPin from './CurrentPin';
import NewPin from './NewPin';
import EditPhone from './EditPhone';

const StackProfile = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    // <NavigationContainer>
    <StackProfile.Navigator>
      <StackProfile.Screen
        options={{headerShown: false}}
        name="profile"
        component={Profile}
      />
      <StackProfile.Screen
        options={{headerShown: false}}
        name="personal information"
        component={PersonalInformation}
      />
      <StackProfile.Screen
        options={{headerShown: false}}
        name="change password"
        component={ChangePassword}
      />
      <StackProfile.Screen
        options={{headerShown: false}}
        name="input old pin"
        component={CurrentPin}
      />
      <StackProfile.Screen
        options={{headerShown: false}}
        name="input new pin"
        component={NewPin}
      />
      <StackProfile.Screen
        options={{headerShown: false}}
        name="edit phone"
        component={EditPhone}
      />
    </StackProfile.Navigator>
    // </NavigationContainer>
  );
};

export default ProfileStack;
