import React, { useState, useContext } from 'react';
import { View, StyleSheet, ImageBackground, ScrollView, } from 'react-native';
import { Provider as PaperProvider, Button, TextInput, Text } from 'react-native-paper';
import { collection, query, where, getDocs } from 'firebase/firestore';
import db from '../firebaseconfig'; 
import { AuthContext } from '../AuthContext';


const Login = ({ navigation })  => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const auth = useContext(AuthContext);
  const Localimage=require("../Images/Imag1.png");

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
          auth.login(userData); 

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
    <ImageBackground
      source={Localimage}
      style={styles.backgroundImage}
    >
      <PaperProvider>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.centeredView}>
            <View style={styles.inputContainer}>
              <Text style={styles.loginText}>Login</Text>
              <TextInput
                label={'Email'}
                mode={'outlined'}
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={styles.input}
              />
              <TextInput
                label={'Enter Password'}
                mode={'outlined'}
                style={[styles.input, { marginBottom: 30 }]}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
              {errorMessage ? (
                <Text style={styles.errorText}>{errorMessage}</Text>
              ) : null}
              <Button
                icon=""
                mode="contained"
                onPress={handleLogin}
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

export default Login;