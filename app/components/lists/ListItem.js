import React from "react";
import { Image, StyleSheet, View, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../Text";
import colors from "../../config/colors";

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
                <AppText style={styles.subTitle} numberOfLines={1}>
                  {subTitle}
                </AppText>
              )}
            </View>
            <MaterialCommunityIcons
              name="chevron-right"
              size={20}
              color={colors.medium}
            />
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 10,
    justifyContent: "center",
  },
  imageContainer: {
    height: 60,
    width: 60,
    marginRight: 10,
    borderRadius: 50,
  },
  title: {
    fontWeight: "bold",
  },
  subTitle: {
    color: colors.medium,
    fontSize: 15,
  },
});
