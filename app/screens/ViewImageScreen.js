import React from "react";
import { Image, StyleSheet, View } from "react-native";

import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" size={30} color="white" />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={30}
          color="white"
        />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
