import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation/RootNav";
import { Provider } from "react-redux";
import { store } from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}
