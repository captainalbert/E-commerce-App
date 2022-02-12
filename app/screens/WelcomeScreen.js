import React from "react";
import routes from "../navigation/routes";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import AppButton from "../components/Button";
import colors from "../config/colors";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/shopeasy-logo.png")}
        />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>

      <View style={styles.buttonContainer}>
        <AppButton
          title="login"
          onPress={() => {
            navigation.navigate(routes.LOGIN);
          }}
        />
        <AppButton
          title="register"
          onPress={() => {
            navigation.navigate(routes.REGISTER);
          }}
          color="secondary"
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
    backgroundColor: colors.primary,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  registerButton: {
    backgroundColor: colors.secondary,
    width: "100%",
    height: 70,
  },
  tagline: {
    fontSize: 20,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
