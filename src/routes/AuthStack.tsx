// IMPORTS
// libs
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// pages
import Login from '../pages/Login';
import AppTabs from './AppTabs';
import WritePiu from '../pages/WritePiu';

// hooks
import {useAuth} from '../hooks/useAuth';

// consts
const { Navigator, Screen } = createStackNavigator();

function AuthStack() {
  return (
      <Navigator screenOptions={{ headerShown: false, }} initialRouteName="Login">
        <Screen name="Login" component={Login} />
      </Navigator>
  )
}

export default AuthStack;
