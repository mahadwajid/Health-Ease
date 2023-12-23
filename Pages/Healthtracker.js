import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const cardData = [
  { name: 'BMI' },
  { name: 'BMI' },
  { name: 'BMI' },
];

const Healthtracker = () => {
  const navigation = useNavigation();

  const navigateToBMI = () => {
    navigation.navigate('BMI');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {cardData.map((card, index) => (
        <TouchableOpacity key={index} style={styles.card} onPress={navigateToBMI}>
          {/* Assuming you want the same image for all cards */}
          <Image source={card.image}  style={styles.cardImage} />
          <Text style={styles.cardText}>{card.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center',
  },
  card: {
    width: '80%',
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: '70%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'cover',
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default Healthtracker;
