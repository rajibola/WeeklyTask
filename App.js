import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import BreadData from "./BreadData";

import { hp, wp } from "./common";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchView}>
          <View>
            <TextInput style={styles.searchBox} />

            {this.searchResult()}
          </View>
          <View style={styles.goButton} onPress={() => null}>
            <MaterialCommunityIcons
              name="arrow-right"
              size={30}
              color="white"
            />
          </View>
        </View>
      </View>
    );
  }

  searchResult = () => {
    return (
      <View style={styles.searchResult}>
        <FlatList
          data={BreadData}
          renderItem={({ item }) => (
            <View style={styles.resultItem}>
              <Text style={styles.resultText}>{item.name}</Text>
              <Text style={styles.resultPrice}>{item.price}</Text>
            </View>
          )}
        />

        <View style={styles.addProductBox}>
          <Text style={styles.addProductText}>Bread</Text>
          <Text style={styles.addProductFunction}>
            <Text style={styles.addButton}>+</Text> Add Product
          </Text>
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  addProductText: {
    lineHeight: hp(17),
    fontSize: hp(14),
    color: "#314362",
  },
  addButton: {
    fontSize: hp(20),
  },
  addProductFunction: {
    color: "#476FEE",
    lineHeight: hp(17),
    fontSize: hp(14),
  },
  resultText: {
    color: "#314362",
    lineHeight: hp(17),
    fontSize: hp(14),
  },
  resultPrice: {
    fontSize: hp(14),
    color: "#314362",
    fontWeight: "bold",
    lineHeight: hp(17),
  },
  addProductBox: {
    height: hp(71.5),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: wp(20.5),
    paddingRight: wp(20.5),
  },

  resultItem: {
    height: hp(60.5),
    borderBottomColor: "rgba(72,92,105,0.17)",
    borderBottomWidth: 1,
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: wp(20.5),
    paddingRight: wp(20.5),
    justifyContent: "space-between",
  },
  searchResult: {
    width: wp(307 - 40),
    minHeight: hp(60.5),
    marginTop: hp(14.5),
    borderRadius: 5,
    backgroundColor: "white",
    borderColor: "rgba(60,73,81,0.16)",
    borderWidth: 1,

    shadowColor: "#B6BECC",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,

    elevation: 23,
  },
  goButton: {
    width: hp(45),
    height: hp(45),
    borderRadius: 8,
    backgroundColor: "#515DF1",
    justifyContent: "center",
    alignItems: "center",
  },
  searchBox: {
    width: wp(307 - 40),
    height: hp(46),
    borderColor: "blue",
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: wp(20),
    fontSize: hp(14),
    lineHeight: hp(17),
    color: "#314362",
  },

  searchView: {
    width: wp(307 - 40 + 45 + 14),
    flexDirection: "row",
    // alignItems: "center",
    justifyContent: "space-between",
  },

  container: {
    flex: 1,
    marginTop: hp(100),
    width: wp(375),
    alignItems: "center",
    height: hp(812),
  },
});
