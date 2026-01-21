import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Button, ImageBackground, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation, useRoute } from '@react-navigation/native';
import CaesarCipherScreen from "./CaesarCipher";
import CaesarCipherHistoryScreen from "./CaesarCipherHistory";
import ROT13Screen from "./ROT13";
import ROT13HistoryScreen from "./ROT13History";
import AtbashCipherScreen from "./AtbashCipher";
import AtbashCipherHistoryScreen from "./AtbashCipherHistory";
import MorseCodeScreen from "./MorseCode";
import MorseCodeHistoryScreen from "./MorseCodeHistory";
import NumericSubstitutionCipherScreen from "./NumericSubstitutionCipher";
import NumericSubstitutionCipherHistoryScreen from "./NumericSubstitutionCipherHistory";

const Stack = createStackNavigator();

const MenuScreen = () => {
  const navigation = useNavigation<any>();

  return (
  <ImageBackground
    source = {require("./assets/images/Background.jpg")}
    resizeMode="cover"
    style={styles.imageBackground}
  >
    <SafeAreaView>
    <View style={styles.container}>
      <Text style={styles.title}> Secret code translator</Text>
      <Text style={styles.subTitle}> Select the secret code you want to translate.</Text>
      <TouchableOpacity onPress={()=> navigation.navigate("CaesarCipherScreen")} style = {styles.touchableOpacity}>
        <Text style={styles.touchableOpacityText}>Caesar Cipher</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate("ROT13Screen")} style = {styles.touchableOpacity}>
        <Text style={styles.touchableOpacityText}>ROT13</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate("AtbashCipherScreen")} style = {styles.touchableOpacity}>
        <Text style={styles.touchableOpacityText}>Atbash Cipher</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate("MorseCodeScreen")} style = {styles.touchableOpacity}>
        <Text style={styles.touchableOpacityText}>Morse Code</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate("NumericSubstitutionCipherScreen")} style = {styles.touchableOpacity}>
        <Text style={styles.touchableOpacityText}>Numeric substitution cipher</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  </ImageBackground> 
  );
};

const Caesar_Cipher_Screen = () => {
  return (
    <View>
      <CaesarCipherScreen />
    </View>
  );
};
const Caesar_Cipher_History_Screen = () => {
  return(
    <View>
      <CaesarCipherHistoryScreen/>
    </View>
  );
};
const ROT13_Screen = () => {
  return(
    <View>
      <ROT13Screen/>
    </View>
  );
};
const ROT13_History_Screen = () => {
  return(
    <View>
      <ROT13HistoryScreen/>
    </View>
  );
};
const Atbash_Cipher_Screen = () => {
  return(
    <View>
      <AtbashCipherScreen/>
    </View>
  );
};
const Atbash_Cipher_History_Screen = () => {
  return(
    <View>
      <AtbashCipherHistoryScreen/>
    </View>
  );
};
const Morse_Code_Screen = () => {
  return(
    <View>
      <MorseCodeScreen/>
    </View>
  );
};
const Morse_Code_History_Screen = () => {
  return(
    <View>
      <MorseCodeHistoryScreen/>
    </View>
  );
};
const Numeric_Substitution_Cipher_Screen = () => {
  return(
    <View>
      <NumericSubstitutionCipherScreen/>
    </View>
  );
};
const Numeric_Substitution_Cipher_History_Screen = () => {
  return(
    <View>
      <NumericSubstitutionCipherHistoryScreen/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  title: {
    justifyContent: "center",
    fontSize: 30,
    alignItems: "center",
    padding: 40,
    color: "#003334",
    margin: 10,
    fontWeight: "bold",
  },
  subTitle: {
    color: "#003334",
    fontSize: 20,
    fontWeight: "bold",
  },
  touchableOpacity: {
    backgroundColor: "#54FBFF", 
    paddingVertical: 3,
    paddingHorizontal: 20,
    borderRadius: 19,
    alignItems: "center",
    justifyContent: "center",
    margin: 7,
    borderWidth: 8,
    borderColor: "#258183",
  },
  touchableOpacityText:{
    fontSize: 28,
    color: "black",
    alignItems: "center",
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: "100%",
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MenuScreen" component={MenuScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="CaesarCipherScreen" component={Caesar_Cipher_Screen} options={{ headerShown: false }}/>
        <Stack.Screen name="CaesarCipherHistoryScreen" component={Caesar_Cipher_History_Screen} options={{ headerShown: false }}/>
        <Stack.Screen name="ROT13Screen" component={ROT13_Screen} options={{ headerShown: false }}/>
        <Stack.Screen name="ROT13HistoryScreen" component={ROT13_History_Screen} options={{ headerShown: false }}/>
        <Stack.Screen name="AtbashCipherScreen" component={Atbash_Cipher_Screen} options={{ headerShown: false }}/>
        <Stack.Screen name="AtbashCipherHistoryScreen" component={Atbash_Cipher_History_Screen} options={{ headerShown: false }}/>
        <Stack.Screen name="MorseCodeScreen" component={Morse_Code_Screen} options={{ headerShown: false }}/>
        <Stack.Screen name="MorseCodeHistoryScreen" component={Morse_Code_History_Screen} options={{ headerShown: false }}/>
        <Stack.Screen name="NumericSubstitutionCipherScreen" component={Numeric_Substitution_Cipher_Screen} options={{ headerShown: false }}/>
        <Stack.Screen name="NumericSubstitutionCipherHistoryScreen" component={Numeric_Substitution_Cipher_History_Screen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
