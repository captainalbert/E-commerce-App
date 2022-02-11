import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AccountScreen from "./app/screens/AccountScreen";
import MessageScreen from "./app/screens/MessageScreen";

import ListingDetailScreen from "./app/screens/ListingDetailsScreen";
import ListingScreen from "./app/screens/ListingScreen";
import Card from "./app/components/Card";

const Stack = createStackNavigator();

// Nav routes for ListingScreen
const FeedNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={ListingScreen} />
      <Stack.Screen
        name="ListingDetailScreen"
        component={ListingDetailScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
      <Stack.Screen name="Card" component={Card} />
    </Stack.Navigator>
  );
};

// Nav routes for AccountsScreen
const AccountNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="My Listings" component={ListingScreen} />
      <Stack.Screen name="My Messages" component={MessageScreen} />
      <Stack.Screen name="Card" component={Card} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Accounts"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
