import * as React from "react";
import { View, Text } from "react-native";
import { headerStyles } from "./Styles";

export default function LittleLemonHeader() {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.text}>Little Lemon</Text>
    </View>
  );
}
