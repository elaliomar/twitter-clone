import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/ProfileScreen';
import FeedScreen from '../screens/FeedScreen';
import RetweetScreen from '../screens/RetweetScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import AvatarHeader from '../components/atoms/AvatarHeader';

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
        name="Retweet posts"
        component={RetweetScreen}
        options={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#00b0f0',
          tabBarIcon: ({color}) => (
            <Icon name="retweet" size={30} color={color} />
          ),
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
