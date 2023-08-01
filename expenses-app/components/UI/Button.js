import { View, Pressable, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

export const ButtonMode = {
  FLAT: "flat",
  NORMAL: "normal",
};

export default function Button({
  children,
  onPress,
  mode = ButtonMode.NORMAL,
  style
}) {
  return (
    <View style={style}>
      <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
        <View style={[styles.button, (mode === ButtonMode.FLAT && styles.flat)]}>
          <Text style={[styles.buttonText, mode===ButtonMode.FLAT && styles.flatText]}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  flatText: {
    color: GlobalStyles.colors.primary200,
  },
  pressed: {
    opacity: 0.6,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4,
  },
});
