import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HelpCenterScreen from '../screens/HelpCenterScreen';
import CustomDrawer from '../components/molecules/CustomDrawer';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import TabNavigation from './TabNavigation';
import AvatarHeader from '../components/atoms/AvatarHeader';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Home"
        component={TabNavigation}
        options={{
          headerShown: false,
          drawerActiveTintColor: '#00b0f0',
          drawerIcon: ({color}) => (
            <Foundation name="home" size={25} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Help"
        component={HelpCenterScreen}
        options={{
          headerTitleAlign: 'center',
          headerLeft: () => <AvatarHeader />,
          drawerActiveTintColor: '#00b0f0',
          drawerIcon: ({color}) => (
            <Feather name="help-circle" size={20} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
