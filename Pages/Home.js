import React from 'react';
import { View, ImageBackground,TouchableOpacity, StyleSheet,  Dimensions } from 'react-native';
import { Provider as PaperProvider, Button } from 'react-native-paper';
const Home = ({ navigation }) => {

  const screenHeight = Dimensions.get('window').height;

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

  const handlePress5 = () => {
    navigation.navigate('Booking');
  };

  const Localimage=require("../Images/Banner2.png");
  const Localimage1=require("../Images/E-pree.png");
  const Localimage2=require("../Images/Book(3).png");
  const Localimage3=require("../Images/Book(4).png");
  const Localimage4=require("../Images/Support.png");
  const Localimage5=require("../Images/Banner1.png");



  return (
    
    <View style={[styles.con, { height: screenHeight }]} >
     {/* /////UperCard////////////////   */}
     <View style={styles.card}>
     <TouchableOpacity onPress={handlePress5}>
      <ImageBackground
        source={Localimage}
        style={styles.cardImage}
        imageStyle={styles.imageStyle}
      >
      </ImageBackground>
      </TouchableOpacity>
    </View>
    {/* //////////////////////// */}

    {/* //////////////////2nd Card/////////////// */}
    <View style={styles.container}> 
    <TouchableOpacity style={styles.card1} onPress={handlePress}>
      <ImageBackground
        source={Localimage1}
        style={styles.cardImage}
        imageStyle={styles.imageStyle}
      >
      </ImageBackground>
    </TouchableOpacity>

    <TouchableOpacity style={styles.card1} onPress={handlePress1}>
      <ImageBackground
         source={Localimage2}
        style={styles.cardImage}
        imageStyle={styles.imageStyle}
      >
      </ImageBackground>
    </TouchableOpacity>

    </View>


{/* /////////////////3rd Card///////////// */}
    <View style={styles.container}> 

    <TouchableOpacity style={styles.card3} onPress={handlePress3}>
      <ImageBackground
         source={Localimage4}
        style={styles.cardImage1}
        imageStyle={styles.imageStyle}
      >
  
      </ImageBackground>
    </TouchableOpacity>

    <TouchableOpacity style={styles.card3} onPress={handlePress2}>
      <ImageBackground
         source={Localimage3}
         style={styles.cardImage}
         imageStyle={styles.imageStyle}
      >

      </ImageBackground>
    </TouchableOpacity>

  

</View>

<TouchableOpacity style={styles.card} onPress={handlePress4}>
      <ImageBackground
        source={Localimage5}
        style={styles.cardImage}
        imageStyle={styles.imageStyle}
      >
      </ImageBackground>
    </TouchableOpacity>

    
    



    </View>
  );
};

const styles = StyleSheet.create({

  con:{
    backgroundColor: '#f5f4f1',

  },


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
    backgroundColor:'#E9E4ED',
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
    backgroundColor:'white',
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
    backgroundColor: '#E9E4ED',
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
    overflow: 'hidden',
  },
  cardImage1: {
    marginLeft: -10,
    width: '105%',
    height: 130,
    borderRadius: 8,
    overflow: 'hidden', 
  },
  cardImage2: {
    marginLeft: -7,
    width: '105%',
    height: 130,
    borderRadius: 8,
    overflow: 'hidden', 
  },
  imageStyle: {
    resizeMode: 'cover',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
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
    bottom: 10,
    left: 120,
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
