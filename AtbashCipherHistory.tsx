import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AtbashCipherHistoryScreen = () => {
  const navigation = useNavigation<any>();
  return ( 
  <ImageBackground
    source = {require("./assets/images/Background.jpg")}
    resizeMode="cover"
    style={styles.imageBackground}
  >
    <View>
      <Text style={styles.title}>Info about Atbash Cipher</Text>
      <Text style={styles.subTitle}>History</Text>
      <Text style={styles.text}>The Atbash Cipher is known as the origin of cryptography. The name "Atbash" comes from
      the first and last letters of the alphabet, "Aleph" and "Tav". It was used in several ancient civilizations, 
      including Hebrew, Greek and Latin texts.
      </Text>
      <Text style={styles.subTitle}>How it works</Text>
      <Text style={styles.text}>Each letter has a counterpart from the opposite side of the alphabet. For example, 
      counterpart for letter "A" is "Z".</Text>
      <Text style={styles.subTitle}>Trivia</Text>
      <Text style={styles.text}>One of the most well-known examples of the Atbash Cipher can be found in the Hebrew Bible
      , particularly in the Book of Jeremiah. In this passage, the names of various kingdoms are encrypted using the Atbash Cipher</Text>
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
    fontSize: 20,
    fontColor: "black",
  },
  imageBackground: {
    flex:0,
    width: '100%',
    height: "100%",
  },
});

export default AtbashCipherHistoryScreen;
