import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseconfig';

const Booking = () => {
  const [randomNumber, setRandomNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [address, setAddress] = useState('');

  const generateRandomNumber = () => {
    const min = 1000;
    const max = 9999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleSubmit = async () => {
    const newRandomNumber = generateRandomNumber();
    setRandomNumber(newRandomNumber.toString());

    try {
      const docRef = await addDoc(collection(db, 'bookings'), {
        firstName: firstName,
        lastName: lastName,
        email: email,
        contactNo: contactNo,
        address: address,
        bookingNumber: newRandomNumber.toString(),
      });

      console.log('Document written with ID: ', docRef.id);
    } catch (error) {
      console.error('Error adding document: ', error);
    }

    // Other actions related to form submission
    console.log('Data submitted:', {
      firstName,
      lastName,
      email,
      contactNo,
      address,
      bookingNumber: newRandomNumber.toString(),
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Clinic Booking Form</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          onChangeText={text => setFirstName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          onChangeText={text => setLastName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Contact Number"
          onChangeText={text => setContactNo(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Address"
          onChangeText={text => setAddress(text)}
        />
        <Button title="Submit" onPress={handleSubmit} />
        {randomNumber ? (
          <View style={styles.generatedNumberContainer}>
            <Text>Your Booking Number:</Text>
            <Text style={styles.randomNumber}>{randomNumber}</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  form: {
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  randomNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  generatedNumberContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default Booking;
