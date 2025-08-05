import React from "react";
import { Tabs } from "expo-router";
import CustomTabBar from "../../components/customTabBar";

export default function TabLayout() {
  return (
    <Tabs
      // This is the key line: we render a custom component for the tab bar.
      initialRouteName="home"
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="claims" options={{ title: "Claims" }} />
      <Tabs.Screen name="estimate" options={{ title: "Estimate" }} />
      <Tabs.Screen name="settings" options={{ title: "Settings" }} />
    </Tabs>
  );
}
