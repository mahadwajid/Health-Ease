import React, { useState } from "react";

import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";


const Step2 = () => {

    const [weight, setWeight] = useState("");

    const [age, setAge] = useState("");

    const [healthStatus, setHealthStatus] = useState(null);



    const checkHealthStatus = () => {

        if (weight && age) {

            const weightValue = parseFloat(weight);

            const ageValue = parseInt(age);



            // Add your own criteria for health status 

            // For example, if weight is less than 50 and age is less than 30, consider as fit 

            const isFit = weightValue < 50 && ageValue < 30;



            if (isFit) {

                setHealthStatus("You are medically fit!");

            } else {

                setHealthStatus("You may need to consult a healthcare professional.");

            }

        }

    };



    return (

        <View style={styles.container}>

            <Text style={styles.title}>Health Status Checker</Text>



            <TextInput

                style={styles.input}

                placeholder="Enter weight (kg)"

                keyboardType="numeric"

                value={weight}

                onChangeText={(text) => setWeight(text)}

            />



            <TextInput

                style={styles.input}

                placeholder="Enter age"

                keyboardType="numeric"

                value={age}

                onChangeText={(text) => setAge(text)}

            />



            <TouchableOpacity style={styles.button} onPress={checkHealthStatus}>

                <Text style={styles.buttonText}>Check Health Status</Text>

            </TouchableOpacity>



            {healthStatus !== null && (

                <Text style={styles.result}>{healthStatus}</Text>

            )}

        </View>

    );

};



const styles = StyleSheet.create({

    container: {

        flex: 1,

        justifyContent: "center",

        alignItems: "center",

        padding: 16,

        backgroundColor: "#f5f5f5",

    },

    title: {

        fontSize: 24,

        fontWeight: "bold",

        marginBottom: 16,

        color: "#333",

    },

    input: {

        height: 40,

        borderColor: "#ccc",

        borderWidth: 1,

        marginBottom: 12,

        padding: 10,

        borderRadius: 8,

        backgroundColor: "#fff",

        width: "100%",

    },

    button: {

        backgroundColor: "#3498db",

        paddingVertical: 12,

        borderRadius: 8,

        width: "100%",

    },

    buttonText: {

        color: "#fff",

        textAlign: "center",

        fontSize: 16,

        fontWeight: "bold",

    },

    result: {

        fontSize: 18,

        marginTop: 16,

        color: "#333",

        textAlign: "center",

    },

});



export default Step2;



