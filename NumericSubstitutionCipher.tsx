import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const NumericSubstitutionCipherScreen = () => {
  const navigation = useNavigation<any>();

  const [inputLetter, setInputLetter] = useState("");
  const [outputLetter, setOutputLetter] = useState("");
  const [inputLetter2, setInputLetter2] = useState("");
  const [outputLetter2, setOutputLetter2] = useState("");

  const letterMap: { [key: string]: string } = {
    a: " 1",
    b: " 2",
    c: " 3",
    d: " 4",
    e: " 5",
    f: " 6",
    g: " 7",
    h: " 8",
    i: " 9",
    j: " 10",
    k: " 11",
    l: " 12",
    m: " 13",
    n: " 14",
    o: " 16",
    q: " 17",
    r: " 18",
    s: " 19",
    t: " 20",
    u: " 21",
    v: " 22",
    w: " 23",
    x: " 24",
    y: " 25",
    z: " 26",
  };

  const letterMap2: {[key: string]: string} = {
    1: "a",
    2: "b",
    3: "c",
    4: "d",
    5: "e",
    6: "f",
    7: "g",
    8: "h",
    9: "i",
    10: "j",
    11: "k",
    12: "l",
    13: "m",
    14: "n",
    15: "o",
    16: "p",
    17: "q",
    18: "r",
    19: "s",
    20: "t",
    21: "u",
    22: "v",
    23: "w",
    24: "x",
    25: "z",
    26: "z",
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
      <Text style={styles.title}>Numeric substitution cipher translator</Text>
      <Text style={styles.subTitle}>Type in a word in plain:</Text>
      <TextInput
        placeholder={"Word"}
        value={inputLetter}
        onChangeText={handleChangeText}
        style={styles.placeHolder}
      />
      <Text style={styles.subTitle}> Output: </Text>
      <Text style={styles.outputText}>{outputLetter}</Text>
      <Text style={styles.subTitle}>Type in a word in Numeric substitution cipher:</Text>
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
          navigation.navigate("NumericSubstitutionCipherHistoryScreen")
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
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
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
    margin:-7,
  },
  imageBackground: {
    flex:0,
    width: '100%',
    height: "100%",
  },
});

export default NumericSubstitutionCipherScreen;
