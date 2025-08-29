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

export default function SignupScreen({ navigation, onSuccess }: Props) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [role, setRole] = useState<"student" | "company" | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [extra, setExtra] = useState(""); // companyName or fieldOfStudy

  const mockSignup = async () => {
    onSuccess("demo_token_123");
    navigation.reset({ index: 0, routes: [{ name: "Dashboard" as never }] });
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDark ? "#0B132B" : "#FAFAFA" },
      ]}
    >
      <Text
        style={[styles.title, { color: isDark ? "#EAEAEA" : "#4A4A4A" }]}
      >
        Create Account
      </Text>

      {/* Step 1: Choose role */}
      {!role && (
        <View style={{ width: "100%", marginBottom: 24 }}>
          <Text
            style={[
              styles.subtitle,
              { color: isDark ? "#EAEAEA" : "#4A4A4A" },
            ]}
          >
            I am signing up as:
          </Text>
          <Pressable
            style={styles.choiceBtn}
            onPress={() => setRole("student")}
          >
            <Text style={styles.choiceText}>🎓 Student / Young Professional</Text>
          </Pressable>
          <Pressable
            style={styles.choiceBtn}
            onPress={() => setRole("company")}
          >
            <Text style={styles.choiceText}>🏢 Company / Recruiter</Text>
          </Pressable>
        </View>
      )}

      {/* Step 2: Role-specific signup form */}
      {role && (
        <View style={{ width: "100%" }}>
          <TextInput
            style={[
              styles.input,
              { backgroundColor: isDark ? "#1C2541" : "#E0E0E0", color: "#fff" },
            ]}
            placeholder="Full Name"
            placeholderTextColor="#9CA3AF"
            value={name}
            onChangeText={setName}
          />
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
              { backgroundColor: isDark ? "#1C2541" : "#E0E0E0", color: "#fff" },
            ]}
            placeholder="Password"
            placeholderTextColor="#9CA3AF"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          {/* Role-specific extra field */}
          {role === "company" ? (
            <TextInput
              style={[
                styles.input,
                { backgroundColor: isDark ? "#1C2541" : "#E0E0E0", color: "#fff" },
              ]}
              placeholder="Company Name"
              placeholderTextColor="#9CA3AF"
              value={extra}
              onChangeText={setExtra}
            />
          ) : (
            <TextInput
              style={[
                styles.input,
                { backgroundColor: isDark ? "#1C2541" : "#E0E0E0", color: "#fff" },
              ]}
              placeholder="Field of Study / Role"
              placeholderTextColor="#9CA3AF"
              value={extra}
              onChangeText={setExtra}
            />
          )}

          {/* Signup button */}
          <Pressable style={styles.btn} onPress={mockSignup}>
            <Text style={styles.btnText}>Finish</Text>
          </Pressable>

          {/* Go back option */}
          <TouchableOpacity onPress={() => setRole(null)}>
            <Text style={styles.backText}>← Go back</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    marginBottom: 24,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
  },
  choiceBtn: {
    backgroundColor: "#1C2541",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 12,
  },
  choiceText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  input: {
    width: "100%",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginBottom: 16,
    fontSize: 16,
  },
  btn: {
    backgroundColor: "#00BFA6",
    paddingVertical: 14,
    borderRadius: 28,
    alignItems: "center",
    marginTop: 8,
  },
  btnText: { color: "#fff", fontWeight: "700", fontSize: 16 },
  backText: {
    marginTop: 16,
    fontSize: 14,
    color: "#9CA3AF",
    textAlign: "center",
  },
});
