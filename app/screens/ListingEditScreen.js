import React from "react";

import { StyleSheet } from "react-native";
import { useFormikContext } from "formik";
import * as Yup from "yup";

// import {
//   AppForm,
//   AppFormField,
//   ErrorMessage,
//   SubmitButton,
// } from "../components/forms";

import AppForm from "../components/forms/AppForm";
import AppFormField from "../components/forms/AppFormField";
import SubmitButton from "../components/forms/SubmitButton";

import Screen from "../components/Screen";
import AppFormPicker from "../components/forms/AppFormPicker";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(100000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Appliance", value: 3 },
];

function ListingEditScreen(props) {
  // const {setFieldTouched, handleChange, errors, touched}= useFormikContext();

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="title"
          keyboardType="default"
          maxLength={100}
          placeholder="Item name"
        />

        <AppFormField name="price" keyboardType="numeric" placeholder="Price" />

        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
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
