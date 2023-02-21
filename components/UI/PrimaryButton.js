import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

function PrimaryButton({ children ,onPress}) {
  const buttonHandler = () => {
    onPress();
  };
  return (
    <View style={styles.button}>
      <Pressable
        onPress={buttonHandler}
        android_ripple={{ color: "#ddb52f" }}
        style={({pressed}) => [
            {
              backgroundColor: pressed && '#3b021f' }]}>
        <Text style={styles.btnText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    margin: 10,
    backgroundColor: "#4e0329",
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 28,
    flex: 1,
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: 1,
  },
  pressed: {
    opacity:0.75
  },
});
