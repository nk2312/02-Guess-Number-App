import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import Card from "../components/UI/Card";
import PrimaryButton from "../components/UI/PrimaryButton";
import Title from "../components/UI/Title";

function GameStart({ setNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const enteredNumberHandler = (number) => {
    setEnteredNumber(number);
  };
  const resetHandler = () => {
    setEnteredNumber("");
    console.log("reset");
  };

  const confirmHandler = () => {
    let inputNumber = parseInt(enteredNumber);
    if (isNaN(inputNumber) || inputNumber <= 0 || inputNumber >= 100) {
      Alert.alert("invalid input", "the number should be between 1 and 99", [
        { text: "cancel", onPress: { resetHandler }, style: "destructive" },
      ]);
    }
    setNumber(enteredNumber);
  };
  return (
    <ScrollView>
        <KeyboardAvoidingView behavior="position">
      <View style={styles.title}>
        <Title>Enter Your Number</Title>
      </View>
      <Card>
        <TextInput
          defaultValue={enteredNumber}
          style={styles.input}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={2}
          onChangeText={enteredNumberHandler}
        />
        <View style={styles.buttons}>
          <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
          <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
        </View>
      </Card>
    </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default GameStart;

const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  title: {
    marginTop: deviceWidth < 380 ? 50 : 20,
    alignItems: "center",
  },

  inputNumberContainer: {
    backgroundColor: "#72063c",
    marginTop: 70,
    padding: 10,
    marginHorizontal: 24,
    borderRadius: 5,
    elevation: 8,
    shadowColor: "#131318",
    shadowOpacity: 0.6,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    alignItems: "center",
  },
  input: {
    borderBottomColor: "#ddb52f",
    color: "#ddb52f",
    borderBottomWidth: 2,
    marginVertical: 10,
    width: 50,
    fontSize: 32,
    fontWeight: "bold",
  },
  buttons: {
    flexDirection: "row",
  },
});
