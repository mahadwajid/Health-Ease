import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';

const cardData = [
//   { name: 'Card 1', image: require('./path/to/image1.png') },
//   { name: 'Card 2', image: require('./path/to/image2.png') },
//   { name: 'Card 3', image: require('./path/to/image3.png') },
//   { name: 'Card 4', image: require('./path/to/image4.png') },
{name: 'BMI'},
];

const Healthtracker = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {cardData.map((card, index) => (
        <View key={index} style={styles.card}>
          <Image source={card.image} style={styles.cardImage} />
          <Text style={styles.cardText}>{card.name}</Text>
        </View>
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
