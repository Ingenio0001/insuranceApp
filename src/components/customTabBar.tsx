// components/CustomTabBar.tsx
import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useRouter } from "expo-router";
import TabButton from "./tabButton"; // Import the TabButton component

const icons: Record<string, string> = {
  home: "home",
  claims: "reader",
  estimate: "calculator",
  settings: "settings",
};

const CustomTabBar: React.FC<BottomTabBarProps> = ({ state, descriptors }) => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.tabContainer}>
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;
          const label = (options.title || route.name) as string;
          const iconName = icons[route.name] || "alert-circle"; // Fallback icon

          const onPress = () => {
            if (!isFocused) {
              router.navigate(route.name);
            }
          };

          return (
            <TabButton
              key={route.key}
              label={label}
              iconName={iconName}
              onPress={onPress}
              isFocused={isFocused}
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    // Make the tab bar float
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "transparent",
    marginHorizontal: 2,

    // Add shadow for a floating effect
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  tabBar: {
    flexDirection: "row",
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 30, // Rounded corners for a pill-shaped look
    padding: 10,
    marginHorizontal: 15, // Space from the sides
    // marginBottom: 10, // Space from the bottom edge
    overflow: "hidden", // Ensures shadow doesn't get clipped on Android
  },
});

export default CustomTabBar;
