import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const CaesarCipherHistoryScreen = () => {
  const navigation = useNavigation<any>();
  return ( 
  <ImageBackground
    source = {require("./assets/images/Background.jpg")}
    resizeMode="cover"
    style={styles.imageBackground}
  >
    <View>
      <Text style={styles.title}>Info about Caesar Cipher</Text>
      <Text style={styles.subTitle}>History</Text>
      <Text style={styles.text}>The Caesar Cipher is one of the oldest known ciphers. It was used by the Roman Emperor 
      Julius Caesar to send secret messages to his generals on the battlefield.
      </Text>
      <Text style={styles.subTitle}>How it works</Text>
      <Text style={styles.text}>Each decoded letter is shifted for 3 places on the left in the alphabet. For example,
      D decodes to A.</Text>
      <Text style={styles.subTitle}>Trivia</Text>
      <Text style={styles.text}>The Caesar cipher is a popular educational tool for students to introduce them to
      encryption algorithms.</Text>
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
    paddingVertical: -22,
    paddingHorizontal: -400,
    borderRadius: 19,
    alignItems: "center",
    justifyContent: "center",
    margin: -100,
    padding: 20,
    borderWidth: 8,
    borderColor: "#258183",
  },
  text: {
    fontSize: 16,
    color: "black",
    margin: 5,
  },
  touchableOpacityText: {
    fontSize: 20,
    fontColor: "black",
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
  imageBackground: {
    flex:0,
    width: '100%',
    height: "100%",
  },
});

export default CaesarCipherHistoryScreen;
