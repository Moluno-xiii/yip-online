import { RouteProp, useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import HeaderIcon from "../components/ui/HeaderIcon";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import {
  ProductDetailsNavigationProp,
  ProductsStackParamList,
} from "../navigation/types";
import { removeProduct, selectProducts } from "../slices/products";

type ProductDetailsRouteProp = RouteProp<
  ProductsStackParamList,
  "ProductDetails"
>;

type Props = {
  route: ProductDetailsRouteProp;
};

const ProductDetailsScreen = ({ route }: Props) => {
  const { productId } = route.params;
  const products = useAppSelector(selectProducts);
  const dispatch = useAppDispatch();

  const product = products.find((product) => product.id === productId);
  const navigation = useNavigation<ProductDetailsNavigationProp>();

  const triggerConfirmDeleteAlert = (id: string) => {
    Alert.alert(
      "Confirm delete product",
      "Are you sure you want to delete this product?",
      [
        {
          text: "No",
        },
        {
          text: "Yes",
          onPress: () => {
            dispatch(removeProduct(id));
            navigation.goBack();
          },
        },
      ]
    );
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: `Product ${product ? product.name : "not found"}`,
      headerRight: () =>
        product ? (
          <HeaderIcon
            name="trash-bin"
            color={"red"}
            onPress={() => {
              triggerConfirmDeleteAlert(product.id);
            }}
          />
        ) : null,
    });
  }, []);

  if (!product)
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Product not found</Text>
        <Button
          title="Go Back"
          color={"red"}
          onPress={() => navigation.goBack()}
        />
      </View>
    );

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.imageUrl }} style={styles.image} />
      <Text style={styles.text}>{product.name}</Text>
    </View>
  );
};

export default ProductDetailsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 15,
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    textTransform: "uppercase",
  },
  image: { height: 200, width: "100%" },
});
