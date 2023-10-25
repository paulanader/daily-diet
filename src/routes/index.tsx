import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import { useTheme } from "styled-components/native";
import { View } from "react-native";

export function Routes() {
  const { COLORS } = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.WHITE }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
}
