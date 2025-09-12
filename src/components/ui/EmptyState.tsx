import { StyleSheet, Text, View } from "react-native";
import CustomButton from "./CustomButton";

interface PropTypes {
  emptyStateText: string;
  buttonText: string;
  onClick: () => void;
}

const EmptyState = ({ emptyStateText, buttonText, onClick }: PropTypes) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{emptyStateText}</Text>
      <CustomButton onClick={onClick} buttonText={buttonText} />
    </View>
  );
};

export default EmptyState;

const styles = StyleSheet.create({
  screen: { flex: 1 },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: { color: "tomato", fontSize: 22, textAlign: "center" },
});
