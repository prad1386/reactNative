import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friends #1", age: 20 },
    { name: "Friends #2", age: 21 },
    { name: "Friends #3", age: 22 },
    { name: "Friends #4", age: 23 },
    { name: "Friends #5", age: 24 },
    { name: "Friends #6", age: 25 },
    { name: "Friends #7", age: 26 },
    { name: "Friends #8", age: 27 },
    { name: "Friends #9", age: 28 },
    { name: "Friends #10", age: 90 },
    { name: "Friends #11", age: 100 }
  ];
  return (
    <FlatList
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - age {item.age}
          </Text>
        );
      }}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;
