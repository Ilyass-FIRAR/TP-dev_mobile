import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function LoginScreen({ onLogin }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue sur Increment</Text>
      <Text style={styles.subtitle}>
        Connectez-vous pour accéder à votre entraînement.
      </Text>

      <Button title="Se connecter (démo)" onPress={onLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    marginBottom: 12,
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
  },
  subtitle: {
    marginBottom: 24,
    textAlign: "center",
    color: "#555",
  },
});
