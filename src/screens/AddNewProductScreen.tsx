import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert, ScrollView, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import FormItem from "../components/FormItem";
import ImageSelector from "../components/ImageSelector";
import CustomButton from "../components/ui/CustomButton";
import { useAppDispatch } from "../hooks/reduxHooks";
import { ProductDetailsNavigationProp } from "../navigation/types";
import { addProduct, selectProducts } from "../store/slices/products";
import { validateInput } from "../utils";

const AddNewProductScreen = () => {
  const [productTitle, setProductTitle] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [selectedImage, setSelectedImage] = useState<undefined | string>(
    undefined
  );

  const dispatch = useAppDispatch();
  const products = useSelector(selectProducts);
  const navigation = useNavigation<ProductDetailsNavigationProp>();

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
        setSelectedImage={setSelectedImage}
      />
      <View>
        <CustomButton buttonText="Add Product" onClick={handleSubmit} />
      </View>
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
