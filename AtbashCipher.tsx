import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const AtbashCipherScreen = () => {
  const navigation = useNavigation<any>();

  const [inputLetter, setInputLetter] = useState("");
  const [outputLetter, setOutputLetter] = useState("");
  const [inputLetter2, setInputLetter2] = useState("");
  const [outputLetter2, setOutputLetter2] = useState("");

  const letterMap: { [key: string]: string } = {
    a: "z",
    b: "y",
    c: "x",
    d: "w",
    e: "v",
    f: "u",
    g: "t",
    h: "s",
    i: "r",
    j: "q",
    k: "p",
    l: "o",
    m: "n",
    n: "m",
    o: "l",
    p: "k",
    q: "j",
    r: "i",
    s: "h",
    t: "g",
    u: "f",
    v: "e",
    w: "d",
    x: "c",
    y: "b",
    z: "a",
  };

  const letterMap2: {[key: string]: string} = {
    x: "c",
    y: "b",
    z: "a",
    a: "z",
    b: "y",
    c: "x",
    d: "w",
    e: "v",
    f: "u",
    g: "t",
    h: "s",
    i: "r",
    j: "q",
    k: "p",
    l: "o",
    m: "n",
    n: "m",
    o: "l",
    p: "k",
    q: "j",
    r: "i",
    s: "h",
    t: "g",
    u: "f",
    v: "e",
    w: "d",
  };

  const handleChangeText = (text: string) => {
    setInputLetter(text.toLowerCase()); 
    
    const translatedLetters = text
      .toLowerCase()
      .split("")
      .map((letter) => letterMap[letter] || letter );
     setOutputLetter(translatedLetters.join(""));
  };

  const handleChangeText2 = (text2: string) => {
    setInputLetter2(text2.toLowerCase());

    const translatedLetters2 = text2
      .toLowerCase()
      .split("")
      .map((letter2) => letterMap2[letter2] || letter2);
    setOutputLetter2(translatedLetters2.join(""));
  }

  return (
  <ImageBackground
    source = {require("./assets/images/Background.jpg")}
    resizeMode="cover"
    style={styles.imageBackground}
  >
    <View style={styles.container}>
      <Text style={styles.title}>Atbash cipher translator</Text>
      <Text style={styles.subTitle}>Type in a word in plain:</Text>
      <TextInput
        placeholder={"Word"}
        value={inputLetter}
        onChangeText={handleChangeText}
        style={styles.placeHolder}
      />
      <Text style={styles.subTitle}> Output: </Text>
      <Text style={styles.outputText}>{outputLetter}</Text>
      <Text style={styles.subTitle}>Type in a word in Atbash cipher:</Text>
      <TextInput
        placeholder={"Word"}
        value={inputLetter2}
        onChangeText={handleChangeText2}
        style={styles.placeHolder}
      />
      <Text style={styles.subTitle}> Output: </Text>
      <Text style={styles.outputText}>{outputLetter2}</Text>
      <TouchableOpacity 
        style={styles.touchableOpacity} 
        onPress={() => {
          navigation.navigate("AtbashCipherHistoryScreen")
        }}
      >
        <Text style={styles.touchableOpacityText}>Info</Text>
      </TouchableOpacity>
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
  container: {
    alignItems:"center",
  },
  title:{
    justifyContent: "center",
    fontSize:30,
    alignItems: "center",
    color: "black",
    margin: 5,
  },
  subTitle:{
    color: "black",
    fontSize: 20,
    margin: -10,
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
    color: "black",
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
    margin:-35,
  },
  imageBackground: {
    flex:0,
    width: '100%',
    height: "100%",
  },
});

export default AtbashCipherScreen;