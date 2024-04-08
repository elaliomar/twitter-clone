import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import {useSelector} from 'react-redux';
import DrawerNavigation from './DrawerNavigation';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  const auth = useSelector((state: any) => state.auth.userId);
  return (
    <Stack.Navigator>
      {auth ? (
        <Stack.Group screenOptions={{headerShown: false}}>
          <Stack.Screen name="Drawer" component={DrawerNavigation} />
        </Stack.Group>
      ) : (
        <Stack.Group screenOptions={{headerShown: false}}>
          <Stack.Screen name="LogIn" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

export default MainNavigation;
