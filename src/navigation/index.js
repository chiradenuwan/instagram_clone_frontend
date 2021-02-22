import 'react-native-gesture-handler';
import React, { Component, useState } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import HomeScreen from '../../screen/home-screen/index';


import ActiveHome from '../../assets/icon/home.png';
import Inactivesearch from '../../assets/icon/search.png';
import Inactiveprofile from '../../assets/icon/user.png';
import {
  Image,
} from 'react-native';

const BottomNavigator = createMaterialBottomTabNavigator({

  Home: {
    screen: HomeScreen,
    navigationOptions: {
      activeColor: '#40BFFF',
      inactiveColor: '#000000',
      tabBarColor: '#FFFFFF',
      tabBarLabel: false,
      showLabel: false,
      barStyle: { backgroundColor: '#FFFFFF' },
      tabBarIcon: ({ color, focused }) => (
        <Image style={{ overflow: 'hidden', resizeMode: 'cover', width: 26, height: 26 }} resizeMode='cover' source={focused ? ActiveHome : ActiveHome} />
      )
    },
    tabBarOptions: {
      showLabel: false
    }
  },

  Search: {
    screen: HomeScreen,
    navigationOptions: {
      activeColor: '#000000',
      inactiveColor: '#000000',
      tabBarColor: '#FFFFFF',
      barStyle: { backgroundColor: '#FFFFFF' },
      tabBarIcon: ({ color, focused }) => (
        <Image style={{ overflow: 'hidden', resizeMode: 'cover', width: 26, height: 26 }} resizeMode='cover' source={focused ? Inactivesearch : Inactivesearch} />
      )
    },
    tabBarOptions: {
      showLabel: false
    }
  },
  Profile: {
    screen: HomeScreen,
    navigationOptions: {
      activeColor: '#000000',
      inactiveColor: '#000000',
      tabBarColor: '#FFFFFF',
      barStyle: { backgroundColor: '#FFFFFF' },
      tabBarIcon: ({ color, focused }) => (
        <Image style={{ overflow: 'hidden', resizeMode: 'cover', width: 26, height: 26 }} resizeMode='cover' source={focused ? Inactiveprofile : Inactiveprofile} />
      )
    },
    tabBarOptions: {
      showLabel: false
    }
  },
}, {
  tabBarOptions: {
    showLabel: false
  }
});

const Navigation = createStackNavigator({
    BottomNavigator: BottomNavigator,
    HomeScreen: HomeScreen,
  },
  {
    headerMode: 'none',

  },
);


const App = createAppContainer(Navigation);

export default (App);
