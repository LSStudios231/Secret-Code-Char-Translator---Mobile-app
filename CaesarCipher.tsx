import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CaesarCipherScreen = () => {
  const navigation = useNavigation<any>();

  const [inputLetter, setInputLetter] = useState("");
  const [outputLetter, setOutputLetter] = useState("");
  const [inputLetter2, setInputLetter2] = useState("");
  const [outputLetter2, setOutputLetter2] = useState("");

  const letterMap: { [key: string]: string } = {
    a: "x",
    b: "y",
    c: "z",
    d: "a",
    e: "b",
    f: "c",
    g: "d",
    h: "e",
    i: "f",
    j: "g",
    k: "h",
    l: "i",
    m: "j",
    n: "k",
    o: "l",
    p: "m",
    q: "n",
    r: "o",
    s: "p",
    t: "q",
    u: "r",
    v: "s",
    w: "t",
    x: "u",
    y: "v",
    z: "w",
  };

  const letterMap2: {[key: string]: string} = {
    x: "a",
    y: "b",
    z: "c",
    a: "d",
    b: "e",
    c: "f",
    d: "g",
    e: "h",
    f: "i",
    g: "j",
    h: "k",
    i: "l",
    j: "m",
    k: "n",
    l: "o",
    m: "p",
    n: "q",
    o: "r",
    p: "s",
    q: "t",
    r: "u",
    s: "v",
    t: "w",
    u: "x",
    v: "y",
    w: "z",
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
  <SafeAreaView>
    <View style={styles.container}>
      <Text style={styles.title}>Caesar cipher translator</Text>
      <Text style={styles.subTitle}>Type in a word in plain:</Text>
      <TextInput
        placeholder={"Word"}
        value={inputLetter}
        onChangeText={handleChangeText}
        style={styles.placeHolder}
      />
      <Text style={styles.subTitle}> Output: </Text>
      <Text style={styles.outputText}>{outputLetter}</Text>
      <Text style={styles.subTitle}>Type in a word in caesar cipher:</Text>
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
          navigation.navigate("CaesarCipherHistoryScreen")
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
  </SafeAreaView>
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
    color: "black",
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

export default CaesarCipherScreen;
