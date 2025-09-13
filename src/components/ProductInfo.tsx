import { useNavigation } from "@react-navigation/native";
import {
  TouchableNativeFeedback,
  View,
  Image,
  Text,
  StyleSheet,
} from "react-native";
import { Product } from "../store/slices/products";
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
        <View style={styles.subContainer}>
          <Text style={styles.text}>{item.name}</Text>
          <Text style={styles.text}>₦ {item.price.toLocaleString()}</Text>
        </View>
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
    color: "white",
  },
  image: {
    height: 200,
    width: "100%",
  },
  container: {
    flex: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: "#f7f7f7",
    paddingVertical: 20,
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "green",
    backgroundColor: "green",
    paddingHorizontal: 5,
    paddingVertical: 3,
    marginTop: 6,
    borderRadius: 4,
  },
});
