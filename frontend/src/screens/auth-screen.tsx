import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function LandingAuthScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TalentBridge</Text>
      <Text style={styles.subtitle}>Connecting students and companies for global internships</Text>

      <Pressable style={[styles.btn, styles.primary]} onPress={() => navigation.navigate("Signup")}>
        <Text style={styles.btnText}>Sign up</Text>
      </Pressable>
      <Pressable style={[styles.btn, styles.secondary]} onPress={() => navigation.navigate("Login")}>
        <Text style={[styles.btnText, { color: "#EAEAEA" }]}>Log in</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0B132B", alignItems: "center", justifyContent: "center", padding: 24 },
  title: { color: "#EAEAEA", fontSize: 28, fontWeight: "800", marginBottom: 8 },
  subtitle: { color: "#EAEAEA", opacity: 0.9, textAlign: "center", marginBottom: 24 },
  btn: { width: "100%", paddingVertical: 14, borderRadius: 28, alignItems: "center", marginTop: 12 },
  primary: { backgroundColor: "#00BFA6" },
  secondary: { backgroundColor: "#1C2541" },
  btnText: { color: "#fff", fontWeight: "700" },
});
