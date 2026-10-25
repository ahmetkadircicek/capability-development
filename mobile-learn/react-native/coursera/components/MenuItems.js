import React from "react";
import { View, Text, ScrollView } from "react-native";
import { menuItemsStyles } from "./Styles";

const menuItems = [
  "Hummus \nMoutabal \nFalafel \nMarinated Olives \nKofta \nEggplant Salad \nLentil Burger \nSmoked Salmon \nKofta Burger \nTurkish Kebab \nFries \nButtered Rice \nSpinach Pie",
];

export default function MenuItems() {
  return (
    <View style={menuItemsStyles.container}>
      <ScrollView
        horizontal={false}
        indicatorStyle="white"
        style={menuItemsStyles.innerContainer}
      >
        <Text style={menuItemsStyles.headerText}>View Menu</Text>
        <Text style={menuItemsStyles.itemText}>{menuItems[0]}</Text>
      </ScrollView>
    </View>
  );
}
