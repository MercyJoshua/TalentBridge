import React from "react";
import { View, Text, Pressable, StyleSheet, Alert } from "react-native";
import * as SecureStore from "expo-secure-store";

export default function DashboardScreen({ navigation }: any) {
  const logout = async () => {
    await SecureStore.deleteItemAsync("tb_auth_token");
    navigation.reset({ index: 0, routes: [{ name: "Onboarding" as never }] });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to TalentBridge 👋</Text>
      <Pressable style={styles.btn} onPress={logout}>
        <Text style={styles.btnText}>Log out</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0B132B", alignItems: "center", justifyContent: "center" },
  title: { color: "#EAEAEA", fontSize: 20, fontWeight: "700", marginBottom: 16 },
  btn: { backgroundColor: "#FF6B6B", paddingVertical: 12, paddingHorizontal: 28, borderRadius: 24 },
  btnText: { color: "#fff", fontWeight: "700" },
});
