import React from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import { exercices } from "../data/exercices";

export default function JournalScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={exercices}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              navigation.navigate("DetailsExercice", {
                exerciceId: item.id,
                nom: item.nom,
              })
            }
            style={{
              padding: 14,
              borderBottomWidth: 1,
              borderColor: "#dddddd",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {item.nom}
            </Text>
            <Text>{item.groupe}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}
