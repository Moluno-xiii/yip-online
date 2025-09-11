import { StyleSheet, View, Text, Button, Image } from "react-native";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import HeaderIcon from "../components/ui/HeaderIcon";
import { ProductsStackParamList } from "../navigation/ProductsNavigator";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { removeProduct, selectProducts } from "../slices/products";

type ProductDetailsRouteProp = RouteProp<
  ProductsStackParamList,
  "ProductDetails"
>;

type ProductDetailsNavigationProp = NativeStackNavigationProp<
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

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: `Product ${product ? product.name : "not found"}`,
      headerRight: () =>
        product ? (
          <HeaderIcon
            name="trash-bin"
            color={"red"}
            onPress={() => {
              dispatch(removeProduct(product.id));
              alert("Product deleted successfully!");
              navigation.goBack();
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
      <Image
        source={{ uri: product.imageUrl }}
        style={{ height: 200, width: "100%" }}
      />
      <Text
        style={{
          textAlign: "center",
          fontSize: 18,
          textTransform: "uppercase",
        }}
      >
        {product.name}
      </Text>
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
});
