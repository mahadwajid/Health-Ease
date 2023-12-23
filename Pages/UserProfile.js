import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AuthContext } from '../AuthContext'; // Import your AuthContext or user data context

const UserProfile = () => {
  const auth = useContext(AuthContext); 
  const { user } = auth;

  return (
    <View style={styles.container}>
      {user ? (
        <>
          <Text style={styles.title}>User Profile</Text>
          <View style={styles.profileInfo}>
            <Text>Name: {user.name}</Text>
            <Text>Email: {user.email}</Text>
           
          </View>
        </>
      ) : (
        <Text>Loading user profile...</Text>
      )}
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
  profileInfo: {
    padding: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
  },
});

export default UserProfile;
