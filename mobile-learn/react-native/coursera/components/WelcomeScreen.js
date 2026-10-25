import * as React from "react";
import { View, Text } from "react-native";
import { welcomeScreenStyles } from "./Styles";

export default function WelcomeScreen() {
  return (
    <View style={welcomeScreenStyles.container}>
      <Text style={welcomeScreenStyles.headerText}>
        Welcome to Little Lemon
      </Text>
      <Text style={welcomeScreenStyles.text}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </View>
  );
}
