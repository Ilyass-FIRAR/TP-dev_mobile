import React from "react";
import { Button, Text, View } from "react-native";

export default function ProfilScreen({ onLogout }) {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        Mon profil
      </Text>

      <Text style={{ marginBottom: 24 }}>
        Ilyass FIRAR
      </Text>

      <Button
        title="Se déconnecter"
        onPress={onLogout}
      />
    </View>
  );
}