import { FlatList, Text } from "react-native";
import { Container, Item } from "./styles";
import { Header } from "@components/Header";
import { PercentCard } from "@components/PercentCard";
import { Button } from "@components/Button/Button";
import { DailyCard } from "@components/DailyCard";
import { ListEmpty } from "@components/ListEmpty";
import { DailyDietType } from "src/@types/DailyDietType";

export function Home() {
  const dailyDietList: DailyDietType[] = [
    {
      date: "22.10.2023",
      meals: [
        {
          hour: "10:00",
          meal: "Hamburguer",
          status: "not-healthy",
        },
        {
          hour: "10:01",
          meal: "Salad",
          status: "healthy",
        },
      ],
    },
    {
      date: "23.10.2023",
      meals: [
        {
          hour: "10:00",
          meal: "Hamburguer",
          status: "not-healthy",
        },
        {
          hour: "10:01",
          meal: "Salad",
          status: "healthy",
        },
      ],
    },
  ];
  return (
    <Container>
      <Header />
      <PercentCard percent={98} />
      <Item>Refeições</Item>
      <Button label="Nova refeição" icon="plus" themeButtonStyle="dark" />
      <FlatList
        data={dailyDietList}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => <DailyCard dailyDiets={item} />}
        contentContainerStyle={dailyDietList.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal inserir uma refeição?" />
        )}
      />
    </Container>
  );
}
