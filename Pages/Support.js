import { Text, View, StyleSheet, ScrollView } from "react-native";
import React from 'react';

const Support = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Diabetes Support</Text>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>1. Support Groups</Text>
        <Text>
          Join local or online support groups where individuals with diabetes
          share experiences, tips, and encouragement. Connecting with others
          facing similar challenges can be empowering.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>2. Educational Resources</Text>
        <Text>
          Access reliable sources for diabetes education. Learn about
          self-management, treatment options, and the latest advancements in
          diabetes care. Knowledge is a powerful tool in managing diabetes.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>3. Counseling Services</Text>
        <Text>
          Consider seeking professional counseling to address the emotional
          aspects of living with diabetes. Mental health is an essential part
          of overall well-being.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>4. Lifestyle Coaching</Text>
        <Text>
          Work with a lifestyle coach to develop personalized strategies for
          maintaining a healthy lifestyle. This includes guidance on nutrition,
          exercise, and stress management.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>5. Online Forums</Text>
        <Text>
          Explore reputable online forums where individuals share insights,
          ask questions, and receive support. However, always verify the
          reliability of information.
        </Text>
      </View>

      {/* Add more sections as needed */}

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  section: {
    marginBottom: 16,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default Support;
