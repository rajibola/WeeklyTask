import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { hp, wp } from "./common";
import DropdownMenu from "react-native-dropdown-menu";

export default class Status extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <View style={styles.dir}>
          <Text style={styles.hstatus}>Dispatched</Text>
          <Text style={styles.harrow}>▼</Text>
        </View>
        <View style={styles.trial}></View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  trial: {
    position: "absolute",
    width: "100%",
    height: 300,
    backgroundColor: "green",
    zIndex: 100,
  },
  container: {
    width: "100%",
    borderWidth: 1,
  },
  dir: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
  },
  hstatus: {
    fontSize: hp(14),
    lineHeight: hp(17),
    color: "#59CA7F",
  },

  harrow: {
    fontSize: hp(10),
    marginLeft: wp(4),
  },
});
