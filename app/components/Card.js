import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
// import { Image } from "react-native-expo-image-cache";

import AppText from "./Text";
import colors from "../config/colors";

function Card({ title, subTitle, imageUrl, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} tint={"light"} source={{ uri: imageUrl }} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    margin: 20,
    marginVertical: 10,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 10,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
  },
  subTitle: {
    color: colors.secondary,
    fontSize: 15,
    marginTop: 10,
  },
});

export default Card;
