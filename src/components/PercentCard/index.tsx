import { Text } from "react-native";
import {
  OpenButton,
  Container,
  Icon,
  PercentMessage,
  PercentValue,
  Content,
} from "./styles";

type PercentCardProps = {
  percent: number;
};

export const PercentCard = ({ percent }: PercentCardProps) => {
  return (
    <Container dietLimit={percent > 50}>
      <OpenButton>
        <Icon />
      </OpenButton>
      <Content>
        <PercentValue>{percent}%</PercentValue>
        <PercentMessage>{`das refeições ${
          percent > 50 ? "dentro" : "fora"
        } da dieta`}</PercentMessage>
      </Content>
    </Container>
  );
};
