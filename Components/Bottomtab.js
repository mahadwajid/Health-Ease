import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from '../Pages/Home';
import Article from '../Pages/Article';
import Sidetab from './Sidetab';
import HomeStack from './Homestack';

const Tab = createBottomTabNavigator();

const Bottomtab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'HomeStack') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Article') {
            iconName = focused ? 'newspaper' : 'newspaper-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray', 
        tabBarStyle: { display: 'flex' }, 
      
      })}
    >
      <Tab.Screen name="HomeStack" component={HomeStack}  options={{ headerShown: false }}  />
      <Tab.Screen name="Article" component={Article} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

export default Bottomtab;
