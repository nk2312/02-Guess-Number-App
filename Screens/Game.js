import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, Alert, FlatList,useWindowDimensions } from "react-native";
import Title from "../components/UI/Title";
import Number from "../components/game/number";
import Card from "../components/UI/Card";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";

function guess(min, max) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  return rndNum;
}
let min = 1;
let max = 100;

function Game({ userInput, onGameOver }) {
  const {width,height}=useWindowDimensions();
  let num = guess(min, max);

  const [guessNumber, setGuessNumber] = useState(num);
  const [roundList, setRoundList] = useState([guessNumber]);

  function guessHandler(direction) {
    if (
      (direction === "lower" && guessNumber > userInput) ||
      (direction === "higher" && userInput > guessNumber)
    ) {
      Alert.alert("oops!", "You are lying ..wrongInput", {
        text: "Sorry!",
        style: "cancel",
      });
      return;
    }
    if (direction === "higher") {
      console.log("higher");
      max = guessNumber;
    } else {
      min = guessNumber + 1;
    }
    let ranNum = guess(min, max);
    setRoundList((prevState) => {
      return [...prevState, ranNum];
    });
    setGuessNumber(ranNum);

    return ranNum;
  }
  const len = roundList.length;
  useEffect(() => {
    if (userInput == guessNumber) {
      onGameOver(len);
    }
  }, [userInput, guessNumber, onGameOver]);

  useEffect(() => {
    (max = 100), (min = 1);
  }, []);

  let content=<>
  <Number>{guessNumber}</Number>
      <Card>
        <Text style={styles.text}>higher or lower?</Text>
        <Button title="lower" onPress={guessHandler.bind(this, "lower")} />
        <Button title="higher" onPress={guessHandler.bind(this, "higher")} />
      </Card></>
if(width>500){
    content=<>
    <View style={styles.landscapeContainer}>
    <Button title="lower -" onPress={guessHandler.bind(this, "lower")} color='black' />
    <Number style={styles.numberLandscape}>{guessNumber}</Number>
    <Button title="higher +" onPress={guessHandler.bind(this, "higher")} color='black' />
    </View>

    </>
}

  return (
    <View style={styles.view}>
      <Title>Opponent's Guess</Title>
      {content}
      <View style={styles.list}>
        <FlatList
          data={roundList}
          renderItem={(itemData) => (
            <View style={styles.listItem}>
              <Text>#{itemData.index + 1}</Text>
              <Text>Opponents's guess :{itemData.item}</Text>
            </View>
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}


export default Game;

const styles = StyleSheet.create({
  btn: {
    color: "white",
  },
  text: {
    color: "#ddb52f",
    fontSize: 25,
  },
  rounds: {
    borderWidth: 2,
    marginHorizontal: 50,
    width: 280,
    marginVertical: 100,
  },

  listItem: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: "#ddb52f",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  list:{
    marginTop:20,
    marginHorizontal:20
  },
  numberLandscape:{
   marginHorizontal:250,
   borderColor:'#fff'
  },
  landscapeContainer:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  }
});
