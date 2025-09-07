// screens/assessment/IntroModal.tsx
import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function IntroModal() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Skill Assessment</Text>
      <Text style={styles.desc}>
        Find out your strengths, get personalized badges, and unlock
        opportunities that match your skills.
      </Text>
      <Pressable
        style={styles.btn}
        onPress={() => navigation.navigate("Categories" as never)}
      >
        <Text style={styles.btnText}>Start</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: "center" },
  title: { fontSize: 22, fontWeight: "700", marginBottom: 12 },
  desc: { fontSize: 16, marginBottom: 20 },
  btn: { backgroundColor: "#4F46E5", padding: 12, borderRadius: 8 },
  btnText: { color: "#fff", textAlign: "center" },
});
