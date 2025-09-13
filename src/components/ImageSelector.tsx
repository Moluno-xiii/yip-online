import { Button, Image, View } from "react-native";
import * as ImagePicker from "expo-image-picker";

interface PropTypes {
  selectedImage: string | undefined;
  handleImageSelect: (imageUrl: string) => void;
}
const ImageSelector = ({ handleImageSelect, selectedImage }: PropTypes) => {
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
      aspect: [4, 3],
    });

    if (!result.canceled) {
      handleImageSelect(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };
  return (
    <View style={{ flex: 1, alignItems: "center", marginBottom: 20 }}>
      {selectedImage ? (
        <Image
          source={{ uri: selectedImage }}
          style={{ width: "100%", height: 300, marginVertical: 10 }}
        />
      ) : null}
      <Button
        title={selectedImage ? "Change image" : "Select an image"}
        onPress={pickImageAsync}
        color={"#25292e"}
      />
    </View>
  );
};

export default ImageSelector;
