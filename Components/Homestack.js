import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Pages/Home';
import Booking from '../Pages/Booking';
import Eprescription from '../Pages/Eprescription';
import Healthtracker from '../Pages/Healthtracker';
import Support from '../Pages/Support';
import Subscription from '../Pages/Subscription';
import Login from '../Pages/Login';
import { AuthContext } from '../AuthContext';
import Step2 from '../Pages/HealthTracker/step2';
import Step3 from '../Pages/HealthTracker/step3';
import Step1 from '../Pages/HealthTracker/step1';
// import Step1 from '../Pages/HealthTracker/step1';





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
      <Stack.Screen name="Step1" component={Step1} />
      <Stack.Screen name="Step2" component={Step2} />
      <Stack.Screen name="Step3" component={Step3} />
   
 
    </Stack.Navigator>
  );
};

export default HomeStack;
