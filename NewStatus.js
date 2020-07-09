import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Icon,
  Picker,
  Form,
  Item,
} from "native-base";
import { View, StyleSheet, Metrics } from "react-native";
import { hp, wp } from "./common";

export default class PickerPlaceholder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined,
    };
  }
  onValueChange(value) {
    this.setState({
      selected: value,
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Item
          rounded
          style={[styles.inputStyle, { marginTop: 0, borderWidth: 1 }]}
        >
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="arrow-down" />}
            placeholderStyle={{ color: "#bfc6ea" }}
            placeholderTextColor="white"
            placeholderIconColor="#007aff"
            style={[
              styles.inputmain,
              { height: 30, width: 150, borderWidth: 2 },
            ]}
            textStyle={{ fontSize: 2, color: "red" }}
            selectedValue={this.state.selected}
            onValueChange={this.onValueChange.bind(this)}
          >
            <Picker.Item label="pending" value="pending" />
            <Picker.Item label="dispatch" value="dispatch" />
            <Picker.Item label="processing" value="processing" />
            <Picker.Item
              label="ready for dispatch"
              value="ready for dispatch"
            />
          </Picker>
        </Item>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { borderWidth: 1, padding: 0, width: wp(140) },
  inputStyle: {
    borderColor: "transparent",
    justifyContent: "center",
    alignSelf: "center",
    // width: Metrics.WIDTH * 0.8,
  },
  inputmain: {
    justifyContent: "center",
    alignSelf: "flex-start",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderRadius: 0,

    // width: Metrics.WIDTH * 0.8,
    // backgroundColor: "rgba(102,102,102,0.6)",
  },
});
