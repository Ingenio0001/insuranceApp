import { Text, View, Image, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingBottom: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: "lightgray",
      }}
    >
      <Image
        source={require("../../assets/logo.jpg")}
        style={{ height: 30, width: 30, marginRight: 5 }}
      />
      <View>
        <Text style={[styles.text, { fontSize: 13 }]}>
          Good Afternoon Godsfavour,
        </Text>
        <Text style={[styles.text, { fontSize: 10 }]}>
          Today, August 05, 2025
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#202020",
    fontWeight: "700",
  },
});
