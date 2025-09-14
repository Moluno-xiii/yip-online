import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation/RootNav";
import { Provider } from "react-redux";
import { store } from "./src/store/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}
