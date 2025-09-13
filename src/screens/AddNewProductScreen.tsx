import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert, Keyboard, ScrollView, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import ImageSelector from "../components/ImageSelector";
import CustomButton from "../components/ui/CustomButton";
import { useAppDispatch } from "../hooks/reduxHooks";
import { ProductDetailsNavigationProp } from "../navigation/types";
import { addProduct, selectProducts } from "../store/slices/products";
import { validateInput } from "../utils";
import FormItem from "../components/FormItem";

const AddNewProductScreen = () => {
  const [productTitle, setProductTitle] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [selectedImage, setSelectedImage] = useState<undefined | string>(
    undefined
  );

  const dispatch = useAppDispatch();
  const products = useSelector(selectProducts);
  const navigation = useNavigation<ProductDetailsNavigationProp>();

  const handleImageSelect = (imageUri: string) => {
    Keyboard.dismiss();
    setSelectedImage(imageUri);
  };

  const handleSubmit = () => {
    const { error } = validateInput({
      products,
      productPrice,
      productTitle,
      selectedImage,
    });

    if (error) {
      alert(error);
      return;
    }

    dispatch(
      addProduct({
        name: productTitle,
        imageUrl: selectedImage!,
        id: Date.now().toLocaleString(),
        price: Number(Number(productPrice).toFixed(2)),
      })
    );
    setProductTitle("");
    setSelectedImage("");
    setProductPrice("");
    Alert.alert("New product added successfully", "", [
      {
        text: "OK",
        onPress: () => navigation.goBack(),
      },
    ]);
  };
  return (
    <ScrollView style={styles.screen}>
      <FormItem
        label="Product name"
        value={productTitle}
        setValue={setProductTitle}
      />
      <FormItem
        label="Product price"
        value={productPrice}
        setValue={setProductPrice}
      />
      <ImageSelector
        selectedImage={selectedImage}
        handleImageSelect={handleImageSelect}
      />
      <CustomButton buttonText="Add Product" onClick={handleSubmit} />
    </ScrollView>
  );
};

export default AddNewProductScreen;

const styles = StyleSheet.create({
  screen: {
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 20,
    flex: 1,
  },
});
