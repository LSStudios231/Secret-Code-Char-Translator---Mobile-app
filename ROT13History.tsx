import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const ROT13HistoryScreen = () => {
  const navigation = useNavigation<any>();

  return ( 
  <ImageBackground
    source = {require("./assets/images/Background.jpg")}
    resizeMode="cover"
    style={styles.imageBackground}
  >
    <View>
      <Text style={styles.title}>Info about ROT13</Text>
      <Text style={styles.subTitle}>History</Text>
      <Text style={styles.text}>ROT13 is a more complex version of the Caesar Cipher and was developed in early 
      1980s. It was used to mask spoilers, punchlines of jokes or other content because of it's simplicity.</Text>
      <Text style={styles.subTitle}>How it works</Text>
      <Text style={styles.text}>Each letter is replaced by the letter 13 positions after it in the alphabet. For 
      example, "A" transforms to "N".</Text>
      <Text style = {styles.subTitle}>Trivia</Text>
      <Text style = {styles.text}>ROT13 has become a part of "nerdy" pop culture and is often referenced in geeky communities.</Text>
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
  sectionContainer: {
    paddingHorizontal: 24,
  },
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
    fontSize: 20,
    fontColor: "black",
  },
  imageBackground: {
    flex:0,
    width: '100%',
    height: "100%",
  },
});

export default ROT13HistoryScreen;
