import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet , Alert } from 'react-native';
import { collection , addDoc } from 'firebase/firestore';
import db from '../../firebaseconfig'; // Import the Firestore instance

const AdminEprescription = () => {
  const [patientName, setPatientName] = useState('');
  const [patientSex, setPatientSex] = useState('');
  const [patientAddress, setPatientAddress] = useState('');
  const [prescription, setPrescription] = useState('');
  const [dateTime, setDateTime] = useState('');

  useEffect(() => {
    // Function to get the current date and time in the desired format
    const getCurrentDateTime = () => {
      const currentDate = new Date().toISOString().slice(0, 16).replace('T', ' ');
      setDateTime(currentDate);
    };

    // Call the function when the component mounts
    getCurrentDateTime();
  }, []);

  const handleAdddoc = async () => {
    try {
      const personsRef = collection(db, 'Eprescription');
      await addDoc(personsRef, {
        patientName,
        patientSex,
        patientAddress,
        prescription,
        dateTime,
      });
      
      console.log('User added to Firestore!');
      Alert.alert('Signup Successful', 'User data stored successfully!');
    } catch (error) {
      console.error('Error adding user: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Patient Name</Text>
      <TextInput
        style={styles.input}
        value={patientName}
        onChangeText={setPatientName}
      />

      <Text style={styles.label}>Patient Sex</Text>
      <TextInput
        style={styles.input}
        value={patientSex}
        onChangeText={setPatientSex}
      />

      <Text style={styles.label}>Patient Address</Text>
      <TextInput
        style={styles.input}
        value={patientAddress}
        onChangeText={setPatientAddress}
        multiline
      />

      <Text style={styles.label}>Prescription</Text>
      <TextInput
        style={[styles.input, { height: 100 }]}
        value={prescription}
        onChangeText={setPrescription}
        multiline
      />

      <Text style={styles.label}>Date / Time</Text>
      <TextInput
        style={styles.input}
        value={dateTime}
        onChangeText={setDateTime}
        placeholder="YYYY-MM-DD HH:mm"
      />

      <Button title="Submit" onPress={handleAdddoc} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'center',
      padding: 20,
    },
    label: {
      fontSize: 16,
      marginBottom: 5,
      fontWeight: 'bold',
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
  });

export default AdminEprescription;
