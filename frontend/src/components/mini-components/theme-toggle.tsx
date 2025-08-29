import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { Ionicons } from "@expo/vector-icons";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Pressable onPress={toggleTheme} style={styles.iconButton}>
      <Ionicons
        name={isDark ? "sunny-outline" : "moon-outline"}
        size={22}
        color={isDark ? "#FFD369" : "#fff"}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    position: "absolute",
    top: 40, 
    right: 20,
    backgroundColor: "#0B132B",
    padding: 8,
    borderRadius: 20,
    elevation: 3, 
    shadowColor: "#000", 
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  },
});
