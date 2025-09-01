import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "../context/ThemeContext";

type Props = { navigation: any; onSuccess: (token: string) => void };

export default function LoginScreen({ navigation, onSuccess }: Props) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const mockLogin = async () => {
    onSuccess("demo_token_123");
    navigation.reset({ index: 0, routes: [{ name: "StudentDashboard" as never }] });
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDark ? "#0B132B" : "#FAFAFA" },
      ]}
    >
      {/* Header */}
      <Text style={[styles.appTitle, { color: isDark ? "#fff" : "#000" }]}>
        TalentBridge
      </Text>
      <Text style={[styles.welcome, { color: isDark ? "#fff" : "#000" }]}>
        Welcome back
      </Text>

      {/* Inputs */}
      <TextInput
        style={[
          styles.input,
          { backgroundColor: isDark ? "#1C2541" : "#E0E0E0", color: "#fff" },
        ]}
        placeholder="Email"
        placeholderTextColor="#9CA3AF"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={[
          styles.input,
          { backgroundColor: isDark ? "#1C2541" : "#E0E0E0", color: isDark ? "#fff" : "#00BFA6"},
        ]}
        placeholder="Password"
        placeholderTextColor="#9CA3AF"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Forgot password */}
      <TouchableOpacity>
        <Text style={styles.forgotText}>Forgot password?</Text>
      </TouchableOpacity>

      {/* Sign In button */}
      <Pressable style={styles.signInBtn} onPress={mockLogin}>
        <Text style={styles.signInText}>Sign In</Text>
      </Pressable>

      {/* Divider */}
      <Text style={styles.divider}>Or sign in with</Text>

      {/* Social buttons */}
      <View style={styles.socialRow}>
        <Pressable style={styles.socialBtn}>
          <Text style={styles.socialText}>Google</Text>
        </Pressable>
        
        <Pressable style={styles.socialBtn}>
          <Text style={styles.socialText}>LinkedIn</Text>
        </Pressable>
      </View>

      <View style={styles.socialRow}>
        <Pressable
          style={styles.socialBtn}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={styles.socialText}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  appTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 30,
    marginBottom: 10,
  },
  welcome: {
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 30,
  },
  input: {
    width: "100%",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginBottom: 16,
    fontSize: 16,
  },
  forgotText: {
    alignSelf: "flex-end",
    marginBottom: 20,
    color: "#00BFA6", 
    fontSize: 14,
    fontWeight: "500",
  },
  signInBtn: {
    width: "100%",
    backgroundColor: "#00BFA6",
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 24,
  },
  signInText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  divider: {
    color: "#9CA3AF",
    marginBottom: 16,
    fontSize: 14,
  },
  socialRow: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  socialBtn: {
    flex: 1,
    backgroundColor: "#1C2541",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 4,
  },
  socialText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
});
