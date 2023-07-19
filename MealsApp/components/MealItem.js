import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import MealDetails from "./MealDetails";

export default function MealItem({ meal }) {
  const { id, title, imageUrl, duration, complexity, affordability } = meal;
  const navigation = useNavigation();

  const viewDetails = () => {
    navigation.navigate("MealDetail", {
      mealId: id,
    });
  };

  return (
    <View style={styles.outerCard}>
      <Pressable
        android_ripple={{ color: "gray" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={viewDetails}
      >
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.cardText}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetails
          duration={duration}
          complexity={complexity}
          affordability={affordability}
          noBorder={false}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  cardText: {
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    color: "white",
  },
  buttonPressed: {
    opacity: Platform.OS === "ios" ? 0.5 : 1,
  },
  outerCard: {
    margin: 8,
    backgroundColor: "#351401",
    borderRadius: 16,
    overflow: "hidden",

    // shadowColor: "black",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
  },
});
