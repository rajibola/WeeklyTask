import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ScrollView,
  CheckBox,
} from "react-native";
import { hp, wp } from "./common";

export default class List extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.citem}>{this.props.item}</Text>
        <Text style={styles.cqty}>{this.props.qty}</Text>
        <Text style={styles.cprice}>N{this.props.price}</Text>
        <Text style={styles.ctotal}>N{this.props.total}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: wp(18),
    height: hp(86.5),
    alignItems: "center",
    borderBottomColor: "rgba(46,93,164,0.08)",
    borderBottomWidth: hp(1),
  },
  citem: {
    width: wp(125),
    fontSize: hp(15),
    color: "#2C3F5E",
    lineHeight: hp(18),
  },
  cqty: {
    width: wp(80),
    fontSize: hp(15),
    lineHeight: hp(18),
    color: "#626474",
    fontWeight: "bold",
  },

  cprice: {
    width: wp(80),
    fontSize: hp(15),
    lineHeight: hp(18),
    fontWeight: "bold",
    color: "#2C3F5E",
  },
  ctotal: {
    width: wp(80),
    fontSize: hp(15),
    lineHeight: hp(18),
    fontWeight: "bold",
    color: "#2C3F5E",
  },
});
