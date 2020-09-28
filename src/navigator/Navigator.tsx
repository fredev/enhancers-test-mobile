import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabBar from '../components/BottomTabBar/BottomTabBar';

// Screens
import SearchScreen from '../screens/SearchScreen';
import LocationScreen from '../screens/LocationScreen';
import HomeScreen from '../screens/HomeScreen';
import WeatherScreen from '../screens/WeatherScreen';
import Home from '../components/Icon/Home';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeSwitchNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Weather" component={WeatherScreen} />
  </Stack.Navigator>
);

const Navigator: React.FC = () => (
  <NavigationContainer>
    <Tab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeSwitchNavigator} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Location" component={LocationScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default Navigator;
