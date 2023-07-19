import { Text, View, StyleSheet } from "react-native";

export default function Subtitle({children}) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    subtitle: {
        color: "#c97139",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
    subtitleContainer: {
        borderBottomColor: "#c97139",
        borderBottomWidth: 1,
        marginVertical: 4,
        padding: 6,
        marginHorizontal: "20%",
    },
})
