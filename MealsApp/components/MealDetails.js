import { Text, View, StyleSheet } from "react-native";

export default function MealDetails({
  duration,
  complexity,
  affordability,
  noBorder = true,
  style,
    textStyle
}) {
  const borderStyles = {
    borderTopWidth: noBorder ? 0 : 0.5,
    borderColor: "gray",
  };

  return (
    <View style={[styles.details, borderStyles, style]}>
      <Text style={[styles.detailItem, textStyle]}>{duration} MINS</Text>
      <Text style={[styles.detailItem, textStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detailItem, textStyle]}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "space-around",
  },

  detailItem: {
    marginHorizontal: 8,
    fontSize: 12,
    color: "gray",
  },
});
