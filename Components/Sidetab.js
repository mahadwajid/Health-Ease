import React, { useContext } from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { View, Text, StyleSheet } from 'react-native';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import Bottomtab from './Bottomtab';
import { AuthContext } from '../AuthContext';
import Logout from '../Pages/Logout';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({ navigation }) => {
  const auth = useContext(AuthContext);
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout(); 
  };
  

  return (
    <DrawerContentScrollView>
      <View style={styles.sidebar}>
        {auth.user ? (
          <>
            <Text style={styles.greeting}>Welcome, {auth.user.firstName}!</Text>
            <DrawerItem
              label="Home"
              onPress={() => navigation.navigate('Home')}
            />
    
            <DrawerItem
               label="Logout"
               onPress={handleLogout} 
            />
          </>
        ) : (
          <>
            <Text style={styles.greeting}>Welcome, Guest!</Text>
            <DrawerItem
              label="Login"
              onPress={() => navigation.navigate('Login')}
            />
            <DrawerItem
              label="Signup"
              onPress={() => navigation.navigate('Signup')}
            />
            {/* Other screens */}
          </>
        )}
      </View>
    </DrawerContentScrollView>
  );
};

const Sidetab = () => {
  return (
    <Drawer.Navigator drawerContent={({ navigation }) => <CustomDrawerContent navigation={navigation} />} >
      <Drawer.Screen name="Home" component={Bottomtab} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Signup" component={Signup} />
      {/* Other screens */}
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    flex: 1,
    paddingTop: 20,
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
});

export default Sidetab;
