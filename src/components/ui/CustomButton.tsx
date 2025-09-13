import { StyleSheet, View, Text, TouchableNativeFeedback } from "react-native";

interface PropTypes {
  buttonText: string;
  onClick?: () => void;
  color?: string;
}
const CustomButton = ({ onClick, buttonText, color }: PropTypes) => {
  return (
    <TouchableNativeFeedback onPress={onClick}>
      <View
        style={{ ...styles.buttonContainer, backgroundColor: color ?? "green" }}
      >
        <Text style={styles.text}>{buttonText}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  screen: { flex: 1 },
  buttonContainer: {
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  text: { color: "white", textAlign: "center" },
});
