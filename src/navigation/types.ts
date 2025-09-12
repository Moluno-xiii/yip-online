import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootTabParamList = {
  Home: undefined;
  Products: undefined;
};

type ProductsStackParamList = {
  ProductsList: undefined;
  ProductDetails: { productId: string };
  AddProduct: undefined;
};

type ProductsScreenNavigationProp = NativeStackNavigationProp<
  ProductsStackParamList,
  "ProductsList"
>;

type HomeScreenNavigationProp = BottomTabNavigationProp<
  RootTabParamList,
  "Home"
>;

type ProductDetailsNavigationProp = NativeStackNavigationProp<
  ProductsStackParamList,
  "ProductDetails"
>;

export type {
  ProductsScreenNavigationProp,
  RootTabParamList,
  HomeScreenNavigationProp,
  ProductsStackParamList,
  ProductDetailsNavigationProp,
};
