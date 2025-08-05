import { Text, StyleSheet, View, ViewStyle } from "react-native";

type ClaimsCardProps = {
  value: string;
  claimsType: string;
  type: "total" | "completed";
};

export default function ClaimsCard({
  value,
  claimsType,
  type,
}: ClaimsCardProps) {
  const typeStyles: Record<ClaimsCardProps["type"], ViewStyle> = {
    total: styles.total,
    completed: styles.completed,
  };
  const typeStyle = typeStyles[type];

  return (
    <View style={[styles.general, typeStyles[type]]}>
      <Text style={{ fontWeight: 700, fontSize: 23, color: "#f4fbfd" }}>
        {value}
      </Text>
      <Text style={{ fontWeight: 500, fontSize: 10, color: "#f4fbfd" }}>
        {claimsType}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  general: {
    flex: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 16,
  },
  total: {
    backgroundColor: "#405b70",
  },
  completed: {
    backgroundColor: "#6b35d3",
  },
});
