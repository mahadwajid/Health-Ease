import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { collection, getDocs, where, query } from 'firebase/firestore';
import db from '../firebaseconfig';
import { AuthContext } from '../AuthContext';

const Eprescription = () => {
  const [prescriptionData, setPrescriptionData] = useState(null);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPrescriptionData = async () => {
      try {
        if (user) {
          const prescriptionRef = collection(db, 'Eprescription');
          const q = query(prescriptionRef, where('patientName', '==', user.firstName));
          const snapshot = await getDocs(q);
          const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setPrescriptionData(data);
        }
      } catch (error) {
        console.error('Error fetching prescription data:', error);
      }
    };

    fetchPrescriptionData();
  }, [user]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>E-Prescription</Text>
      {prescriptionData ? (
        prescriptionData.map(prescription => (
          <View key={prescription.id} style={styles.prescriptionContainer}>
            <Text style={styles.sectionHeading}>Patient Details</Text>
            <Text style={styles.text}>Name: {prescription.patientName}</Text>
            <Text style={styles.text}>Sex: {prescription.patientSex}</Text>
            <Text style={styles.text}>Address: {prescription.patientAddress}</Text>

            <Text style={styles.sectionHeading}>Prescription</Text>
            <Text style={styles.text}>Details: {prescription.prescription}</Text>
            <Text style={styles.text}>Date/Time: {prescription.dateTime}</Text>
            {/* Other fields */}
          </View>
        ))
      ) : (
        <Text>Loading prescription...</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  prescriptionContainer: {
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  sectionHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default Eprescription;
