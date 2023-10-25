import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE};
    color: ${theme.COLORS.WHITE};
  `}
`;

export const Item = styled.Text`
  margin-bottom: 5px;

  ${({ theme }) => css`
    color: ${({ theme }) => theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;
