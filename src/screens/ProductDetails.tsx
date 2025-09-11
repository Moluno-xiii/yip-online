import { StyleSheet, View, Text } from "react-native";
import { RootNavigatorParamList } from "../navigation/RootNav";
import { RouteProp } from "@react-navigation/native";

type ProductDetailsRouteProp = RouteProp<
  RootNavigatorParamList,
  "ProductDetails"
>;

type Props = {
  route: ProductDetailsRouteProp;
};

const ProductDetails = ({ route }: Props) => {
  const { productId } = route.params;
  console.log("product id", productId);
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>Products screen {productId}</Text>
    </View>
  );
};

export default ProductDetails;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
});
