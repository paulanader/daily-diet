import { ArrowUpRight } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type PercentProps = {
  dietLimit?: boolean;
};

export const Container = styled.View<PercentProps>`
  width: 100%;
  border-radius: 6px;
  padding: 15px;
  margin-bottom: 24px;

  ${({ theme, dietLimit }) => css`
    background-color: ${dietLimit
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT};
  `}
`;

export const Content = styled.View`
  align-items: center;
  justify-content: center;
  padding-bottom: 12px;
`;

export const PercentValue = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  font-weight: bold;
`;

export const PercentMessage = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_2};
  font-size: ${({ theme }) => theme.FONT_SIZE.XSM}px;
`;

export const OpenButton = styled(TouchableOpacity)`
  background-color: transparent !important;
  border: none;
  align-self: flex-end;
  justify-content: end;
`;

export const Icon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 23,
  color: theme.COLORS.GREEN_DARK,
}))`
  align-self: center;
`;
