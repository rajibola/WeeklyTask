import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { hp, wp } from "./common";
import DropdownMenu from "react-native-dropdown-menu";

export default class Status extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  render() {
    var data = [["pending", "processing", "dispatched", "ready for dispatch"]];

    return (
      <View style={styles.container}>
        {/* <View style={styles.dir}> */}
        {/* <Text style={styles.hstatus}>Dispatched</Text> */}
        {/* <Text style={styles.harrow}>▼</Text> */}
        {/* </View> */}
        {/* <View style={styles.trial}></View> */}

        <DropdownMenu
          style={{
            flex: 1,
            height: 300,
            width: 300,
            position: "absolute",
            borderWidth: 1,
            backgroundColor: "red",
          }}
          bgColor={"white"}
          tintColor={"#666666"}
          activityTintColor={"green"}
          // arrowImg={}
          // checkImage={}
          // optionTextStyle={{color: '#333333'}}
          // titleStyle={{color: '#333333'}}
          // maxHeight={300}
          handler={(selection, row) =>
            this.setState({ text: data[selection][row] })
          }
          data={data}
        ></DropdownMenu>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "absolute",
    width: "100%",
    height: 44 * 5,
    zIndex: 100,
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
