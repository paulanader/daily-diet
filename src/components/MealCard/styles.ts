import styled from "styled-components/native";

type StatusProsp = {
  healthStatus: "healthy" | "not-healthy";
};

export const Container = styled.View`
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
  margin-bottom: 12px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 15px;
`;

export const HourContent = styled.View`
  border-right-width: 1px;
  border-right-style: solid;
  border-right-color: ${({ theme }) => theme.COLORS.GRAY_5};
  padding-right: 15px;
`;

export const CircleStatus = styled.View<StatusProsp>`
  width: 15px;
  height: 15px;

  background-color: ${({ theme, healthStatus }) =>
    healthStatus === "healthy" ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};

  border-radius: 50px;
`;
