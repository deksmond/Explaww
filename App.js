import React from 'react';
import { View } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import LoadingScreen from './ios/screens/LoadingScreen'
import RegisterScreen from './ios/screens/RegisterScreen'
import LoginScreen from './ios/screens/LoginScreen'

import Home from './ios/screens/Home'
import Location from './ios/screens/Location'
import Events from './ios/screens/Events'
import Cart from './ios/screens/Cart'
import Profile from './ios/screens/Profile'

import ItemScreen from './ios/screens/routes/ItemScreen'
import EventScreen from './ios/screens/routes/EventScreen'
import CheckoutScreen from './ios/screens/routes/CheckoutScreen'
import Store from './ios/screens/routes/StoreScreen'
import StoreScreen from './ios/screens/routes/StoreScreen'
import ProductScreen from './ios/screens/routes/ProductScreen'

import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyCdrgM7m4hQ_raHW6rq0RJuebRJAeqQ8ms",
  authDomain: "eureka-30c21.firebaseapp.com",
  databaseURL: "https://eureka-30c21.firebaseio.com",
  projectId: "eureka-30c21",
  storageBucket: "eureka-30c21.appspot.com",
  messagingSenderId: "695278736150",
  appId: "1:695278736150:web:a666634242c3a398bb3637"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppTabNavigator = createMaterialBottomTabNavigator(
  {
    Home:{
      screen: Home,
      navigationOptions: {
        tabBarLabel: ' ',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon name={'ios-home'} size={27} style={[{ color: tintColor }]}/>
          </View>
        ),
      }
    },
    Location:{
      screen: Location,
      navigationOptions: {
        tabBarLabel: ' ',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon name={'ios-compass'} size={27} style={[{ color: tintColor }]}/>
          </View>
        ),
      }
    },
    Events:{
      screen: Events,
      navigationOptions: {
        tabBarLabel: ' ',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon name={'ios-calendar'} size={27} style={[{ color: tintColor }]}/>
          </View>
        ),
      }
    },
    Cart:{
      screen: Cart,
      navigationOptions: {
        tabBarLabel: ' ',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon name={'ios-cart'} size={27} style={[{ color: tintColor }]}/>
          </View>
        ),
      }
    },
    Profile:{
      screen: Profile,
      navigationOptions: {
        tabBarLabel: ' ',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon name={'ios-person'} size={27} style={[{ color: tintColor }]}/>
          </View>
        ),
      }
    },
  },
  {
    activeColor: 'red',
    inactiveColor: 'grey',
    barStyle: { backgroundColor: '#fff'}
  }
);

const AuthStack = createStackNavigator({
  Register: RegisterScreen,
  Login: LoginScreen
});

const RouteStack = createStackNavigator({
    Item: ItemScreen,
    Event: EventScreen,
    Checkout: CheckoutScreen,
    Store: StoreScreen,
    Product: ProductScreen
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppTabNavigator,
      Routes: RouteStack,
      Auth: AuthStack
    }, 
    {
      initialRouteName: "Loading"
    }
  )
);