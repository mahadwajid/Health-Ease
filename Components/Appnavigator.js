 import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Sidetab from './Sidetab';
import Medicalrecord from '../Pages/Medicalrecord';
import { TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AdminHome from '../Pages/Admin/AdminHome';
import AdminEprescription from '../Pages/Admin/AdminE-prescription';
import { View } from 'react-native';
import Eprescription from '../Pages/Eprescription';
import Healthtracker from '../Pages/Healthtracker';
import Support from '../Pages/Support';
import Test from '../Pages/Test';

const Stack = createStackNavigator();

const Appnavigator = () => {
  const isAdmin = true;

  return (
    <Stack.Navigator initialRouteName="Sidetab" headerMode="none">
      <Stack.Screen name="Sidetab" component={Sidetab}   />
      <Stack.Screen
        name="Medicalrecord"
        component={Medicalrecord}
        options={({ navigation }) => ({
          title: 'Medical Record',
          headerShown: true,
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: '#cccbc8', // Set the header background color
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="Eprescription"
        component={Eprescription}
        options={({ navigation }) => ({
          title: 'E-Prescription',
          headerShown: true,
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: '#cccbc8', // Set the header background color
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
        })}
      /> 
       <Stack.Screen
        name="Healthtracker"
        component={Healthtracker}
        options={({ navigation }) => ({
          title: 'Healthtracker',
          headerShown: true,
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: '#cccbc8', // Set the header background color
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
        })}
      />

    <Stack.Screen
        name="Support"
        component={Support}
        options={({ navigation }) => ({
          title: 'Support',
          headerShown: true,
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: '#cccbc8', // Set the header background color
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
        })}
      />

<Stack.Screen
        name="Test"
        component={Test}
        options={({ navigation }) => ({
          title: 'Test',
          headerShown: true,
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: '#cccbc8', // Set the header background color
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
        })}
      />



      {isAdmin && <Stack.Screen name="AdminHome" component={AdminHome}
       options={{
        headerStyle: {
          backgroundColor: '#4d648d', // Set the header background color
        },
        headerTintColor: '#FFFFFF', // Set the text color in the header
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerShown: true,
      }}
      
      />}
      {isAdmin && <Stack.Screen name="AdminEprescription" component={AdminEprescription} />} 
    </Stack.Navigator>
  );
};

export default Appnavigator;



