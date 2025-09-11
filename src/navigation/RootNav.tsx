import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ProductsScreen from "../screens/ProductsScreen";
import ProductDetails from "../screens/ProductDetails";

export type RootNavigatorParamList = {
  Home: undefined;
  Products: undefined;
  ProductDetails: { productId: string };
};

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "green",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home" }}
      />
      <Stack.Screen
        name="Products"
        component={ProductsScreen}
        options={{ title: "Products" }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{ title: "Products details" }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
