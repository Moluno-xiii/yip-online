import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StyleSheet, View, Text, Button } from "react-native";
import { RootNavigatorParamList } from "../navigation/RootNav";

type ProductsScreenNavigationProp = NativeStackNavigationProp<
  RootNavigatorParamList,
  "Home"
>;

const ProductsScreen = () => {
  const navigation = useNavigation<ProductsScreenNavigationProp>();
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>Products screen</Text>
      <Button
        title="Product details"
        onPress={() =>
          navigation.navigate("ProductDetails", {
            productId: "1",
          })
        }
      />
    </View>
  );
};

export default ProductsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
});
