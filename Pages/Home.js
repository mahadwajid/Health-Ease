import React from 'react';
import { View, Text, ImageBackground,TouchableOpacity, StyleSheet, Button } from 'react-native';
const Home = ({ navigation }) => {

  const handlePress = () => {
    navigation.navigate('Eprescription');
  };

  const handlePress1 = () => {
    navigation.navigate('Medicalrecord');
  };

  const handlePress2 = () => {
    navigation.navigate('Healthtracker');
  };
  
  const handlePress3 = () => {
    navigation.navigate('Support');
  };

  const handlePress4 = () => {
    navigation.navigate('Subscription');
  };

  const openSidetab = () => {
    navigation.navigate('SidetabScreen');
  };

  const Localimage=require("../Images/Health1.png");
  const Localimage1=require("../Images/Pree.png");

  return (
    
    <View>
     {/* /////UperCard////////////////   */}
     <View style={styles.card}>
      <ImageBackground
        source={Localimage}
        style={styles.cardImage}
        imageStyle={styles.imageStyle}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.cardTitle}>Get The Best Medical Service</Text>
        </View>
        <TouchableOpacity style={styles.button}>
        <Button title="Book Now" onPress={() => navigation.navigate('Booking')} />
        </TouchableOpacity>
      </ImageBackground>
    </View>
    {/* //////////////////////// */}

    {/* //////////////////2nd Card/////////////// */}
    <View style={styles.container}> 
    <TouchableOpacity style={styles.card1} onPress={handlePress}>
      <ImageBackground
        source={{
          uri:
            'https://t3.ftcdn.net/jpg/02/14/06/58/240_F_214065892_X0Wy5KxKVI7XmYdmr5QaGuYuXt7MLr4j.jpg',
        }}
        style={styles.cardImage}
        imageStyle={styles.imageStyle}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.cardTitle}>E-Prescription</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>

    <TouchableOpacity style={styles.card1} onPress={handlePress1}>
      <ImageBackground
        source={{
          uri:
            'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1701129600&semt=ais',
        }}
        style={styles.cardImage}
        imageStyle={styles.imageStyle}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.cardTitle}>Medical Record</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>

    </View>


{/* /////////////////3rd Card///////////// */}
    <View style={styles.container}> 

    <TouchableOpacity style={styles.card3} onPress={handlePress3}>
      <ImageBackground
        source={{
          uri:
            'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1701129600&semt=ais',
        }}
        style={styles.cardImage}
        imageStyle={styles.imageStyle}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.cardTitle}>24/7 Support</Text>
        
        </View>
      </ImageBackground>
    </TouchableOpacity>

    <TouchableOpacity style={styles.card3} onPress={handlePress2}>
      <ImageBackground
        source={{
          uri:
            'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1701129600&semt=ais',
        }}
        style={styles.cardImage}
        imageStyle={styles.imageStyle}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.cardTitle}>Health Tracker</Text>
        </View>

      </ImageBackground>
    </TouchableOpacity>

  

</View>

<TouchableOpacity style={styles.card} onPress={handlePress4}>
      <ImageBackground
        source={{
          uri:
            'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1701129600&semt=ais',
        }}
        style={styles.cardImage}
        imageStyle={styles.imageStyle}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.cardTitle}>Subscriptions Plans</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>

    



    </View>
  );
};

const styles = StyleSheet.create({

contentContainer: {
  padding: 20,
  alignItems: 'flex-start',
},
  
     container: {
        flexDirection: 'row', // Align cards in a row
        justifyContent: 'space-between', // Space between the cards
        marginBottom: '-2%',
      },

 card3: {
    width:'45%',
    backgroundColor: 'white',
    padding: 0,
    margin: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
 card1: {
    width: '45%',
    backgroundColor: 'white',
    padding: 0,
    margin: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  card: {
    backgroundColor: 'white',
    padding: 0,
    margin: 10,
    borderRadius: 8,
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
    height: 130,
    borderRadius: 8,
    overflow: 'hidden', // Ensure text doesn't overflow the image boundary
  },
  imageStyle: {
    resizeMode: 'cover',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Overlay background color
    padding: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  button: {
    position: 'absolute',
    bottom: 20,
    left: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Home;
