import React from "react";
import { View } from "react-native";
import { appStyles } from "./components/Styles";

import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
import WelcomeScreen from "./components/WelcomeScreen";
import MenuItems from "./components/MenuItems";

export default function App() {
  return (
    <View style={appStyles.container}>
      <LittleLemonHeader />
      <WelcomeScreen />
      {/* <MenuItems /> */}
      <LittleLemonFooter />
    </View>
  );
}
