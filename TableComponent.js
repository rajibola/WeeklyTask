import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import {
  DataTable,
  Button,
  Menu,
  Divider,
  Provider,
  Checkbox,
} from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import { hp, wp } from "./common";
import OrderStatus, { getStatusColor } from "./OrderStatus";

import CustomCheckbox from "./CustomCheckbox";

const OrdersTable = ({ data, onRowPressed }) => {
  var checked = false;
  console.log("TABLE DATA=", data);
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <Provider>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title style={{ justifyContent: "center" }}>
            <Text style={styles.customer}>CUSTOMER NAME</Text>
          </DataTable.Title>
          <DataTable.Title style={{ justifyContent: "center" }}>
            <Text style={styles.customer}>AMOUNT</Text>
          </DataTable.Title>
          <DataTable.Title style={{ justifyContent: "center" }}>
            <Text style={styles.customer}>STATUS</Text>
          </DataTable.Title>
        </DataTable.Header>

        {data.length > 1 &&
          data.splice(0, 6).map((order, index) => {
            return (
              <DataTable.Row
                style={{
                  backgroundColor: getBackgroundColor(index),
                  justifyContent: "center",
                  height: hp(66),
                }}
              >
                <DataTable.Cell
                  style={[
                    styles.cell,
                    {
                      justifyContent: "flex-start",

                      //   flex: 1,
                      //   backgroundColor: "red",
                      position: "absolute",
                      left: 0,
                      zIndex: 101,
                      //   borderWidth: 1,
                    },
                  ]}
                >
                  {/* <Text style={styles.customer}>Name</Text> */}
                  {/* <View style={styles.newView}> */}
                  {/* <Checkbox.Item label="Item" status="checked" /> */}
                  {/* </View> */}
                  <View
                    style={{
                      width: wp(200),
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignSelf: "center",
                      alignItems: "center",
                      //   borderWidth: 1,
                      height: hp(66),
                    }}
                  >
                    <CustomCheckbox />
                    <Text style={styles.customer}>Marie Thompson</Text>
                  </View>
                </DataTable.Cell>
                <DataTable.Cell
                  style={[styles.cell, { paddingLeft: wp(10) }]}
                  onPress={() => null}
                >
                  <Text style={styles.customer}>N3000</Text>
                </DataTable.Cell>
                <DataTable.Cell
                  style={[
                    styles.cell,
                    {
                      zIndex: 100,
                      position: "absolute",
                      right: 0,
                      width: wp(123),
                    },
                  ]}
                  onPress={() => null}
                >
                  {/* <Text style={styles.customer}>{order.status}</Text> */}

                  <View
                    style={{
                      width: wp(123),
                      height: hp(66),
                      //   borderWidth: 1,
                      justifyContent: "flex-start",
                      alignItems: "center",
                      //   alignSelf: "center",
                    }}
                  >
                    <OrderStatus />
                  </View>
                  {/* <Text
                    style={[
                      styles.customer,
                      { color: getStatusColor("pending") },
                    ]}
                  >
                    pending
                  </Text> */}
                  {/* 
                <Checkbox
                  status={'checked'}
                  onPress={() => {
                    // setChecked(!checked);
                  }}
                /> */}
                  {/* <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={
                      <Button
                        style={{backgroundColor: 'red'}}
                        onPress={openMenu}>
                        Show menu
                      </Button>
                    }>
                    <Menu.Item onPress={() => {}} title="Item 1" />
                    <Divider />

                    <Menu.Item onPress={() => {}} title="Item 2" />
                    <Divider />
                    <Menu.Item onPress={() => {}} title="Item 3" />
                  </Menu> */}
                </DataTable.Cell>
              </DataTable.Row>
            );
          })}

        {/* <DataTable.Row>
        <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
        <DataTable.Cell numeric>237</DataTable.Cell>
        <DataTable.Cell numeric>8.0</DataTable.Cell>
      </DataTable.Row> */}

        <DataTable.Pagination
          page={1}
          numberOfPages={data.length / 6}
          onPageChange={(page) => {
            console.log(page);
          }}
          label="1-2 of 6"
        />
      </DataTable>
    </Provider>
  );
};
function getBackgroundColor(index) {
  if (index % 2 === 0) {
    return "#FAFBFC";
    // FAFBFC
  }
  return "white";
}
const styles = StyleSheet.create({
  newView: {
    borderWidth: 1,
    // flex: 1,
    flexGrow: 1,
    width: wp(100),
    height: hp(30),
  },
  cell: {
    borderWidth: 0,
    justifyContent: "center",
    // flex: 1,
    // width: wp(120),
  },
  arrpercent: { flexDirection: "row", alignItems: "center" },

  customer: { fontSize: hp(12), fontWeight: "bold" },

  amountstat: { fontSize: hp(14), width: wp(120) },
});

export default OrdersTable;
