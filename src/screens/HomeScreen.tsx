import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/ui/CustomButton";
import { HomeScreenNavigationProp } from "../navigation/types";

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Welcome, User.</Text>
      <Text style={styles.subText}>Get started by adding a product.</Text>
      <CustomButton
        buttonText="Products"
        onClick={() => navigation.navigate("Products")}
      />
      <StatusBar style="auto" />
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
  mainText: { color: "#444", fontSize: 18 },
  subText: { fontSize: 13 },
});
