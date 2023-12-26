// Import necessary components from React Native
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';


// Define a generic Card component for articles
const Card = ({ title, content, imageSource }) => {
  return (
    <View style={styles.card}>
      <Image source={imageSource} style={styles.cardImage} resizeMode="cover" />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{title}</Text>
        <Text>{content}</Text>
      </View>
    </View>
  );
};

// Define individual articles with sample images
const Article1 = () => {
    const title = 'Understanding Diabetes';
    const content = 'Diabetes is a chronic condition that affects the way your body regulates blood sugar. Learn about its types, symptoms, and management.';
    const imageSource = require('../Images/3.png');
    return <Card title={title} content={content} imageSource={imageSource} />;
};

const Article2 = () => {
  const title = 'Balanced Diet for Diabetics';
  const content = 'Discover the importance of a balanced diet for individuals with diabetes. Tips on meal planning and making healthier food choices.';
  const imageSource = require('../Images/2.png');
  return <Card title={title} content={content} imageSource={imageSource} />;
};

const Article3 = () => {
  const title = 'Exercise and Diabetes';
  const content = 'Explore the benefits of regular exercise in managing diabetes. Find suitable exercises and create a fitness routine for better health.';
  const imageSource = require('../Images/3.png');
  return <Card title={title} content={content} imageSource={imageSource} />;
};

const Article4 = () => {
  const title = 'Monitoring Blood Sugar Levels';
  const content = 'Learn about the importance of monitoring blood sugar levels and the various methods available to keep track of your glucose levels.';
  const imageSource = require('../Images/2.png');
  return <Card title={title} content={content} imageSource={imageSource} />;
};

const Article5 = () => {
  const title = 'Diabetes and Mental Health';
  const content = 'Understand the connection between diabetes and mental health. Tips for managing stress and maintaining overall well-being.';
  const imageSource = require('../Images/3.png');
  return <Card title={title} content={content} imageSource={imageSource} />;
};

// Create a component that displays a list of articles in a ScrollView
const Article = () => {
  return (
    <ScrollView contentContainerStyle={styles.articlesContainer}>
      <Article1 />
      <Article2 />
      <Article3 />
      <Article4 />
      <Article5 />
    </ScrollView>
  );
};

// Styles for the components
const styles = StyleSheet.create({
  articlesContainer: {
    padding: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
  },
  cardImage: {
    width: 100,
    height: '100%',
  },
  cardContent: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default Article;
