import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Button } from "react-native";
import { RootNavigatorParamList } from "../navigation/RootNav";

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootNavigatorParamList,
  "Home"
>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>
        Open up App.tsx to start working on your app!
      </Text>
      <Button
        title="Products"
        onPress={() => navigation.navigate("Products")}
      />
      <StatusBar style="auto" />
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
});
