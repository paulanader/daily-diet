import { FlatList, Text, View } from "react-native";
import { Container, DateTitle } from "./styles";
import { MealCard } from "@components/MealCard";
import { DailyDietType } from "src/@types/DailyDietType";

type DailyCardProps = {
  dailyDiets: DailyDietType;
};

export const DailyCard = ({ dailyDiets }: DailyCardProps) => {
  return (
    <Container>
      <DateTitle>{dailyDiets?.date}</DateTitle>
      <FlatList
        data={dailyDiets?.meals}
        keyExtractor={(item) => item.hour}
        renderItem={({ item }) => <MealCard meal={item} />}
      />
    </Container>
  );
};
