import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  return (
    <View>
      <Text>Enter Name :</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={newValue => setName(newValue)}
      />
      {name.length >= 5 ? (
        <Text>My Name is :{name}</Text>
      ) : (
        <Text>Length should be more than 5</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: 250,
    margin: 15,
    borderColor: "black",
    borderWidth: 1
  }
});

export default TextScreen;
