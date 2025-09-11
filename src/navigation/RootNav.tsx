import HomeScreen from "../screens/HomeScreen";
import ProductsScreen from "../screens/ProductsScreen";
import ProductDetails from "../screens/ProductDetails";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export type RootNavigatorParamList = {
  Home: undefined;
  Products: undefined;
  ProductDetails: { productId: string };
};

const Tab = createBottomTabNavigator<RootNavigatorParamList>();

const RootNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "green",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home" }}
      />
      <Tab.Screen
        name="Products"
        component={ProductsScreen}
        options={{ title: "Products" }}
      />
      <Tab.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{ title: "Products details" }}
      />
    </Tab.Navigator>
  );
};

export default RootNavigator;
