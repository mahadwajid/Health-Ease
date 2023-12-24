import React, { useState, useEffect , useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { collection, getDocs , where, query  } from 'firebase/firestore';
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
    <View style={styles.container}>
      <Text style={styles.heading}>E-Prescription</Text>
      {prescriptionData ? (
        prescriptionData.map(prescription => (
          <View key={prescription.id}>
            <Text style={styles.text}>Patient Name: {prescription.patientName}</Text>
            <Text style={styles.text}>Sex: {prescription.patientSex}</Text>
            <Text style={styles.text}>Address: {prescription.patientAddress}</Text>
            <Text style={styles.text}>Prescription: {prescription.prescription}</Text>
            <Text style={styles.text}>Date/Time: {prescription.dateTime}</Text>
            {/* Other fields */}
          </View>
        ))
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
