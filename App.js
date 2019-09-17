/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
} from 'react-native';

import LoginScreen from './screens/Login'
import SignUpScreen from './screens/SignUp'
import HomeScreen from './screens/Home'
import CamScreen from './screens/Cam'

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Cam: CamScreen,
});



const StackNavigator = createStackNavigator({
  Login: LoginScreen,
  SignUp: SignUpScreen,
},
{
  headerMode: 'none',
  navigationOption: {
    headerVisible: false
  }
});

const SwitchNavigator = createSwitchNavigator({
  Auth: StackNavigator,
  Main: TabNavigator,
})



const App = createAppContainer(SwitchNavigator);

export default App;