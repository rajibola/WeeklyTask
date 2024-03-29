import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.floatbutton}
        onPress={() => {
          alert("You tapped the button!");
        }}
      >
        <MaterialIcons name="chat" size={27} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  floatbutton: {
    width: 55,
    height: 55,
    backgroundColor: "skyblue",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    position: "absolute",
    right: 20,
    bottom: 20,
  },
});
