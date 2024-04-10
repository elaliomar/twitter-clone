import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/ProfileScreen';
import FeedScreen from '../screens/FeedScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import AvatarHeader from '../components/atoms/AvatarHeader';
import Post from '../screens/Post';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerLeft: () => <AvatarHeader />,
      }}>
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#00b0f0',
          tabBarIcon: ({color}) => <Icon name="feed" size={30} color={color} />,
        }}
      />
      <Tab.Screen
        name="Post"
        component={Post}
        options={{
          tabBarButton: () => null,
          title: 'Post',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#00b0f0',
          tabBarIcon: ({color}) => <Icon name="user" size={30} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
