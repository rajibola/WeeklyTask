import React from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import Profiles from "./myData.js";

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={Profiles}
        renderItem={({ item }) => (
          <View style={styles.view}>
            <Image style={styles.image} source={item.avatar} />

            <View style={styles.details}>
              <Text style={styles.name}>{item.name}</Text>
              <Text>{item.title}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },

  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 50,
    marginRight: 15,
  },

  view: {
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
  },

  details: { justifyContent: "center" },

  name: { fontSize: 25, fontWeight: "bold", marginBottom: 10 },
});
