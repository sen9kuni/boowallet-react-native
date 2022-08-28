import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './Login';
import Signup from './Signup';
import CreatePin from './CreatePin';
import PinSuccess from './PinSuccess';
import ResetPasswordEmail from './ResetPasswordEmail';
import ResetPasswordInput from './ResetPasswordInput';
import Home from './Home';
import AuthenticatedStack from './AuthenticatedStack';

const StackAuth = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <NavigationContainer>
      <StackAuth.Navigator>
        <StackAuth.Screen name="login" component={Login} />
        <StackAuth.Screen name="sign up" component={Signup} />
        <StackAuth.Screen name="input email" component={ResetPasswordEmail} />
        <StackAuth.Screen name="resetPassword" component={ResetPasswordInput} />
        <StackAuth.Screen
          options={{headerShown: false}}
          name="AuthHome"
          component={AuthenticatedStack}
        />
      </StackAuth.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;