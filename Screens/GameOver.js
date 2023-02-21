import React from "react";
import { View, Text, StyleSheet, Image, Button, ScrollView,useWindowDimensions } from "react-native";
import Title from "../components/UI/Title";
import Colors from "../components/constants/colors";

function GameOver({ userInput, rounds, gameStart }) {
  const {width,height}=useWindowDimensions();
  let imageSize=300
  if(width>500){
    imageSize=150;
  }
  const imageCont={
    width:imageSize,
    height:imageSize,
    borderRadius:imageSize/2
  }
  return (
    <ScrollView >
      <View>
      <Title style={styles.heading}>Game Over</Title>
      <View style={styles.imgContainer}>
        <Image
          style={[styles.img,imageCont]}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Title>
        <Text style={styles.txt}>
          Your Phone needed <Text style={styles.x}>{rounds}</Text> rounds to
          guess the number <Text style={styles.x}>{userInput}</Text>
        </Text>
      </Title>
      <Button title="Start New Game" onPress={gameStart} color={'#fff'} />
    </View>
    </ScrollView>
  );
}

export default GameOver;

const styles = StyleSheet.create({
  heading: {
    marginTop: 20,
  },
  imgContainer: {
    marginHorizontal: 45,
    marginVertical: 20,
    flex:1,
    alignItems:'center'
  },
  img: {
    width: 300,
    height: 300,
    borderRadius: 150,
  },
  txt: {
    color: Colors.primary500,
    padding: 20,
    fontSize: 20,
    fontWeight: "400",
  },
  x: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    letterSpacing: 4,
  },
});
