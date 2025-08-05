import { Text, StyleSheet, View } from "react-native";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { JSX } from "react";

type createEstimateCardProps = {
  text: string;
  subText: string;
  type: "create" | "estimate";
};

export default function CreateEstimateCard({
  text,
  subText,
  type,
}: createEstimateCardProps) {
  const typeIcon: Record<createEstimateCardProps["type"], JSX.Element> = {
    create: (
      <MaterialCommunityIcons
        name="office-building-outline"
        size={18}
        color="#6732dc"
      />
    ),
    estimate: (
      <MaterialCommunityIcons
        name="file-document-outline"
        size={18}
        color="#0e6c0a"
      />
    ),
  };
  const selectedTypeIcon = typeIcon[type];

  return (
    <View style={styles.conatainer}>
      {selectedTypeIcon}
      <View style={{ paddingLeft: 8 }}>
        <Text style={{ fontSize: 13, fontWeight: "700", color: "#202020" }}>
          {text}
        </Text>
        <Text style={{ fontSize: 10, fontWeight: "500", color: "#989898" }}>
          {subText}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conatainer: {
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderWidth: 0.5,
    borderColor: "lightgray",
    borderRadius: 25,
    paddingHorizontal: 22,
    paddingVertical: 10,
    backgroundColor: "#ffffff",
    shadowColor: "#d3d3d3",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 7,
  },
});
