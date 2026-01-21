import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const ROT13Screen = () => {
  const navigation = useNavigation<any>();

  const [inputLetter, setInputLetter] = useState("");
  const [outputLetter, setOutputLetter] = useState("");
  const [inputLetter2, setInputLetter2] = useState("");
  const [outputLetter2, setOutputLetter2] = useState("");

  const letterMap: { [key: string]: string } = {
    a: "n",
    b: "o",
    c: "p",
    d: "q",
    e: "r",
    f: "s",
    g: "t",
    h: "u",
    i: "v",
    j: "w",
    k: "x",
    l: "y",
    m: "z",
    n: "a",
    o: "b",
    p: "c",
    q: "d",
    r: "e",
    s: "f",
    t: "g",
    u: "h",
    v: "i",
    w: "j",
    x: "k",
    y: "l",
    z: "m",
  };

  const letterMap2: {[key: string]: string} = {
    n: "a",
    o: "b",
    p: "c",
    q: "d",
    r: "e",
    s: "f",
    t: "g",
    u: "h",
    v: "i",
    w: "j",
    x: "k",
    y: "l",
    z: "m",
    a: "n",
    b: "o",
    c: "p",
    d: "q",
    e: "r",
    f: "s",
    g: "t",
    h: "u",
    i: "v",
    j: "w",
    k: "x",
    l: "z",
    m: "z",
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
  };

  return (
  <ImageBackground
    source = {require("./assets/images/Background.jpg")}
    resizeMode="cover"
    style={styles.imageBackground}
  >
    <View style={styles.container}>
      <Text style={styles.title}>ROT13 translator</Text>
      <Text style={styles.subTitle}>Type in a word in plain:</Text>
      <TextInput
        placeholder={"Word"}
        value={inputLetter}
        onChangeText={handleChangeText}
        style={styles.placeHolder}
      />
      <Text style={styles.subTitle}> Output: </Text>
      <Text style={styles.outputText}>{outputLetter}</Text>
      <Text style={styles.subTitle}>Type in a word in ROT13:</Text>
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
          navigation.navigate("ROT13HistoryScreen")
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

export default ROT13Screen;
