// components/TabButton.tsx
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextStyle,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

interface TabButtonProps {
  label: string;
  iconName: string;
  onPress: () => void;
  isFocused: boolean;
}

const TabButton: React.FC<TabButtonProps> = ({
  label,
  iconName,
  onPress,
  isFocused,
}) => {
  const color = isFocused ? "#ac7626" : "#222";
  const iconFinalName = isFocused ? iconName : `${iconName}-outline`;

  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityState={isFocused ? { selected: true } : {}}
      onPress={onPress}
      style={[styles.tabButton, isFocused && styles.focused]}
    >
      <Ionicons name={iconFinalName} size={15} color={color} />
      <Text style={{ ...styles.tabLabel, color } as TextStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tabButton: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  tabLabel: {
    fontSize: 12,
    marginLeft: 3,
    alignSelf: "center",
  },
  focused: {
    backgroundColor: "#fdf5e8",
  },
});

export default TabButton;
