import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const MorseCodeHistoryScreen = () => {
  const navigation = useNavigation<any>();
  return ( 
  <ImageBackground
    source = {require("./assets/images/Background.jpg")}
    resizeMode="cover"
    style={styles.imageBackground}
  >
    <View>
      <Text style={styles.title}>Info about Morse code</Text>
      <Text style={styles.subTitle}>History</Text>
      <Text style={styles.text}>Probably one of the most famous encoding languages was invented in the early 
      1830s by Samuel Morse. The code quickly gained popularity and was adopted as the standard for telegraphy 
      in the United States.The famous SOS distress signal (· · · - - - · · ·) became internationally recognized as a call for help.</Text>
      <Text style={styles.subTitle}>How it works</Text>
      <Text style={styles.text}>Each letter is presented with dots and dashes. For example, the letter "A" is 
      represented as "._".</Text>
      <Text style={styles.subTitle}>Trivia</Text>
      <Text style={styles.text}>Many amateur radio enthusiasts continue to practice Morse code as a hobby, 
      preserving this unique form of communication and celebrating its historical significance.</Text>
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
    margin: -7,
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
    fontSize: 28,
    fontColor: "black",
  },
  imageBackground: {
    flex:0,
    width: '100%',
    height: "100%",
  },
});

export default MorseCodeHistoryScreen;
