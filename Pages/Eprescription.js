import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Eprescription = () => {
  const [prescriptionData, setPrescriptionData] = useState(null);

  useEffect(() => {
    // Simulating an API call to fetch prescription data
    const fetchPrescriptionData = async () => {
      try {
        // Replace this with your actual API endpoint or database fetch logic
        const response = await fetch('YOUR_API_ENDPOINT');
        const data = await response.json();
        setPrescriptionData(data); // Set fetched data to state
      } catch (error) {
        console.error('Error fetching prescription data:', error);
      }
    };

    fetchPrescriptionData();
  }, []); // Run this effect only once on component mount

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>E-Prescription</Text>
      {prescriptionData ? (
        <>
          <Text style={styles.text}>Doctor: {prescriptionData.doctorName}</Text>
          <Text style={styles.text}>Medication: {prescriptionData.medication}</Text>
          <Text style={styles.text}>Instructions: {prescriptionData.instructions}</Text>
          {/* Display other prescription details as needed */}
        </>
      ) : (
        <Text>Loading prescription...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default Eprescription;
