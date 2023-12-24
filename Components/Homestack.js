import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Pages/Home';
import Booking from '../Pages/Booking';
import Eprescription from '../Pages/Eprescription';
import Healthtracker from '../Pages/Healthtracker';
import Support from '../Pages/Support';
import Subscription from '../Pages/Subscription';
import BMI from '../Pages/HealthTracker/BMI';
import Login from '../Pages/Login';
import { AuthContext } from '../AuthContext';
import AdminHome from '../Pages/Admin/AdminHome';

const Stack = createStackNavigator();

const HomeStack = () => {
  const { user } = useContext(AuthContext);

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen
        name="Booking"
        component={user ? Booking : Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Eprescription" component={Eprescription} />
      <Stack.Screen name="Healthtracker" component={Healthtracker} />
      <Stack.Screen name="Support" component={Support} />
      <Stack.Screen name="Subscription" component={Subscription} />
      <Stack.Screen name="BMI" component={BMI} />
      {/* <Stack.Screen name="AdminHome" component={AdminHome} /> */}
    </Stack.Navigator>
  );
};

export default HomeStack;
