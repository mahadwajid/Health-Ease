import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { collection, getDocs, where, query } from 'firebase/firestore';
import db from '../firebaseconfig'; 
import { AuthContext } from '../AuthContext';

const Test = () => {
  const [healthData, setHealthData] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchHealthData = async () => {
      try {
        if (user) {
          const healthDataRef = collection(db, 'HealthData');
          const q = query(healthDataRef,  where('name', '==', user.firstName));

          const snapshot = await getDocs(q);
          const data = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setHealthData(data);
        }
      } catch (error) {
        console.error('Error fetching health data:', error);
      }
    };

    fetchHealthData();
  }, [user]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Health Data</Text>
      {healthData.length > 0 ? (
        healthData.map((data) => (
          <View key={data.id} style={styles.dataItem}>
             <Text>Patient Name: {data.name}</Text>
            <Text>Blood Pressure: {data.bloodPressure}</Text>
            <Text>Blood Sugar: {data.bloodSugar}</Text>
          </View>
        ))
      ) : (
        <Text>No health data available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  dataItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
});

export default Test;
