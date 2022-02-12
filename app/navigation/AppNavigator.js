import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import NewListingButton from "./NewListingButton";

import ListingEditScreen from "../screens/ListingEditScreen";
import routes from "./routes";

const Tab = createBottomTabNavigator();
const AppNavigator = () => (
  <Tab.Navigator>
    {/* FEED TAB */}
    <Tab.Screen
      name="Feed"
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />

    {/* EDIT SCREEN TAB */}
    <Tab.Screen
      name="Post Item"
      component={ListingEditScreen}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <NewListingButton
            onPress={() => navigation.navigate(routes.POST_ITEM)}
          />
        ),
      })}
    />

    {/* ACCOUNT TAB */}
    <Tab.Screen
      name="Accounts"
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="account" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
