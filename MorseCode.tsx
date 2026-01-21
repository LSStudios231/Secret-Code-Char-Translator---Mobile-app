import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const MorseCodeScreen = () => {
  const navigation = useNavigation<any>();

  const [inputLetter, setInputLetter] = useState("");
  const [outputLetter, setOutputLetter] = useState("");
  const [inputLetter2, setInputLetter2] = useState("");
  const [outputLetter2, setOutputLetter2] = useState("");

  const letterMap: { [key: string]: string } = {
    a: " ._",
    b: " _...",
    c: " _._.",
    d: " _..",
    e: " .",
    f: " .._.",
    g: " _ _ .",
    h: " ....",
    i: " ..",
    j: " ._ _ _",
    k: " _._",
    l: " ._..",
    m: " _ _",
    n: " _.",
    o: " _ _ _",
    p: " ._ _.",
    q: " _ _._",
    r: " ._.",
    s: " ...",
    t: " _",
    u: " .._ _",
    v: " ..._ _",
    w: " ._ _",
    x: " _.._",
    y: " _._ _",
    z: " _ _..",
    1: " ._ _ _ _",
    2: " .._ _ _",
    3: " ... _ _",
    4: " ...._",
    5: " .....",
    6: " _....",
    7: " _ _...",
    8: " _ _ _..",
    9: " _ _ _ _.",
    0: " _ _ _ _ _"
  };

  

  const handleChangeText = (text: string) => {
    setInputLetter(text.toLowerCase()); 
    
    const translatedLetters = text
      .toLowerCase()
      .split("")
      .map((letter) => letterMap[letter] || letter );
     setOutputLetter(translatedLetters.join(""));
  };

  return (
    <ImageBackground
    source = {require("./assets/images/Background.jpg")}
    resizeMode="cover"
    style={styles.imageBackground}
  >
    <View style={styles.container}>
      <Text style={styles.title}>Morse code translator</Text>
      <Text style={styles.subTitle}>Type in a word in plain:</Text>
      <TextInput
        placeholder={"Word"}
        value={inputLetter}
        onChangeText={handleChangeText}
        style={styles.placeHolder}
      />
      <Text style={styles.subTitle}> Output: </Text>
      <Text style={styles.outputText}>{outputLetter}</Text>
      <TouchableOpacity 
        style={styles.touchableOpacity} 
        onPress={() => {
          navigation.navigate("MorseCodeHistoryScreen")
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
    margin: 0,
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
    fontSize: 28,
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

export default MorseCodeScreen;
