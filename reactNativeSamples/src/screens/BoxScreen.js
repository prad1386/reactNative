import React from "react";
import { View, StyleSheet, Text } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle1}>Child #1</Text>
      <Text style={styles.textStyle2}>Child #2</Text>
      <Text style={styles.textStyle3}>Child #3</Text>
    </View>
  );
};

//justifyContent,alignItems,flexDirection  always asigned to some parent
//flex, alignSelf always assigned to child element
const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    height: 500,
    borderColor: "black"
    // justifyContent: "center", //space-between,space-around,default:flex-start
    // alignItems: "center", //default is stretch, flex-start,flex-end
    // flexDirection: "column" //'row'
  },
  textStyle1: {
    borderWidth: 3,
    borderColor: "red",
    alignSelf: "flex-start"
  },
  textStyle2: {
    borderWidth: 3,
    borderColor: "red",
    position: "absolute",
    // ...StyleSheet.absoluteFillObject //same as position:absolute,top:0,bottom:0,right:0,left:0
    alignSelf: "flex-end" //stretch,flex-start,flex-end
    // flex: 1
  },
  textStyle3: {
    borderWidth: 3,
    borderColor: "red",
    alignSelf: "center"
  }
});

export default BoxScreen;
