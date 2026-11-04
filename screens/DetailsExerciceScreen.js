import React from "react";
import { Text, View } from "react-native";

export default function DetailsExerciceScreen({ route }) {
  const exerciceId = route.params?.exerciceId;
  const nom = route.params?.nom ?? "Exercice sans nom";

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>
        {nom}
      </Text>
      <Text>Identifiant : {exerciceId ?? "non fourni"}</Text>
    </View>
  );
}