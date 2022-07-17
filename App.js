import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { UserContextProvider } from "./src/contexts";
import { Navigation } from "./src/routes";

export default function App() {
  return (
    <UserContextProvider>
      <Navigation />
    </UserContextProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
