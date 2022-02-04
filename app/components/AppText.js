import React from "react";
import { Text } from "react-native";
import defaultStyles from "../config/styles";

function AppText({ children, ...props }) {
  return <Text style={[defaultStyles.text, props.style]}>{children}</Text>;
}

export default AppText;
