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
import Icon1 from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screen/Login';
import Flatlist from './Components/Flatlist';

const { width } = Dimensions.get("window");
const height = width / 0.5;

const Neardeal = createNativeStackNavigator();

const flatlist = () =>{
  <Neardeal.Navigator>
    <Neardeal.Screen name='BarGrill' component={<Flatlist />}  />
  </Neardeal.Navigator>
}



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      { /* tabBarOptions={{ showLabel: false }} */}
      <Tab.Navigator
      tabBarOptions={{
        // activeTintColor: 'green',
        activeBackgroundColor: '#63c99a',
        inactiveBackgroundColor: '#3bbf82',
        inactiveTintColor:  '#FFF',
        showLabel: false,
        tabBarStyle:{height:0}
      }}
      >
        <Tab.Screen name="Home" component={Home} options={{ title: "My Home", headerStyle: { backgroundColor: "#3bbf82", height: height / 15 }, headerRight: () => (<Icon name="notifications" size={24} color="black" style={{ right: 15 }}/>), tabBarIcon: () => (<Icon name='home' color={'#fff'} size={25} />) , tabBarHideOnKeyboard: true }} />
        <Tab.Screen name="Nearloacation" component={Nearloacation} options={{ headerStyle: { backgroundColor: "#3bbf82", height: height / 15 }, tabBarIcon: () => (<Icon name='navigation' color={'#fff'} size={25} />) , tabBarHideOnKeyboard: true }} />
        <Tab.Screen name="Location" component={Location} options={{ headerStyle: { backgroundColor: "#3bbf82", height: height / 15 }, tabBarIcon: () => (<Icon1 name='pin-outline' color={'#fff'} size={25} />) }} />
        <Tab.Screen name="Offter" component={Offter} options={{ headerStyle: { backgroundColor: "#3bbf82", height:0 }, tabBarIcon: () => (<Icon name='star' color={'#fff'} size={25} />) }} />
        <Tab.Screen name="Form" component={Form} options={{ title: "Profile", headerStyle: { backgroundColor: "#3bbf82", height: height / 15 }, tabBarHideOnKeyboard: true, tabBarIcon: () => (<Icon name='person' color={'#fff'} size={25} />) }} />
        <Tab.Screen name="Login" component={Login} options={{ title: "Login", headerStyle: { backgroundColor: "#3bbf82", height: height / 15 }, tabBarHideOnKeyboard: true, tabBarIcon: () => (<Icon name='person' color={'#fff'} size={25} />) }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}