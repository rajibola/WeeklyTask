import React from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  YellowBox,
  Platform,
} from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBrowserApp } from "@react-navigation/web";
import { createStackNavigator } from "react-navigation-stack";
import { RectButton, ScrollView } from "react-native-gesture-handler";

import SwipeableTable from "./swipeable";

export default class App extends Component {
  render() {
    return <SwipeableTable />;
  }
}

const styles = StyleSheet.create({});
