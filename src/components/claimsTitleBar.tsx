import { Text, StyleSheet, View } from "react-native";

export default function ClaimsTitleBar() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ongoing Claims</Text>
      <Text style={[styles.text, { color: "#e8ab6d" }]}>All Claims</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 21,
  },
  text: {
    fontSize: 14,
    fontWeight: "700",
  },
});
