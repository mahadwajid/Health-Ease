import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Pages/Home';
import Booking from '../Pages/Booking';
import Bottomtab from './Bottomtab';
import Eprescription from '../Pages/Eprescription';
import Medicalrecord from '../Pages/Medicalrecord';
import Healthtracker from '../Pages/Healthtracker';
import Support from '../Pages/Support';
import Subscription from '../Pages/Subscription';

const Stack = createStackNavigator();

const Appnavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Bottomtab">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Bottomtab" component={Bottomtab}
      options={{ headerShown: false }} 
       
      />
      <Stack.Screen name="Booking" component={Booking} />
      <Stack.Screen name="Eprescription" component={Eprescription} />
      <Stack.Screen name="Medicalrecord" component={Medicalrecord} />
      <Stack.Screen name="Healthtracker" component={Healthtracker} />
      <Stack.Screen name="Support" component={Support} />
      <Stack.Screen name="Subscription" component={Subscription} />
    </Stack.Navigator>
  );
};

export default Appnavigator;
