import React from "react";
import { Text, View } from "react-native";

export default function RoutinesScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        Mes routines
      </Text>

      <Text>
        Retrouvez ici vos routines d'entraînement.
      </Text>
    </View>
  );
}