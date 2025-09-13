import { SetStateAction } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface PropTypes {
  setValue: React.Dispatch<SetStateAction<string>>;
  value: string;
  label: string;
}
const FormItem = ({ setValue, value, label }: PropTypes) => {
  return (
    <View style={styles.formItem}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={setValue}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  textInput: {
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
    borderRadius: 5,
    height: 35,
    paddingLeft: 10,
  },
  formItem: {
    columnGap: 10,
  },
});

export default FormItem;
