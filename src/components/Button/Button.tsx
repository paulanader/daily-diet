import {
  ButtonLabel,
  Container,
  DeleteIcon,
  EditIcon,
  PlusIcon,
  Props,
} from "./styles";
import { Text, TouchableOpacityProps } from "react-native";

type ButtonProps = TouchableOpacityProps & {
  themeButtonStyle: Props;
  label: string;
  icon?: "plus" | "edit" | "delete";
};

export const Button = ({
  label,
  themeButtonStyle = "dark",
  icon,
  ...rest
}: ButtonProps) => {
  return (
    <Container {...rest} themeButtonStyle={themeButtonStyle}>
      {icon === "plus" && <PlusIcon themeButtonStyle={themeButtonStyle} />}
      {icon === "edit" && <EditIcon themeButtonStyle={themeButtonStyle} />}
      {icon === "delete" && <DeleteIcon themeButtonStyle={themeButtonStyle} />}
      <ButtonLabel themeButtonStyle={themeButtonStyle}>{label}</ButtonLabel>
    </Container>
  );
};
