import { Button, Image, Keyboard, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { SetStateAction } from "react";

interface PropTypes {
  selectedImage: string | undefined;
  setSelectedImage: React.Dispatch<SetStateAction<string | undefined>>;
}
const ImageSelector = ({ setSelectedImage, selectedImage }: PropTypes) => {
  const pickImageAsync = async () => {
    Keyboard.dismiss();
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
      aspect: [4, 3],
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
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
