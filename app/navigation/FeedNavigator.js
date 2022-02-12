import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListingScreen from "../screens/ListingScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createStackNavigator();
const FeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Feed" component={ListingScreen} />
    <Stack.Screen name="ListingDetailScreen" component={ListingDetailsScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
