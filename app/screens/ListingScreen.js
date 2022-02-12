import React from "react";
import colors from "../config/colors";
import routes from "../navigation/routes";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import Screen from "../components/Screen";

const listings = [
  {
    id: 1,
    title: "Old Chair",
    price: 100,
    image: require("../assets/chair.jpg"),
  },
  {
    id: 2,
    title: "New Chair",
    price: 300,
    image: require("../assets/chair.jpg"),
  },
];

function ListingScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
            onPress={() =>
              navigation.navigate(routes.LISTING_DETAIL_SCREEN, item)
            }
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
});

export default ListingScreen;
