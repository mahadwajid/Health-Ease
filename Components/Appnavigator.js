 import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Sidetab from './Sidetab';
import Medicalrecord from '../Pages/Medicalrecord';
import { TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

const Appnavigator = () => {
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
    </Stack.Navigator>
  );
};

export default Appnavigator;



