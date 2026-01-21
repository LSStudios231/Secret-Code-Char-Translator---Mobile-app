import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const NumericSubstitutionCipherHistoryScreen = () => {
  const navigation = useNavigation<any>();

  return ( 
  <ImageBackground
    source = {require("./assets/images/Background.jpg")}
    resizeMode="cover"
    style={styles.imageBackground}
  >
    <View >
      <Text style={styles.title}>Info about Numeric substitution cipher</Text>
      <Text style={styles.subTitle}>History</Text>
      <Text style={styles.text}>Numerical substitution ciphers have been used by ancient civilizations to encode 
      secret messages. For example, in ancient Greece, the Greek philosopher and 
      mathematician Pythagoras was known to have used a numerical substitution cipher known as the Pythagorean cipher.</Text>
      <Text style={styles.subTitle}>How it works</Text>
      <Text style={styles.text}>Each letter is replaced with a corresponding number. For example, the letter "A"
      is replaced by number "1".</Text>
      <Text style={styles.subTitle}>Trivia</Text>
      <Text style = {styles.text}>The Numeric Substitution Cipher can also be used in steganography, where secret messages are hidden 
        within seemingly innocent-looking numerical data or images.</Text>
        <TouchableOpacity
       onPress={() => {
        navigation.navigate("MenuScreen")
       }}
       style={styles.backButton}
      >
        <Text style={styles.touchableOpacityText}>Back</Text>
      </TouchableOpacity>
    </View>
  </ImageBackground>
  );
};
const styles = StyleSheet.create({
  title:{
    justifyContent: "center",
    fontSize:30,
    alignItems: "center",
    padding: 30,
    color: "black",
    margin: 0,
  },
  subTitle:{
    color: "black",
    fontSize: 20,
    margin: 5,
  },
  placeHolder:{
    backgroundColor: "white",
    borderRadius: 15,
    borderWidth: 5,
    borderColor: "#258183",
    fontFamily: "Calibri",
    fontSize:30,
    padding: 10,
    margin: 20,
  },
  outputText:{
    backgroundColor: "white",
    borderRadius: 15,
    borderWidth: 5,
    borderColor: "#258183",
    fontFamily: "Calibri",
    fontSize: 30,
    padding: 10,
    margin: 20,
    color: "black",
    alignItems: "center",
  },
  touchableOpacity: {
    backgroundColor: "#54FBFF", 
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 19,
    alignItems: "center",
    justifyContent: "center",
    margin: 40,
    borderWidth: 8,
    borderColor: "#258183",
  },
  text: {
    fontSize: 16,
    color: "black",
    margin: 5,
  },
  backButton: {
    backgroundColor: "#54FBFF", 
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 19,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#258183",
    borderWidth: 8,
    margin:8,
  },
  touchableOpacityText: {
    fontSize: 20,
    fontColor: "black",
  },
  imageBackground: {
    flex:0,
    width: '100%',
    height: "100%",
  },
});

export default NumericSubstitutionCipherHistoryScreen;
