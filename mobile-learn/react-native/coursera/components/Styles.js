import { StyleSheet } from "react-native";

// Color Constants
export const Colors = {
  secondary: "#EE9972",
  primary: "#333333",
  onSecondary: "#FFFFFF",
  onPrimary: "#111111",
};

export const appStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// MenuItems Styles
export const menuItemsStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    padding: 20,
    backgroundColor: Colors.secondary,
  },
  headerText: {
    fontSize: 40,
    flexWrap: "wrap",
    color: Colors.onSecondary,
  },
  itemText: {
    fontSize: 30,
    color: Colors.primary,
  },
});

// WelcomeScreen Styles
export const welcomeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.primary,
  },
  headerText: {
    fontSize: 32,
    color: Colors.onSecondary,
    textAlign: "center",
    padding: 40,
    lineHeight: 32,
  },
  text: {
    fontSize: 24,
    color: Colors.onSecondary,
    textAlign: "center",
    padding: 10,
    lineHeight: 32,
  },
});

// LittleLemonHeader Styles
export const headerStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary,
    paddingTop: 60,
    paddingBottom: 10,
  },
  text: {
    fontSize: 32,
    color: Colors.onPrimary,
    textAlign: "center",
    fontWeight: "bold",
  },
});

// LittleLemonFooter Styles
export const footerStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary,
    paddingTop: 10,
    paddingBottom: 30,
  },
  text: {
    fontSize: 18,
    color: Colors.onPrimary,
    textAlign: "center",
    fontWeight: "bold",
  },
});
