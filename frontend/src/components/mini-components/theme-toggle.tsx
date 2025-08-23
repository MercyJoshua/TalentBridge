import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { useTheme } from "../../context/ThemeContext";


export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Pressable
      onPress={toggleTheme}
      style={[
        styles.button,
        { backgroundColor: isDark ? "#FF6B6B" : "#00BFA6" },
      ]}
    >
      <Text style={{ color: "#FFF", fontFamily: "Poppins", fontSize: 16 }}>
        {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 20,
    marginTop: 20,
  },
});
