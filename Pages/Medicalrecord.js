import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Medicalrecord = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        I am Medical
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Medicalrecord;
