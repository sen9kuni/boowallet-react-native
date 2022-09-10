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
import {useDispatch, useSelector} from 'react-redux';
import RNBootSplash from 'react-native-bootsplash';
import HomeStack from './HomeStack';
import PushNotification from 'react-native-push-notification';
import {setToken} from '../redux/reducers/notification';

const StackAuth = createNativeStackNavigator();

const AuthStack = () => {
  const dispatch = useDispatch();
  const tokenLogin = useSelector(state => state.authUser.token);
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
      <StackAuth.Navigator>
        {tokenLogin ? (
          <StackAuth.Screen
            options={{headerShown: false}}
            name="AuthHome"
            component={AuthenticatedStack}
          />
        ) : (
          <>
            <StackAuth.Screen name="login" component={Login} />
            <StackAuth.Screen name="sign up" component={Signup} />
            <StackAuth.Screen
              name="input email"
              component={ResetPasswordEmail}
            />
            <StackAuth.Screen
              name="resetPassword"
              component={ResetPasswordInput}
            />
          </>
        )}
        {/* <StackAuth.Screen name="login" component={Login} />
        <StackAuth.Screen name="sign up" component={Signup} />
        <StackAuth.Screen name="input email" component={ResetPasswordEmail} />
        <StackAuth.Screen name="resetPassword" component={ResetPasswordInput} />
        <StackAuth.Screen
          options={{headerShown: false}}
          name="AuthHome"
          component={AuthenticatedStack}
        /> */}
      </StackAuth.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;
