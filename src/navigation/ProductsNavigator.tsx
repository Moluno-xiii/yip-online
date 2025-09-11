import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductsScreen from "../screens/ProductsScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import AddNewProductScreen from "../screens/AddNewProductScreen";

export type ProductsStackParamList = {
  ProductsList: undefined;
  ProductDetails: { productId: string };
  AddProduct: undefined;
};

const ProductsStack = createNativeStackNavigator<ProductsStackParamList>();

const ProductsNavigator = () => {
  return (
    <ProductsStack.Navigator
      initialRouteName="ProductsList"
      screenOptions={{
        headerStyle: {
          backgroundColor: "green",
        },
        headerTintColor: "white",
      }}
    >
      <ProductsStack.Screen
        name="ProductsList"
        component={ProductsScreen}
        options={{ title: "Products" }}
      />
      <ProductsStack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{ title: "Product Details" }}
      />
      <ProductsStack.Screen
        name="AddProduct"
        component={AddNewProductScreen}
        options={{ title: "Add new product" }}
      />
    </ProductsStack.Navigator>
  );
};

export default ProductsNavigator;
