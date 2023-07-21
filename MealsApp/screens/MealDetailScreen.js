import {Text, View, Image, StyleSheet, ScrollView, Button} from "react-native";
import {useLayoutEffect} from "react";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";

export default function MealDetailScreen({ route, navigation }) {
  const { mealId } = route.params;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const headerButtonPressHandler = () => {
      alert("Pressed");
  }

  useLayoutEffect(() => {
      navigation.setOptions({
          headerRight: () => <IconButton name="star-outline" />
      })
  }, [navigation, headerButtonPressHandler])

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        duration={selectedMeal.duration}
      />

      <Subtitle>Ingredients</Subtitle>

      <List data={selectedMeal.ingredients} />

      <Subtitle>Steps</Subtitle>

      <List data={selectedMeal.steps} />

      <View style={{ height: 30 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
});
