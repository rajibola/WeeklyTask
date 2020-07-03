import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ScrollView,
  CheckBox,
} from "react-native";
import SvgUri from "react-native-svg-uri";
import List from "./List";
import Status from "./Status";

import { hp, wp } from "./common";

export default class App extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.heading}></View>

        <View style={styles.summary}>
          <Text style={styles.stext}>Order Summary</Text>
          <SvgUri source={require("./X.svg")} />
        </View>

        <View style={styles.actions}>
          <Text style={styles.actiontext} onPress={() => null}>
            Send To Dispatch
          </Text>
          <Text style={styles.actiontext} onPress={() => null}>
            Print
          </Text>
          <Text style={styles.actiontext} onPress={() => null}>
            Edit
          </Text>
          <Text style={styles.actiondel} onPress={() => null}>
            Delete
          </Text>
        </View>

        {this.renderCustomerDetails()}
        {this.renderCheckout()}
        {this.renderSpecialNote()}
      </ScrollView>
    );
  }
  renderCustomerDetails = () => {
    return (
      <View style={styles.cdetail}>
        <View>
          <View style={styles.box1}>
            <Text style={styles.head}>CUSTOMER NAME</Text>
            <Text style={styles.hname}>Noah Jones</Text>
          </View>
          <View style={styles.box11}>
            <Text style={styles.head}>ADDRESS</Text>
            <Text style={styles.haddress}>
              5318 Ferry Mall Apt. 909 (Near St. Mair High)
            </Text>
          </View>
        </View>

        <View>
          <View style={styles.box2}>
            <Text style={styles.head}>PHONE NUMBER</Text>
            <Text style={styles.hnumber}>+828 183 3911</Text>
          </View>
          <View style={styles.box22}>
            <Text style={styles.head}>STATUS</Text>
            <Status />
          </View>
        </View>
      </View>
    );
  };

  renderCheckout = () => {
    return (
      <View style={styles.cbox}>
        <View style={styles.checkheader}>
          <Text style={styles.citem}>ITEM</Text>
          <Text style={styles.cothers}>QTY</Text>
          <Text style={styles.cothers}>PRICE</Text>
          <Text style={styles.cothers}>TOTAL</Text>
        </View>

        <View>
          <List item="Banana Bread" qty="02" price="324" total="628" />
          <List item="Pizza Bread" qty="02" price="324" total="628" />
        </View>

        <View style={styles.delivery}>
          <Text style={styles.delitext}>Mainland Delivery</Text>
          <Text style={styles.delitext}>N244</Text>
        </View>
        <View style={styles.total}>
          <Text style={styles.totaltext}>Grand Total</Text>
          <Text style={styles.delitext}>N1300</Text>
        </View>
      </View>
    );
  };

  renderSpecialNote = () => {
    return (
      <View style={styles.note}>
        <Text style={styles.notetext}>SPECIAL NOTE</Text>
        <Text style={styles.notedetail}>
          Make sure the bread is freshly baked!
        </Text>
      </View>
    );
  };
}
// const getStatusColor = (status) => {
//   switch (status.toLowerCase()) {
//     case 'pending':
//       return '#FF9359';
//     case 'processing':
//       return '#6DB8D6';
//     case 'dispatched':
//       return '#59CA7F';
//     case 'ready for dispatch':
//       return '#6DB8D6';

//     default:
//       break;
//   }
// };

// <Text
//   style={{
//     width: wp(70),
//     color: getStatusColor(item.status),
//     fontSize: hp(14),
//   }}>

const styles = StyleSheet.create({
  container: { flex: 1 },

  heading: {
    height: hp(85),
    borderBottomWidth: hp(0.5),
    borderBottomColor: "rgba(94,117,132,0.16)",
  },

  summary: {
    flexDirection: "row",
    height: hp(85),
    paddingLeft: wp(41.5 - 10.5),
    paddingRight: wp(24.5),
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: hp(0.5),
    borderBottomColor: "rgba(94,117,132,0.16)",
  },
  stext: {
    fontSize: hp(20),
    lineHeight: wp(24),
    color: "#2C3F5E",
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: hp(85),
    alignItems: "center",
    borderBottomWidth: hp(0.5),
    borderBottomColor: "rgba(94,117,132,0.16)",
  },

  cdetail: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: hp(254),
    paddingTop: hp(29.5),
    paddingBottom: hp(52),
  },

  box1: {
    width: wp(156),
    paddingBottom: hp(53),
  },
  box11: {
    width: wp(156),
  },
  box2: {
    width: wp(120),
    paddingBottom: hp(53),
  },
  box22: {
    width: wp(120),
  },

  head: {
    opacity: 0.59,
    fontSize: hp(12),
    paddingBottom: hp(15),
    lineHeight: hp(15),
    color: "#2C3F5E",
    fontWeight: "bold",
  },

  hname: {
    fontSize: hp(15),
    lineHeight: hp(19),
  },

  haddress: {
    fontSize: hp(15),
    lineHeight: hp(18),
  },

  hnumber: {
    fontSize: hp(15),
    lineHeight: hp(19),
  },

  dir: {
    flexDirection: "row",
    alignItems: "center",
  },

  actiontext: {
    fontSize: hp(16),
    lineHeight: hp(19),
    color: "#3a48bb",
    fontWeight: "bold",
  },
  actiondel: {
    fontSize: hp(16),
    lineHeight: hp(19),
    color: "#C32E66",
    fontWeight: "bold",
  },

  //renderCheckout

  cbox: {
    height: hp(377),
    marginLeft: wp(6),
    width: "97%",

    backgroundColor: "#FAFBFC",
    borderRadius: hp(12),
  },
  checkheader: {
    flexDirection: "row",
    paddingTop: hp(13),
    paddingLeft: 17,
  },

  citem: {
    width: wp(125),
    fontSize: hp(12),
    color: "#2C3F5E",
    fontWeight: "bold",
    lineHeight: hp(15),
  },
  cothers: {
    width: wp(80),
    fontSize: hp(12),
    color: "#2C3F5E",
    fontWeight: "bold",
    lineHeight: hp(15),
  },

  delivery: {
    // backgroundColor: "red",
    flexDirection: "row",
    paddingLeft: wp(17),
    paddingRight: wp(22),
    justifyContent: "space-between",
    height: hp(95),
    alignItems: "center",
    borderStyle: "dashed",
    borderBottomColor: "#D6D9DC",
    borderBottomWidth: hp(1),
  },
  delitext: {
    fontWeight: "bold",
    color: "#2C3F5E",
    lineHeight: hp(19),
    fontSize: hp(15),
  },

  total: {
    height: hp(80),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: wp(19),
    paddingRight: wp(15.5),
  },

  totaltext: {
    fontSize: hp(15),
    lineHeight: hp(18),
    color: "#2c3f5e",
    fontStyle: "italic",
  },

  //Note
  note: {
    backgroundColor: "#fff",
    height: hp(97),
    marginLeft: wp(21.5),
    marginRight: wp(23.5),
    marginTop: hp(44),
    paddingLeft: wp(27.5),
    justifyContent: "center",
    borderRadius: hp(10),
    marginBottom: hp(86),

    shadowColor: "rgba(35,57,91,0.08)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 4,
  },

  notetext: {
    paddingBottom: hp(12),
    color: "#2C3F5E",
    fontSize: hp(12),
    lineHeight: hp(15),
    fontWeight: "bold",
  },

  notedetail: {
    fontSize: hp(14),
    lineHeight: hp(18),
  },
});
