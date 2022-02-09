import { Picker } from "react-native-web";
import ImageInput from "./app/components/ImageInput";
import Screen from "./app/components/Screen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListingScreen from "./app/screens/ListingScreen";
import LoginScreen from "./app/screens/LoginScreen";
import MessageScreen from "./app/screens/MessageScreen";
import TestingGroundScreen from "./app/screens/TestingGroundScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import { View } from "react-native";
import AppPicker from "./app/components/Picker";

export default function App() {
  return (
    <Screen>
      <ListingEditScreen />
    </Screen>
  );
}

// import React, { useEffect, useState } from "react";
// import * as ImagePicker from "expo-image-picker";

// import ImageInput from "./app/components/ImageInput";
// import Screen from "./app/components/Screen";
// import { Button, Image } from "react-native";

// function App() {
//   const [image, setImage] = useState(null);

//   const selectImage = async () => {
//     try {
//       const result = await ImagePicker.launchImageLibraryAsync();
//       console.log(result);
//       if (!result.cancelled) {
//         setImage(result.uri);
//       }
//     } catch (error) {
//       console.log("Error reading an image.");
//     }
//   };

//   return (
//     <Screen>
//       {/* <Button title="Select Image" onPress={selectImage} />
//       <Image source={{ uri: image }} style={{ width: 200, height: 200 }} /> */}
//       <ImageInput imageUri={image} onChangeImage={(uri) => setImage(uri)} />
//     </Screen>
//   );
// }

// export default App;
