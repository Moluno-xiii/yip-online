import { useNavigation } from "@react-navigation/native";
import { useRef, useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useSelector } from "react-redux";
import ImageSelector from "../components/ImageSelector";
import { useAppDispatch } from "../hooks/reduxHooks";
import { ProductDetailsNavigationProp } from "../navigation/types";
import { addProduct, selectProducts } from "../slices/products";

const AddNewProductScreen = () => {
  const [productTitle, setProductTitle] = useState("");
  const [selectedImage, setSelectedImage] = useState<undefined | string>(
    undefined
  );
  const dispatch = useAppDispatch();
  const products = useSelector(selectProducts);
  const navigation = useNavigation<ProductDetailsNavigationProp>();

  const inputRef = useRef<TextInput>(null);

  const handleImageSelect = (imageUri: string) => {
    setSelectedImage(imageUri);
    inputRef.current?.blur();
  };

  const handleSubmit = () => {
    if (products.length >= 5) {
      alert(
        "You've reached the maximum allowed capacity (5) for products, delete an existing product before you can add another."
      );
      return;
    }

    if (productTitle.length < 1) {
      alert("Product name is required!");
      return;
    }

    if (!selectedImage) {
      alert("You haven't selected any Image.");
      return;
    }

    dispatch(
      addProduct({
        name: productTitle,
        imageUrl: selectedImage,
        id: Date.now().toLocaleString(),
      })
    );
    setProductTitle("");
    setSelectedImage("");
    Alert.alert("New product added successfully", "", [
      {
        text: "OK",
        onPress: () => navigation.goBack(),
      },
    ]);
  };
  return (
    <View style={styles.screen}>
      <Text style={styles.label}>Product name</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={setProductTitle}
        value={productTitle}
        ref={inputRef}
      />
      <ImageSelector
        selectedImage={selectedImage}
        handleImageSelect={handleImageSelect}
      />
      <Button title="Add Product" onPress={handleSubmit} color={"green"} />
    </View>
  );
};

export default AddNewProductScreen;

const styles = StyleSheet.create({
  screen: { flex: 1, marginHorizontal: 10, marginTop: 10, marginBottom: 20 },
  label: {
    fontSize: 22,
    marginBottom: 5,
  },
  textInput: {
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
    borderRadius: 5,
    height: 35,
    paddingLeft: 10,
  },
});
