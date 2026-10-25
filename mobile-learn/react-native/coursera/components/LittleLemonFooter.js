import * as React from "react";
import { View, Text } from "react-native";
import { footerStyles } from "./Styles";

export default function LittleLemonFooter() {
  return (
    <View style={footerStyles.container}>
      <Text style={footerStyles.text}>
        All Rights Reserved by Little Lemon, 2024
      </Text>
    </View>
  );
}
