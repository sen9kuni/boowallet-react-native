import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import CreatePin from './CreatePin';
import PinSuccess from './PinSuccess';
import Notifi from './Notifications';
import {useSelector} from 'react-redux';

const StackHome = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <StackHome.Navigator>
      <StackHome.Screen
        options={{headerShown: true}}
        name="Home"
        component={Home}
      />
      <StackHome.Screen
        options={{headerShown: false}}
        name="Notifications"
        component={Notifi}
      />
      <StackHome.Screen
        options={{headerShown: false}}
        name="Create Pin"
        component={CreatePin}
      />
      <StackHome.Screen
        options={{headerShown: false}}
        name="PinSuccess"
        component={PinSuccess}
      />
      {/* {pin ? (
        <StackHome.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
      ) : (
        <>
          <StackHome.Screen
            options={{headerShown: false}}
            name="Create Pin"
            component={CreatePin}
          />
          <StackHome.Screen
            options={{headerShown: false}}
            name="Pin Success"
            component={PinSuccess}
          />
        </>
      )} */}
    </StackHome.Navigator>
  );
};

export default HomeStack;
