import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Step3 = () => {
  const [bloodPressure, setBloodPressure] = useState('');
  const [bloodSugar, setBloodSugar] = useState('');

  const saveHealthData = () => {
    // Implement logic to save health data (blood pressure and sugar) to your backend or storage
    // For now, we'll just log the entered data
    console.log(`Blood Pressure: ${bloodPressure}, Blood Sugar: ${bloodSugar}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Previous Health Data</Text>

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
