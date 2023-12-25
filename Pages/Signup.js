import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, ScrollView, } from 'react-native';
import { Provider as PaperProvider, Button, TextInput, Text } from 'react-native-paper';
import { collection , addDoc } from 'firebase/firestore';
import  db  from '../firebaseconfig.js'; 

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpass, setcpass] = useState('');
  const Localimage=require("../Images/Imag1.png");

  const handleSignup = async () => {
    try {
      const personsRef = collection(db, 'Signup');
      await addDoc(personsRef, {
        firstName,
        lastName,
        email,
        password,
        cpass,
      });
      
      console.log('User added to Firestore!');
      Alert.alert('Signup Successful', 'User data stored successfully!');
    } catch (error) {
      console.error('Error adding user: ', error);
    }
  };

  return (
    <ImageBackground
      source={Localimage}
      style={styles.backgroundImage}
    >
      <PaperProvider>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.centeredView}>
            <View style={styles.inputContainer}>
              <Text style={styles.loginText}>Signup</Text>
              <TextInput
                label={'FirstName'}
                mode={'outlined'}
                value={Text}
                onChangeText={(text) => setFirstName(text)}
                style={styles.input}
              />
              <TextInput
                label={'LastName'}
                mode={'outlined'}
                style={[styles.input, { marginBottom: 30 }]}
                value={Text}
                onChangeText={(text) => setLastName(text)}
              />
             
             <TextInput
                label={'Enter you Email'}
                mode={'outlined'}
                style={[styles.input, { marginBottom: 30 }]}
                value={email}
                onChangeText={(text) => setEmail(text)}
              />

              <TextInput
                label={'Password'}
                mode={'outlined'}
                style={[styles.input, { marginBottom: 30 }]}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />  

               <TextInput
                label={'Confirm Password'}
                mode={'outlined'}
                style={[styles.input, { marginBottom: 30 }]}
                value={password}
                onChangeText={(text) => setcpass(text)}
              />    
             
              <Button
                icon=""
                mode="contained"
                onPress={handleSignup}
                style={styles.button}
              >
                Log in
              </Button>
            </View>
          </View>
        </ScrollView>
      </PaperProvider>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    fontSize: 24,
    marginBottom: 35,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: 16,
    paddingVertical: 10,

  },
  input: {
    marginBottom: 16,
  },
  button: {
    width: '50%',
    marginTop: 10,
    alignSelf: 'center',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    position: 'absolute',
    zIndex: -1, 
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default Signup;
