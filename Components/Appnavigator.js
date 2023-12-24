 import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Sidetab from './Sidetab';
import Medicalrecord from '../Pages/Medicalrecord';
import { TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AdminHome from '../Pages/Admin/AdminHome';
import AdminEprescription from '../Pages/Admin/AdminE-prescription';

const Stack = createStackNavigator();

const Appnavigator = () => {
  const isAdmin = true;

  return (
    <Stack.Navigator initialRouteName="Sidetab" headerMode="none">
      <Stack.Screen name="Sidetab" component={Sidetab} />
      <Stack.Screen
        name="Medicalrecord"
        component={Medicalrecord}
        options={({ navigation }) => ({
          title: 'Medical Record',
          headerShown: true,
          headerBackTitleVisible: false,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
        })}
      />
      {isAdmin && <Stack.Screen name="AdminHome" component={AdminHome} />}
      {isAdmin && <Stack.Screen name="AdminEprescription" component={AdminEprescription} />} 
    </Stack.Navigator>
  );
};

export default Appnavigator;



