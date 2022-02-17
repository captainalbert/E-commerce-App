import React from "react";
import AnimatedLottieView from "lottie-react-native";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;

  return (
    <AnimatedLottieView
      style={{
        width: 400,
        height: 400,
        backgroundColor: "#eee",
      }}
      autoplay
      loop
      source={require("../assets/animations/4dots-loader.json")}
    />
  );
}

export default ActivityIndicator;
