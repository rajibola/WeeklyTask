import React, { Component } from "react";
import { StyleSheet, View, Text, Animated, StatusBar } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

import { hp, wp } from "./common";

import OverviewRow from "./OverviewRow";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.head}>
          <Entypo
            name="chevron-small-up"
            size={45}
            color="blue"
            style={styles.row1}
          />

          <View style={styles.row2}>
            <Text style={styles.boldText}>Orders</Text>
            <View style={styles.icons}>
              <Octicons name="search" size={20} color="black" />
              <Entypo name="menu" size={27} color="black" />
            </View>
          </View>
        </View>

        <OverviewRow />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { width: wp(375), height: hp(812) },
  head: {
    marginTop: StatusBar.currentHeight,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  row1: {
    borderRightColor: "black",
    borderRightWidth: wp(0.3),
    padding: wp(5),
  },
  row2: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: wp(10),
    paddingRight: wp(20),
    width: wp(320),
  },

  boldText: { fontSize: 17, fontWeight: "bold", padding: wp(10) },

  icons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: wp(70),
    alignItems: "center",
  },
});
