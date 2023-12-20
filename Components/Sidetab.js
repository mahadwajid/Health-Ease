import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import Home from '../Pages/Home';
import HomeStack from './Homestack';
import Bottomtab from './Bottomtab';

const Drawer = createDrawerNavigator();

const Sidetab = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Bottomtab" component={Bottomtab} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Signup" component={Signup} />
    </Drawer.Navigator>
  );
};

export default Sidetab;
