import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "../components/Text";
import ListItem from "../components/lists/ListItem";
import colors from "../config/colors";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/chair.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>HighMinds Clothing T-Shirt</AppText>
        {/* NOTE: Customized text for price because the AppText style can't be overriden. EDIT: FIXED: pass style as props*/}
        <AppText style={styles.price}>$59.99</AppText>

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
