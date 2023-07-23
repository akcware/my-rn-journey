import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useContext, useLayoutEffect } from "react";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import {useDispatch, useSelector} from "react-redux";
import {addFavorite, removeFavorite} from "../store/redux/favorites";
// import { FavoritesContext } from "../store/context/favorites-context";

export default function MealDetailScreen({ route, navigation }) {
  // const favoriteMealContext = useContext(FavoritesContext);
  const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids)
  const dispatch = useDispatch()

  const { mealId } = route.params;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const mealIsFavorite = favoriteMealsIds.includes(mealId);

  const changeFavoriteStatusHandler = () => {
    if (mealIsFavorite) {
      // favoriteMealContext.removeFavorite(mealId)
      dispatch(removeFavorite({id: mealId}))
    } else {
      // favoriteMealContext.addFavorite(mealId)
      dispatch(addFavorite({id: mealId}))

    }
  };

  useLayoutEffect(() => {
    const handleFavorite = mealIsFavorite ? "star" : "star-outline";

    navigation.setOptions({
      headerRight: () => <IconButton name={handleFavorite} onPress={changeFavoriteStatusHandler} />,
    });
  }, [navigation, changeFavoriteStatusHandler]);

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
