import { Text, View } from "react-native";
import { MealsType } from "src/@types/MealsType";
import { CircleStatus, Container, HourContent } from "./styles";

type MealProps = {
  meal: MealsType;
};

export const MealCard = ({ meal }: MealProps) => {
  return (
    <Container>
      <HourContent>
        <Text>{meal?.hour}</Text>
      </HourContent>
      <Text>{meal?.meal}</Text>
      <CircleStatus healthStatus={meal?.status} />
    </Container>
  );
};
