import React, { useEffect } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  View,
  TouchableHighlight,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import colors from "../config/colors";
import Screen from "./Screen";

function ImageInput({ imageUri, onChangeImage }) {
  useEffect(() => {
    requestPermission();
  }, []);

  // Function that requests permission to access media files
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!granted) {
      alert("You need to give permission to access camera roll.");
    }
  };

  // Function that selects the image
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      console.log(result);
      if (!result.cancelled) {
        onChangeImage(result.uri);
      }
    } catch (error) {
      console.log("Error reading image", error);
    }
  };

  // Function that handles delete
  const handleDelete = () => {
    if (!imageUri) selectImage();
    else {
      Alert.alert("", "Are you sure you want to delete this item?", [
        { text: "Cancel" },
        { text: "Yes", onPress: () => onChangeImage(null) },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      {!imageUri && (
        <MaterialCommunityIcons
          name="camera"
          size={50}
          color={colors.medium}
          onPress={selectImage}
        />
      )}
      {imageUri && (
        <TouchableHighlight onLongPress={handleDelete} style={styles.touchable}>
          <Image source={{ uri: imageUri }} style={styles.image} />
        </TouchableHighlight>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.light,
    marginBottom: 10,
    borderRadius: 15,
    height: 100,
    width: 100,
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 15,
  },
  touchable: {
    height: 100,
    width: 100,
    marginRight: 5,
    borderRadius: 15,
  },
});

export default ImageInput;
