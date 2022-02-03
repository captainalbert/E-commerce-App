import React from "react";
import { Image, StyleSheet, View, TouchableHighlight } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";

import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";

export default function ListItem({
  title,
  subTitle,
  image,
  iconComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
          <View style={styles.container}>
            {iconComponent}
            {image && <Image style={styles.imageContainer} source={image} />}
            <View style={styles.detailsContainer}>
              <AppText style={styles.title}>{title}</AppText>
              {subTitle && (
                <AppText style={styles.subTitle}>{subTitle}</AppText>
              )}
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    flexDirection: "column",
    marginLeft: 10,
    justifyContent: "center",
  },
  imageContainer: {
    height: 60,
    width: 60,
    marginRight: 10,
    borderRadius: 50,
    // backgroundColor: colors.primary,
  },
  title: {
    fontWeight: "bold",
  },
  subTitle: {
    color: colors.medium,
    fontSize: 15,
  },
});
