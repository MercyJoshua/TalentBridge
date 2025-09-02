import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "../../context/ThemeContext";

export default function PassportScreen() {
     const { theme } = useTheme();
      const isDark = theme === "dark";
  return (
    <View  style={[
        styles.container,
        { backgroundColor: isDark ? "#0B132B" : "#FAFAFA" },
      ]}>
      <Text style={[
          styles.text,
          { color: isDark ? "#fff" : "#4A4A4A" },
        ]}>Passport Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#0B132B" },
  text: { color: "#fff", fontSize: 18 },
});
