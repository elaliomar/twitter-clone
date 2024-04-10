import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import {useSelector} from 'react-redux';
import DrawerNavigation from './DrawerNavigation';

const UnAuthStack = createNativeStackNavigator();

const MainNavigation = () => {
  const auth = useSelector((state: any) => state.auth.userId);
  return (
    <>
      {auth ? (
        <DrawerNavigation />
      ) : (
        <UnAuthStack.Navigator screenOptions={{headerShown: false}}>
          <UnAuthStack.Screen name="LogIn" component={LoginScreen} />
          <UnAuthStack.Screen name="SignUp" component={SignUpScreen} />
        </UnAuthStack.Navigator>
      )}
    </>
  );
};

export default MainNavigation;
