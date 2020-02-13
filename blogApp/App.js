import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import IndexScreen from "./src/screens/IndexScreen";
import { Provider } from "./src/context/BlogContext";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";

const navigator = createStackNavigator(
  {
    IndexScreen: IndexScreen,
    ShowScreen: ShowScreen,
    CreateScreen: CreateScreen,
    EditScreen: EditScreen
  },
  {
    initalRouteName: "IndexScreen",
    defaultNavigationOptions: {
      title: "Blog"
    }
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
