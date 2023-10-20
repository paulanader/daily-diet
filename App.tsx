import { Routes } from "@routes/index";
import theme from "./src/theme";
import { ThemeProvider } from "styled-components";

import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}
