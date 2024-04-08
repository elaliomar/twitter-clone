import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import HelpCenterScreen from '../screens/HelpCenterScreen';
import CustomDrawer from '../components/molecules/CustomDrawer';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Settings from '../screens/Settings';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{headerShown: false}}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerActiveTintColor: '#00b0f0',
          drawerIcon: ({color}) => (
            <Foundation name="home" size={25} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Help Center"
        component={HelpCenterScreen}
        options={{
          drawerActiveTintColor: '#00b0f0',
          drawerIcon: ({color}) => (
            <Feather name="help-circle" size={20} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Settings and privacy',
          drawerActiveTintColor: '#00b0f0',
          drawerIcon: ({color}) => (
            <AntDesign name="setting" size={20} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
