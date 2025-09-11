import { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button, Alert } from "react-native";
import ImageSelector from "../components/ImageSelector";
import { useAppDispatch } from "../hooks/reduxHooks";
import { addProduct } from "../slices/products";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ProductsStackParamList } from "../navigation/ProductsNavigator";
import { useNavigation } from "@react-navigation/native";

type ProductDetailsNavigationProp = NativeStackNavigationProp<
  ProductsStackParamList,
  "ProductDetails"
>;

const AddNewProductScreen = () => {
  const [productTitle, setProductTitle] = useState("");
  const [selectedImage, setSelectedImage] = useState<undefined | string>(
    undefined
  );
  const dispatch = useAppDispatch();
  const navigation = useNavigation<ProductDetailsNavigationProp>();

  const handleSubmit = () => {
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
      />
      <ImageSelector
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
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
