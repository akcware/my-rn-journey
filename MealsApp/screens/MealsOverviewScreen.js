import { useLayoutEffect } from "react";

import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

export default function MealsOverviewScreen({ route, navigation }) {
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(categoryId) >= 0,
  );

  useLayoutEffect(() => {
    const catTitle = CATEGORIES.find(
      (category) => category.id === categoryId,
    ).title;

    navigation.setOptions({
      title: catTitle,
    });
  }, [categoryId, navigation]);

  return <MealsList items={displayedMeals} />
}

