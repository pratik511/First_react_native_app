/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Screen/Home';
import Form from './Screen/Form';
import Location from './Screen/Location';
import Nearloacation from './Screen/Nearloacation';
import Offter from './Screen/Offter';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Login from './Screen/Login';

const { width } = Dimensions.get("window");
const height = width / 0.5;

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      { /* tabBarOptions={{ showLabel: false }} */}
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{ title: "My Home", headerStyle: { backgroundColor: "skyblue", height: height / 15 }, headerRight: () => (<Icon size={24} color="black" name="notifications" style={{ right: 15 }} />), tabBarIcon: () => (<Icon name='home' size={25} />) , tabBarHideOnKeyboard: true }} />
        <Tab.Screen name="Nearloacation" component={Nearloacation} options={{ headerStyle: { backgroundColor: "skyblue", height: height / 15 }, tabBarIcon: () => (<Icon name='navigation' size={25} />) , tabBarHideOnKeyboard: true }} />
        <Tab.Screen name="Location" component={Location} options={{ headerStyle: { backgroundColor: "skyblue", height: height / 15 }, tabBarIcon: () => (<Icon name='place' size={25} />) }} />
        <Tab.Screen name="Offter" component={Offter} options={{ headerStyle: { backgroundColor: "skyblue", height: height / 15 }, tabBarIcon: () => (<Icon name='star' size={25} />) }} />
        <Tab.Screen name="Form" component={Form} options={{ title: "Profile", headerStyle: { backgroundColor: "skyblue", height: height / 15 }, tabBarHideOnKeyboard: true, tabBarIcon: () => (<Icon name='person' size={25} />) }} />
        <Tab.Screen name="Login" component={Login} options={{ title: "Login", headerStyle: { backgroundColor: "skyblue", height: height / 15 }, tabBarHideOnKeyboard: true, tabBarIcon: () => (<Icon name='person' size={25} />) }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}