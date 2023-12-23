import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { collection, query, where, getDocs } from 'firebase/firestore';
import db from '../firebaseconfig'; // Import the Firestore instance
import { AuthContext } from '../AuthContext';


const Login = ({ navigation })  => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const auth = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      const usersRef = collection(db, 'Signup');
      const q = query(usersRef, where('email', '==', email));
      const querySnapshot = await getDocs(q);

      let userFound = false;

      querySnapshot.forEach((doc) => {
        const userData = doc.data();
        if (userData.password === password) {
          // Successful login
          userFound = true;
          setErrorMessage('');
          console.log('Login successful for user:', userData.email);
          auth.login(userData); // Update user authentication state

          // Navigate based on email
          if (userData.email === 'admin1@email.com') {
            navigation.navigate('AdminHome');
          } else {
            navigation.navigate('Home');
          }
        }
      });

      if (!userFound) {
        setErrorMessage('Invalid email or password');
      }
    } catch (error) {
      console.error('Error logging in: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
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
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});

export default Login;
