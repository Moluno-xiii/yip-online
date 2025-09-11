import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from "react-native";
import HeaderIcon from "../components/ui/HeaderIcon";
import { useAppSelector } from "../hooks/reduxHooks";
import { ProductsStackParamList } from "../navigation/ProductsNavigator";
import { Product, selectProducts } from "../slices/products";

type ProductsScreenNavigationProp = NativeStackNavigationProp<
  ProductsStackParamList,
  "ProductsList"
>;

const ProductsScreen = () => {
  const navigation = useNavigation<ProductsScreenNavigationProp>();

  const products = useAppSelector(selectProducts);
  console.log(products);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderIcon
          name="add-circle"
          onPress={() => navigation.navigate("AddProduct")}
        />
      ),
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>Products screen</Text>
      {products.length < 1 ? (
        <Text style={{ color: "tomato", fontSize: 22, textAlign: "center" }}>
          No products added yet.
        </Text>
      ) : (
        <FlatList
          renderItem={({ item }) => <ProductInfo item={item} />}
          data={products}
        />
      )}
    </View>
  );
};

export default ProductsScreen;

const ProductInfo = ({ item }: { item: Product }) => {
  const navigation = useNavigation<ProductsScreenNavigationProp>();
  return (
    <TouchableNativeFeedback
      onPress={() =>
        navigation.navigate("ProductDetails", { productId: item.id })
      }
    >
      <View style={{ flex: 1, marginBottom: 10 }}>
        <Image
          source={{ uri: item.imageUrl }}
          style={{ height: 200, width: "100%" }}
        />
        <Text
          style={{
            textAlign: "center",
            fontSize: 18,
            textTransform: "uppercase",
          }}
        >
          {item.name}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    marginHorizontal: 10,
  },
});
