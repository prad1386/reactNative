import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

//action = how to change state object
//reducer = is a func which maintains changes to an object, takes two arguments #1 state  #2 Object that describes the change we want to make (colorToChange:'red', amount:15)
//dispatch = run my reducer
const reducer = (state, action) => {
  //state === {red:number, green:number, blue:number}
  //action === { colorTochange: 'red' || 'blue' || 'green', amount: 15 ||-15}
  //action as per convention === { type: 'change_red' || 'change_blue' || 'change_green', payload: 15 ||-15}
  //never change state directly, instead new state is created with changed value
  //Its must to return from reducer, otherwise state will be undefined in next reload
  switch (action.type) {
    case "change_red":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload }; //creating new object, copying existing state, new value to state, when new value is assigned in obj it deletes the old value
    case "change_green":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case "change_blue":
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;
  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_red", payload: COLOR_INCREMENT })
        }
        onDecrease={
          () => dispatch({ type: "change_red", payload: -1 * COLOR_INCREMENT }) //type===colorToChange, payload=== amount
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_blue", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_blue", payload: -1 * COLOR_INCREMENT })
        }
        color="Blue"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_green", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_green", payload: -1 * COLOR_INCREMENT })
        }
        color="Green"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
