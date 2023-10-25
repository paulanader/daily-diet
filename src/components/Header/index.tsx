import { Image, View } from "react-native";
import userImage from "@assets/ellipse.png";
import logo from "@assets/dailyDietLogo.png";
import { Container } from "./styles";

export const Header = () => {
  return (
    <Container>
      <Image source={logo} />
      <Image source={userImage} />
    </Container>
  );
};
