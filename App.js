import { StatusBar } from "expo-status-bar";
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from "react-native";
import GameStart from "./Screens/GameStart";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import Game from "./Screens/Game";
import GameOver from './Screens/GameOver';
import {StatusBar} from 'expo-status-bar';


export default function App() {
  const [input,setInput]=useState(null);
  const [gameOver,setGameOver]=useState(false);
  const [countRounds,setCountRounds]=useState(0);


 const setInputHandler=(num)=>{
    setInput(num)
  }
  const gameOverHandler=(rounds)=>{
    setGameOver(true);
    setCountRounds(rounds-1)
  }
  const gameStart=()=>{
    setGameOver(false);
    setInput(null)

  }
  let screen=<GameStart setNumber={setInputHandler}/>

  if(input){
    screen=<Game userInput={input}  onGameOver={gameOverHandler}/>
  }
  if(gameOver && input){
    screen=<GameOver userInput={input} rounds={countRounds} gameStart={gameStart}/>
  }
  return (
   <>
   <StatusBar style='light'/>
   <LinearGradient style={styles.container} colors={['#9D5783',"#ddb52f"]}>
      <ImageBackground imageStyle={styles.backgroundImage}
      source={require('./assets/images/dice.jpg')} resizeMode="cover" style={styles.container}>
        <SafeAreaView>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage:{
    opacity:0.30
  }
});
