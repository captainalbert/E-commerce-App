import React, { useState, useEffect } from "react";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import routes from "../navigation/routes";
import { FlatList, StyleSheet } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import AppText from "../components/Text";
import Button from "../components/Button";
import Card from "../components/Card";
import Screen from "../components/Screen";

function ListingScreen({ navigation }) {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadListings();
  }, []);

  //API call for listing data
  const loadListings = async () => {
    setIsLoading(true);
    const response = await listingsApi.getListings();
    setIsLoading(false);

    if (!response.ok) return setError(true);

    setError(false);
    setListings(response.data);
  };
  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Couldn't retrieve the listings. Please retry.</AppText>
          <Button title="Retry" onPress={loadListings} />
        </>
      )}
      {isLoading ? (
        <ActivityIndicator visible={true} />
      ) : (
        <FlatList
          data={listings}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={"$" + item.price}
              imageUrl={item.images[0].url}
              onPress={() =>
                navigation.navigate(routes.LISTING_DETAIL_SCREEN, item)
              }
            />
          )}
        />
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
});

export default ListingScreen;
