import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../Pages/Home';
import Booking from '../Pages/Booking';
import Eprescription from '../Pages/Eprescription';
// import Medicalrecord from '../Pages/Medicalrecord';
import Healthtracker from '../Pages/Healthtracker';
import Support from '../Pages/Support';
import Subscription from '../Pages/Subscription';
import BMI from '../Pages/HealthTracker/BMI';

const Stack = createStackNavigator();

const HomeStack = () => {
 return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}  />
      <Stack.Screen name="Booking" component={Booking} />
      <Stack.Screen name="Eprescription" component={Eprescription} />
      {/* <Stack.Screen name="Medicalrecord" component={Medicalrecord} /> */}
      <Stack.Screen name="Healthtracker" component={Healthtracker} />
      <Stack.Screen name="Support" component={Support} />
      <Stack.Screen name="Subscription" component={Subscription} />
      <Stack.Screen name="BMI" component={BMI} />

    </Stack.Navigator>
 );
}

export default HomeStack;