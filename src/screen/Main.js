import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Profile from './Profile';
import Account from './Account';
import User from './User';
import Logout from './Logout';

const Tab = createBottomTabNavigator();

function Main() {
  return (
    <Tab.Navigator initialRouteName="Profile">
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: '프로필',
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          title: '계정',
          tabBarIcon: ({ color, size }) => (
            <Icon name="list" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          title: '유저',
          tabBarIcon: ({ color, size }) => (
            <Icon name="groups" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Logout"
        component={Logout}
        options={{
          title: '로그아웃',
          tabBarIcon: ({ color, size }) => (
            <Icon name="logout" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Main;
