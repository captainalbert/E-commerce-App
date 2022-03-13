import React from "react";
import { View, StyleSheet, Image } from "react-native";

import colors from "../config/colors";

import AppText from "../components/Text";
import ListItem from "../components/lists/ListItem";

function ListingDetailsScreen({ route }) {
  const listing = route.params;
  return (
    <View>
      <Image style={styles.image} source={listing.images[0].url} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        {/* NOTE: Customized text for price because the AppText style can't be overriden. EDIT: FIXED: pass style as props*/}
        <AppText style={styles.price}>${listing.price}</AppText>

        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/chair.jpg")}
            title="Mosh Hamedani"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 400,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 50,
  },
});

export default ListingDetailsScreen;
