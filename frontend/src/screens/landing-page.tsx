import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { useTheme } from "../context/ThemeContext";


export default function SplashScreen({ navigation }: any) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDark ? "#0B132B" : "#FAFAFA" },
      ]}
    >
      <View 
      style={styles.logoContainer}>
        <Image
          source={require("../../assets/icon.svg")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <Text
        style={[
          styles.title,
          { color: isDark ? "#EAEAEA" : "#4A4A4A" },
        ]}
      >
        TalentBridge
      </Text>
      <Text
        style={[
          styles.subtitle,
          { color: isDark ? "#EAEAEA" : "#4A4A4A" },
        ]}
      >
        Connecting students and companies for global internships
      </Text>

      <View style={styles.buttonContainer}>
        <Pressable
          style={[
            styles.button,
            { backgroundColor: "#00BFA6" }, 
          ]}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={styles.buttonText}>Sign up</Text>
        </Pressable>

        <Pressable
          style={[
            styles.button,
            { backgroundColor: isDark ? "#1C2541" : "#E0E0E0" }, 
          ]}
          onPress={() => navigation.navigate("Login")}
        >
          <Text
            style={[
              styles.buttonText,
              { color: isDark ? "#EAEAEA" : "#4A4A4A" },
            ]}
          >
            Log in
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 80,
  },
  logoContainer: {
    height: 200,
    width: "100%",
    alignItems: "center",
    marginBottom: 30,
  },
  logo: {
    height: "100%",
    width: "60%",
  },
  title: {
    fontSize: 28,
    fontFamily: "Poppins",
    fontWeight: "700",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "Inter",
    textAlign: "center",
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  buttonContainer: {
    width: "100%",
    gap: 16,
  },
  button: {
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontFamily: "Inter",
    color: "#FFF",
    fontWeight: "600",
  },
});
