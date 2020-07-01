import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ScrollView,
  CheckBox,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { hp, wp } from "./common";

import OverviewRow from "./OverviewRow";

export default class App extends Component {
  render() {
    const DATA = [
      {
        title: "TOTAL ORDERS",
        number: "1,314",
        percentage: "15.8%",
        color: "green",
        arrowname: "arrow-up-drop-circle",
        id: 1,
      },
      {
        title: "TOTAL ITEMS",
        number: "983",
        color: "red",
        percentage: "13.3%",
        arrowname: "arrow-down-drop-circle",
        id: 2,
      },
      {
        title: "ORDER TOTAL",
        number: "N984",
        color: "red",
        percentage: "13.3%",
        arrowname: "arrow-down-drop-circle",
        id: 3,
      },
      {
        title: "READY FOR DISPATCH",
        number: "342",
        color: "green",
        percentage: "15.8%",
        arrowname: "arrow-up-drop-circle",
        id: 3,
      },
    ];

    const List = [
      {
        name: "Noah Jones",
        amount: "N982",
        status: "Dispatched",
        color: "green",
      },
      {
        name: "Chris Watts",
        amount: "N482",
        status: "Pending",
        color: "orange",
      },
      {
        name: "Rusell Alvarado",
        amount: "N982",
        status: "Processing",
        color: "#1b9aaa",
      },
      {
        name: "Marie Thompson",
        amount: "N482",
        status: "Pending",
        color: "orange",
      },
    ];

    return (
      <ScrollView style={styles.container}>
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

        {/* Starting Grid */}
        <View style={{ alignItems: "center" }}>
          <FlatList
            data={DATA}
            numColumns={2}
            renderItem={({ item }) => (
              <View style={styles.view}>
                <Text style={{ fontSize: hp(10) }}>{item.title}</Text>
                <Text style={styles.itemnumber}>{item.number}</Text>
                <View style={styles.arrpercent}>
                  <MaterialCommunityIcons
                    name={item.arrowname}
                    size={17}
                    color={item.color}
                  />
                  <Text style={{ fontSize: hp(14) }}>{item.percentage}</Text>
                </View>
              </View>
            )}
          />
        </View>
        {/* Grid End */}
        <OverviewRow />

        {/* List Start */}
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          {/*headings */}
          <View
            style={{
              flexDirection: "row",
              marginLeft: wp(50),
            }}
          >
            <Text style={styles.customer}>CUSTOMER NAME</Text>
            <Text style={styles.amountstat}>AMOUNT</Text>
            <Text style={styles.amountstat}>STATUS</Text>
          </View>

          {/*List */}
          <View style={{ marginTop: hp(12) }}>
            <FlatList
              data={List}
              renderItem={({ item, index }) => (
                <View
                  style={[
                    styles.list,
                    {
                      backgroundColor: index % 2 === 0 ? "white" : "#f5f5f5",
                    },
                  ]}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      margin: wp(10),
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CheckBox />
                    <Text style={styles.cname}>{item.name}</Text>
                    <Text style={styles.cname}>{item.amount}</Text>
                    <Text
                      style={{
                        width: wp(70),
                        color: `${item.color}`,
                        fontSize: hp(14),
                      }}
                    >
                      {item.status}
                    </Text>
                    <AntDesign name="caretdown" size={7} color="black" />
                  </View>
                </View>
              )}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: { width: wp(375), height: hp(812) },
  head: {
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

  view: {
    width: hp(171),
    height: hp(151),
    margin: wp(10),
    alignItems: "center",
    borderRadius: hp(10),
    justifyContent: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,

    backgroundColor: "white",
  },

  itemnumber: {
    fontSize: hp(35),
    fontWeight: "bold",
    padding: hp(10),
  },

  arrpercent: { flexDirection: "row", alignItems: "center" },

  customer: { fontSize: hp(14), width: wp(142) },

  amountstat: { fontSize: hp(14), width: wp(120) },

  cname: { width: wp(110), fontWeight: "bold", fontSize: hp(14) },
});
