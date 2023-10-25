import styled, { css } from "styled-components/native";

export const Container = styled.View`
  margin-top: 12px;
  margin-bottom: 12px;
`;

export const DateTitle = styled.Text`
  font-weight: bold;
  margin-bottom: 10px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
  `};
`;
