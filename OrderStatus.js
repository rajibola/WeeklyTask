import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Button, Menu, Divider, Provider } from "react-native-paper";
import { hp, wp } from "./common";
import { AntDesign } from "@expo/vector-icons";
var data = [["pending", "processing", "dispatched", "ready for dispatch"]];

export default class OrderStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      showMenu: false,
    };
  }

  openMenu = () => this.setState({ showMenu: true });

  closeMenu = () => this.setState({ showMenu: false });

  render() {
    return (
      <Menu
        style={{ flex: 1 }}
        visible={this.state.showMenu}
        onDismiss={this.closeMenu}
        anchor={
          <TouchableOpacity onPress={this.openMenu} style={styles.statusButton}>
            <Text
              style={[styles.statusText, { color: getStatusColor("Pending") }]}
            >
              Pending
            </Text>
            <AntDesign
              name="caretdown"
              size={8}
              color={getStatusColor("Pending")}
            />
          </TouchableOpacity>
        }
      >
        <Menu.Item onPress={this.closeMenu} title="Ready for dispatch" />
        <Divider />
        <Menu.Item onPress={this.closeMenu} title="Cancelled" />
        <Divider />
        <Menu.Item onPress={this.closeMenu} title="Processing" />
        <Divider />
        <Menu.Item onPress={this.closeMenu} title="Pending" />
      </Menu>
    );
  }
}
export const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case "pending":
      return "#FF9359";
    case "processing":
      return "#6DB8D6";
    case "dispatched":
      return "#59CA7F";
    case "ready for dispatch":
      return "#6DB8D6";

    default:
      break;
  }
};

const styles = StyleSheet.create({
  statusText: {
    // width: wp(70),
    fontSize: hp(13),
    marginRight: wp(4),
  },
  statusButton: {
    width: wp(123),
    // borderWidth: 1,
    // height: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    // backgroundColor: "blue",
    // width: 100,
    height: hp(66),
  },

  dropDownMenu: {
    flex: 1,
    height: 30,
    width: 300,
    position: "absolute",
    // borderWidth: 1,
    backgroundColor: "white",
  },
  container: {
    position: "absolute",
    width: "100%",
    height: 44 * 5,
    zIndex: 100,
    // borderWidth: 1,
  },
  dir: {
    flexDirection: "row",
    alignItems: "center",
    // borderWidth: 1,
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
