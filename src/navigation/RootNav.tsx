import HomeScreen from "../screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import ProductsNavigator from "./ProductsNavigator";

export type RootTabParamList = {
  Home: undefined;
  Products: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const RootNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "green",
        },
        headerTintColor: "white",
        tabBarActiveTintColor: "green",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ size, color }) => (
            <Ionicons size={size} color={color} name={"home"} />
          ),
        }}
      />
      <Tab.Screen
        name="Products"
        component={ProductsNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons size={size} color={color} name={"list"} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default RootNavigator;
