import { useNavigation } from "@react-navigation/native";
import {
  TouchableNativeFeedback,
  View,
  Image,
  Text,
  StyleSheet,
} from "react-native";
import { Product } from "../slices/products";
import { ProductsScreenNavigationProp } from "../navigation/types";

const ProductInfo = ({ item }: { item: Product }) => {
  const navigation = useNavigation<ProductsScreenNavigationProp>();
  return (
    <TouchableNativeFeedback
      onPress={() =>
        navigation.navigate("ProductDetails", { productId: item.id })
      }
    >
      <View style={styles.container}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
        <Text style={styles.text}>{item.name}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export default ProductInfo;

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 18,
    textTransform: "uppercase",
  },
  image: {
    height: 200,
    width: "100%",
  },
  container: {
    flex: 1,
    marginBottom: 10,
  },
});
