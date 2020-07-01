import React, { Component } from "react";
import { StyleSheet, View, Text, Animated } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { hp, wp } from "./common";

export default class OverviewRow extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: hp(18), fontWeight: "bold" }}>Overview</Text>

        <View style={styles.iconbox}>
          <View style={styles.iconshape}>
            <Feather name="calendar" size={20} color="#1e90ff" />
          </View>
          <View style={styles.iconshape}>
            <Ionicons name="md-add" size={20} color="#1e90ff" />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: hp(30),
    flexDirection: "row",
    justifyContent: "space-between",
  },

  iconbox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: wp(95),
  },

  iconshape: {
    width: wp(42),
    height: wp(42),
    backgroundColor: "#add8e6",
    borderRadius: wp(21),
    justifyContent: "center",
    alignItems: "center",
  },
});
