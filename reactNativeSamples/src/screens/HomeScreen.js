import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Components Demo"
      />
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title="Go to ImageScreen Demo"
        onPress={() => navigation.navigate("ImageScreen")}
      />
      <Button
        title="Number Counter Screen"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        title="Random Color Screen Demo"
        onPress={() => navigation.navigate("ColorScreen")}
      />
      <Button
        title="Color Intensity increase/decrease Demo"
        onPress={() => navigation.navigate("SquareScreen")}
      />
      <Button
        title="Go to TextInput Screen"
        onPress={() => navigation.navigate("TextScreen")}
      />
      <Button
        title="Go To Box Screen"
        onPress={() => navigation.navigate("BoxScreen")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
