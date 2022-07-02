import React, { Component } from 'react';
import { Pressable, View, Text, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Location from './screens/location';
import HomeScreen from './screens/home';
import CustomDrawer from './navigation/customDrawer';


const Drawer = createDrawerNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawer {...props} />}>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Location" component={Location} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
