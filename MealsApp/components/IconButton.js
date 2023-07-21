import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function IconButton(props) {
  const { name="add", size=24, color="white", onPress } = props;

  return (
    <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
      <Ionicons name={name} size={size} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7,
    }
})
