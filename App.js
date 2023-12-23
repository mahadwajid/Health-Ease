import { NavigationContainer } from '@react-navigation/native';
import Appnavigator from './Components/Appnavigator';
import { AuthProvider } from './AuthContext';



export default function App() {
  return (
    <AuthProvider>
    <NavigationContainer>
    <Appnavigator />
    </NavigationContainer>
    </AuthProvider>
   
   
  );
}
