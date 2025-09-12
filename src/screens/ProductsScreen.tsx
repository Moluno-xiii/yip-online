import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Alert, Button, FlatList, StyleSheet, Text, View } from "react-native";
import EmptyState from "../components/ui/EmptyState";
import HeaderIcon from "../components/ui/HeaderIcon";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { ProductsScreenNavigationProp } from "../navigation/types";
import { deleteAllProducts, selectProducts } from "../slices/products";
import ProductInfo from "../components/ProductInfo";

const ProductsScreen = () => {
  const navigation = useNavigation<ProductsScreenNavigationProp>();
  const products = useAppSelector(selectProducts);
  const dispatch = useAppDispatch();

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

  const triggerAlert = () => {
    Alert.alert(
      "Delete all products",
      "Are you sure you want to delete all products ?",
      [
        {
          text: "Cancel",
        },
        {
          text: "Yes",
          onPress: () => dispatch(deleteAllProducts()),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>Products screen</Text>
      {products.length < 1 ? (
        <EmptyState
          onClick={() => navigation.navigate("AddProduct")}
          emptyStateText="No products added yet"
          buttonText="Add new product"
        />
      ) : (
        <View style={styles.products}>
          <View style={styles.cta}>
            <Text>Total Products : {products.length}</Text>
            <Button
              title="Delete all products"
              color={"tomato"}
              onPress={triggerAlert}
            />
          </View>
          <FlatList
            renderItem={({ item }) => <ProductInfo item={item} />}
            data={products}
          />
        </View>
      )}
    </View>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    marginHorizontal: 10,
  },
  cta: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  products: { flex: 1, gap: 20 },
});
