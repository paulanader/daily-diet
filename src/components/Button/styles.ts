import { PencilSimpleLine, Plus, Trash } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type Props = "dark" | "light";

type StyleProps = {
  themeButtonStyle: Props;
};

export const Container = styled(TouchableOpacity)<StyleProps>`
  border-radius: 6px;
  padding: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 2;

  ${({ theme, themeButtonStyle }) => css`
    background-color: ${themeButtonStyle === "dark"
      ? theme.COLORS.GRAY_2
      : theme.COLORS.WHITE};

    color: ${themeButtonStyle === "dark"
      ? theme.COLORS.WHITE
      : theme.COLORS.GRAY_2};
  `}
`;

export const ButtonLabel = styled.Text<StyleProps>`
  ${({ theme, themeButtonStyle }) => css`
    color: ${themeButtonStyle === "dark"
      ? theme.COLORS.WHITE
      : theme.COLORS.GRAY_2};
  `}
`;

export const PlusIcon = styled(Plus).attrs<StyleProps>(
  ({ theme, themeButtonStyle }) => ({
    size: 15,
    color:
      themeButtonStyle === "dark" ? theme.COLORS.WHITE : theme.COLORS.GRAY_2,
    backgroundColor:
      themeButtonStyle === "dark" ? theme.COLORS.GRAY_2 : theme.COLORS.WHITE,
  })
)`
  align-self: center;
`;

export const EditIcon = styled(PencilSimpleLine).attrs<StyleProps>(
  ({ theme, themeButtonStyle }) => ({
    size: 15,
    color:
      themeButtonStyle === "dark" ? theme.COLORS.WHITE : theme.COLORS.GRAY_2,
    backgroundColor:
      themeButtonStyle === "dark" ? theme.COLORS.GRAY_2 : theme.COLORS.WHITE,
  })
)`
  align-self: center;
`;

export const DeleteIcon = styled(Trash).attrs<StyleProps>(
  ({ theme, themeButtonStyle }) => ({
    size: 15,
    color:
      themeButtonStyle === "dark" ? theme.COLORS.WHITE : theme.COLORS.GRAY_2,
    backgroundColor:
      themeButtonStyle === "dark" ? theme.COLORS.GRAY_2 : theme.COLORS.WHITE,
  })
)`
  align-self: center;
`;
