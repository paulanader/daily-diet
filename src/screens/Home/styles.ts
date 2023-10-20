import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_1};
    color: ${theme.COLORS.WHITE};
  `}
`;
