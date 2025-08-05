import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Header from "../../components/header";
import ClaimsCard from "../../components/claimsCard";
import CreateEstimateCard from "../../components/createEstimateCard";
import ClaimsTitleBar from "../../components/claimsTitleBar";
import IndieCard from "../../components/indieCard";

const indieCardData = [
  { key: "indie-1" },
  { key: "indie-2" },
  { key: "indie-3" },
  { key: "indie-4" },
];

const ItemSeparator = () => <View style={styles.separator} />;

export default function App() {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.headerContentContainer}>
        <Header />
        <View style={styles.claimCardsContainer}>
          <ClaimsCard value="71" claimsType="Total Claims" type="total" />
          <View style={styles.spacer} />
          <ClaimsCard
            value="0"
            claimsType="Completed Claims"
            type="completed"
          />
        </View>
        <View style={styles.estimateCardsContainer}>
          <CreateEstimateCard
            text="Create a Claim"
            subText="Insurance Claim"
            type="create"
          />
          <View style={styles.smallSpacer} />
          <CreateEstimateCard
            text="Quick Estimate"
            subText="Self pay"
            type="estimate"
          />
        </View>
        <ClaimsTitleBar />
      </View>
      <FlatList
        data={indieCardData}
        renderItem={() => <IndieCard />}
        keyExtractor={(item) => item.key}
        ItemSeparatorComponent={ItemSeparator}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContentContainer: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  contentContainer: {
    paddingHorizontal: 15,
    paddingBottom: 80,
  },
  claimCardsContainer: {
    flexDirection: "row",
    paddingTop: 10,
  },
  estimateCardsContainer: {
    flexDirection: "row",
    paddingVertical: 20,
    justifyContent: "space-between",
  },
  spacer: {
    width: 40,
  },
  smallSpacer: {
    width: 15,
  },
  separator: {
    marginBottom: 7,
  },
});
