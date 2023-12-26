import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const cardData = [
  { name: 'Step1', image: require("../Images/Book(6).png") },
  { name: 'Step2', image: require("../Images/Book(8).png")  },
  { name: 'Step3',image: require("../Images/bloodpressure.jpg")  },
];

const Healthtracker = () => {
  const navigation = useNavigation();

  const navigateToBMI = (cardName) => {
    navigation.navigate(cardName);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {cardData.map((card, index) => (
        <TouchableOpacity key={index} style={styles.card} onPress={() => navigateToBMI(card.name)}>
          <Image source={card.image}  style={styles.cardImage} />
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
    width: 300,
    height: 200,
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
