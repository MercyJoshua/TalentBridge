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
import supabase from "../lib/supabase";

type Props = { navigation: any; onSuccess: (token: string) => void };

export default function SignupScreen({ navigation, onSuccess }: Props) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [role, setRole] = useState<"student" | "company" | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [extra, setExtra] = useState(""); // companyName or fieldOfStudy
  const [step, setStep] = useState<"form" | "verify">("form");
  const [otpCode, setOtpCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendOtp = async () => {
    if (!email || !name || !role) {
      alert("Please fill all fields before continuing");
      return;
    }

    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        shouldCreateUser: true,
        emailRedirectTo: "talentbridge://auth-callback", // must be in Supabase redirect allow-list
        data: {
          full_name: name,
          role,
          extra_field: extra,
        },
      },
    });
    setLoading(false);

    if (error) {
      alert(error.message);
    } else {
      setStep("verify");
      alert("We’ve sent a 6-digit code to your email.");
    }
  };

  const handleVerifyOtp = async () => {
    if (!otpCode) {
      alert("Enter the code from your email");
      return;
    }

    setLoading(true);
    const { data, error } = await supabase.auth.verifyOtp({
      email,
      token: otpCode.trim(),
      type: "email",
    });
    setLoading(false);

    if (error) {
      alert(error.message);
    } else if (data?.session) {
      onSuccess(data.session.access_token);
      navigation.reset({ index: 0, routes: [{ name: "Dashboard" as never }] });
    }
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDark ? "#0B132B" : "#FAFAFA" },
      ]}
    >
      <Text style={[styles.title, { color: isDark ? "#EAEAEA" : "#4A4A4A" }]}>
        Create Account
      </Text>

      {step === "form" && !role && (
        <View style={{ width: "100%", marginBottom: 24 }}>
          <Text
            style={[
              styles.subtitle,
              { color: isDark ? "#EAEAEA" : "#4A4A4A" },
            ]}
          >
            I am signing up as:
          </Text>
          <Pressable style={styles.choiceBtn} onPress={() => setRole("student")}>
            <Text style={styles.choiceText}>
              🎓 Student / Young Professional
            </Text>
          </Pressable>
          <Pressable style={styles.choiceBtn} onPress={() => setRole("company")}>
            <Text style={styles.choiceText}>🏢 Company / Recruiter</Text>
          </Pressable>
        </View>
      )}

      {step === "form" && role && (
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
            autoCapitalize="none"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
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

          <Pressable style={styles.btn} onPress={handleSendOtp} disabled={loading}>
            <Text style={styles.btnText}>
              {loading ? "Sending..." : "Send Code"}
            </Text>
          </Pressable>

          <TouchableOpacity onPress={() => setRole(null)}>
            <Text style={styles.backText}>← Go back</Text>
          </TouchableOpacity>
        </View>
      )}

      {step === "verify" && (
        <View style={{ width: "100%" }}>
          <TextInput
            style={[
              styles.input,
              { backgroundColor: isDark ? "#1C2541" : "#E0E0E0", color: "#fff" },
            ]}
            placeholder="Enter 6-digit code"
            placeholderTextColor="#9CA3AF"
            keyboardType="numeric"
            value={otpCode}
            onChangeText={setOtpCode}
          />
          <Pressable style={styles.btn} onPress={handleVerifyOtp} disabled={loading}>
            <Text style={styles.btnText}>
              {loading ? "Verifying..." : "Verify & Finish"}
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", padding: 24 },
  title: { fontSize: 24, fontWeight: "800", marginBottom: 24 },
  subtitle: { fontSize: 18, fontWeight: "600", marginBottom: 16 },
  choiceBtn: {
    backgroundColor: "#1C2541",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 12,
  },
  choiceText: { color: "#fff", fontSize: 16, fontWeight: "600" },
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
