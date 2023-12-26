import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import db from '../../firebaseconfig'; // Import your Firebase config

const Step3 = () => {
  const[name, setname]= useState('');
  const [bloodPressure, setBloodPressure] = useState('');
  const [bloodSugar, setBloodSugar] = useState('');

  const saveHealthData = async () => {
    try {
      const healthDataCollectionRef = collection(db, 'HealthData'); 
      await addDoc(healthDataCollectionRef, {
        name:name,
        bloodPressure: bloodPressure,
        bloodSugar: bloodSugar,
        timestamp: new Date().toISOString(),
      });
      console.log('Health data saved to Firebase!');
    } catch (error) {
      console.error('Error saving health data to Firebase: ', error);
    }
  };


  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Previous Health Data</Text>
       
      <TextInput
        style={styles.input}
        placeholder="Enter Patient"
        keyboardType="text"
        value={name}
        onChangeText={(text) => setname(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Blood Pressure"
        keyboardType="numeric"
        value={bloodPressure}
        onChangeText={(text) => setBloodPressure(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Blood Sugar"
        keyboardType="numeric"
        value={bloodSugar}
        onChangeText={(text) => setBloodSugar(text)}
      />

      <TouchableOpacity style={styles.button} onPress={saveHealthData}>
        <Text style={styles.buttonText}>Save Health Data</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    width: '100%',
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 12,
    borderRadius: 8,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Step3;
