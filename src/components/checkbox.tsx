import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Example using Ionicons from Expo

const MyCustomCheckbox = () => {
  const [isChecked, setChecked] = useState(false);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setChecked(!isChecked)}
    >
      <Ionicons
        name={isChecked ? "checkbox-outline" : "square-outline"}
        size={20}
        color={isChecked ? "#a5a5a1" : "#a5a5a5"}
        // style={{ borderWidth: 3 }}
      />
      <Text style={styles.label}>Remember me</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    // padding: 13,
  },
  label: {
    marginLeft: 3,
    color: "#a5a5a5",
    fontWeight: "600",
    fontSize: 13,
  },
});

export default MyCustomCheckbox;
