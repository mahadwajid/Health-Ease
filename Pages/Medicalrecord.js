import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MedicalRecord = () => {
  const navigation = useNavigation();

  const handlePrescriptionNavigation = () => {
    navigation.navigate('Eprescription');
  };

  const handleTestNavigation = () => {
    navigation.navigate('Test');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePrescriptionNavigation} style={styles.item}>
        <Text style={styles.itemText}>Prescription</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleTestNavigation} style={styles.item}>
        <Text style={styles.itemText}>Test</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    width: '80%',
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    alignItems: 'center',
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MedicalRecord;
