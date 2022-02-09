import React, { useState } from "react";

import { StyleSheet } from "react-native";
import * as Yup from "yup";
import * as ImagePicker from "expo-image-picker";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms/Index";
import CategoryPickerItem from "../components/CategoryPickerItem";
import ImageInput from "../components/ImageInput";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  price: Yup.number().required().min(1).max(100000).label("Price"),
  title: Yup.string().required().min(1).label("Title"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Furniture", value: 1, backgroundColor: "red", icon: "apps" },
  { label: "Clothing", value: 2, backgroundColor: "green", icon: "email" },
  { label: "Appliance", value: 3, backgroundColor: "blue", icon: "lock" },
  { label: "Electronics", value: 4, backgroundColor: "pink", icon: "key" },
];

function ListingEditScreen(props) {
  const [image, setImage] = useState(null);

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          image: null,
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <ImageInput imageUri={image} onChangeImage={(uri) => setImage(uri)} />

        <AppFormField
          name="title"
          keyboardType="default"
          maxLength={100}
          placeholder="Item name"
        />

        <AppFormField
          maxLength={8}
          name="price"
          keyboardType="numeric"
          placeholder="Price"
          width={120}
        />

        <AppFormPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width={120}
        />

        <AppFormField
          name="description"
          keyboardType="default"
          multiline
          numberOfLines={4}
          placeholder="Description"
        />

        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListingEditScreen;
