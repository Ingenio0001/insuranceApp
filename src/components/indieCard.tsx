import { View, Text, StyleSheet } from "react-native";

export default function IndieCard() {
  return (
    <View style={[styles.container]}>
      <View
        style={[
          styles.flexRow,
          {
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 2,
          },
        ]}
      >
        <Text style={{ color: "#3b3b3b", fontWeight: "600", fontSize: 14 }}>
          New York
        </Text>
        <Text style={{ fontSize: 10, fontWeight: "700" }}>05-08-2025</Text>
      </View>
      <View>
        <View style={[styles.flexRow, styles.bulletContainer]}>
          <View
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              backgroundColor: "lightgray",
              marginRight: 3,
            }}
          />
          <Text style={{ fontSize: 10, fontWeight: "700" }}>
            Address to be inputed dynamically later
          </Text>
        </View>
        <View style={[styles.flexRow, styles.bulletContainer]}>
          <View
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              backgroundColor: "lightgray",
              marginRight: 3,
            }}
          />
          <Text style={{ fontSize: 13, fontWeight: "700", letterSpacing: -1 }}>
            1735683264236
          </Text>
        </View>
      </View>
      <View style={[styles.flexRow, { marginVertical: 3 }]}>
        <View style={[styles.coloredBox, { backgroundColor: "#eeeaf9" }]}>
          <Text style={{ color: "#6b508b", fontWeight: "700", fontSize: 10 }}>
            Water
          </Text>
        </View>
        <View
          style={[
            styles.coloredBox,
            { backgroundColor: "#daeaf9", marginLeft: 3 },
          ]}
        >
          <Text style={{ color: "#4981bb", fontWeight: "700", fontSize: 10 }}>
            Mitigation
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 7,
    paddingHorizontal: 10,
    paddingVertical: 9,
  },
  flexRow: {
    flexDirection: "row",
  },
  coloredBox: {
    paddingHorizontal: 40,
    paddingVertical: 8.5,
    borderRadius: 3,
  },
  bulletContainer: {
    marginVertical: 6,
    alignItems: "center",
  },
});
