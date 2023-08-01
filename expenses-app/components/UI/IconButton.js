import { Pressable, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function IconButton({ name="add", size=24, color="white", onPress }) {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      {...{ onPress }}
      
    >
      <View style={styles.buttonContainer}>
        <Ionicons {...{ name, size, color }}  />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2,
    overflow: "hidden",
  },
  pressed: {
    opacity: 0.75,
  },
});
