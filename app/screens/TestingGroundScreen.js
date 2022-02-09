import React, { useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  View,
  TouchableHighlight,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import Screen from "../components/Screen";

function TestingGroundScreen() {
  const [image, setImage] = useState(null);

  const selectImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync();

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const onLongPress = () => {
    Alert.alert("", "Are you sure you want to delete this item?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "Yes", onPress: () => setImage(null) },
    ]);
  };

  return (
    <Screen style={{ flex: 1, flexDirection: "row" }}>
      {image && (
        <TouchableHighlight
          onLongPress={onLongPress}
          style={{ height: 100, width: 100 }}
        >
          <Image source={{ uri: image }} style={{ height: 100, width: 100 }} />
        </TouchableHighlight>
      )}
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="camera"
          size={50}
          color="black"
          onPress={selectImage}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "tomato",
    height: 100,
    width: 100,
  },
});

export default TestingGroundScreen;
