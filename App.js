import React, { Component } from "react";
import { StyleSheet, View, Animated } from "react-native";

export default class App extends Component {
  render() {
    const position = new Animated.ValueXY({ x: 500, y: 0 });

    Animated.timing(position, {
      toValue: { x: 0, y: 0 },
      duration: 4000,
    }).start();

    return (
      <View style={styles.container}>
        <Animated.Text style={{ transform: [{ translateX: position.x }] }}>
          Animating my text
        </Animated.Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
