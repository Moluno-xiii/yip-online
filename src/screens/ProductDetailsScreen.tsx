import { RouteProp, useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import HeaderIcon from "../components/ui/HeaderIcon";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import {
  ProductDetailsNavigationProp,
  ProductsStackParamList,
} from "../navigation/types";
import { removeProduct, selectProducts } from "../store/slices/products";
import EmptyState from "../components/ui/EmptyState";

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
      headerTitle: `${product ? product.name : "Product not found"}`,
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
      <EmptyState
        emptyStateText="Product not Found"
        buttonText="Go Back"
        onClick={() => navigation.goBack()}
        color="tomato"
      />
    );

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.imageUrl }} style={styles.image} />
      <Text style={styles.text}>{product.name}</Text>
      <Text style={styles.text}>₦ {product.price}</Text>
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
  image: { minHeight: 200, width: "100%" },
});
