import React, { useState, useEffect } from "react";
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
  const [step, setStep] = useState<"form" | "verify" | "password">("form");

  const [otpCode, setOtpCode] = useState("");
  const [loading, setLoading] = useState(false);

  const [resendTimer, setResendTimer] = useState(0);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Countdown for resend
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (resendTimer > 0) {
      timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [resendTimer]);

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
        emailRedirectTo: "talentbridge://auth-callback",
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
      setResendTimer(60);
      alert("We’ve sent a 6-digit code to your email.");
    }
  };

  const handleResendOtp = async () => {
    if (resendTimer > 0) return;

    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({ email });
    setLoading(false);

    if (error) {
      alert(error.message);
    } else {
      setResendTimer(60);
      alert("New code sent!");
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
      // Proceed to password setup
      setStep("password");
    }
  };

  const handleSetPassword = async () => {
    if (!password || !confirmPassword) {
      alert("Fill in both password fields");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setLoading(true);
    const { error: updateError } = await supabase.auth.updateUser({
      password,
    });
    if (updateError) {
      setLoading(false);
      alert(updateError.message);
      return;
    }

    // Get current user session
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      setLoading(false);
      alert("Could not fetch user info");
      return;
    }

    // Insert profile into the right table
    if (role === "student") {
      const { error } = await supabase.from("student_profiles").insert([
        {
          id: user.id,
          full_name: name,
          education: "",
          bio: "",
          skills: [],
          experience: "",
          location: "",
          portfolio_url: "",
          linkedin_url: "",
          github_url: "",
        },
      ]);
      if (error) {
        setLoading(false);
        alert(error.message);
        return;
      }
    } else if (role === "company") {
      const { error } = await supabase.from("company_profiles").insert([
        {
          id: user.id,
          company_name: extra,
          industry: "",
          description: "",
          website_url: "",
          location: "",
          size: null,
          founded_year: null,
        },
      ]);
      if (error) {
        setLoading(false);
        alert(error.message);
        return;
      }
    }

    setLoading(false);
    onSuccess((await supabase.auth.getSession()).data.session?.access_token!);
    navigation.reset({ index: 0, routes: [{ name: "Dashboard" as never }] });
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

      {/* Step 1: Role & Info Form */}
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
              🎓 Student / Looking for internship
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
            <Text style={styles.btnText}>{loading ? "Sending..." : "Send Code"}</Text>
          </Pressable>

          <TouchableOpacity onPress={() => setRole(null)}>
            <Text style={styles.backText}>← Go back</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Step 2: OTP Verification */}
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
            <Text style={styles.btnText}>{loading ? "Verifying..." : "Verify Code"}</Text>
          </Pressable>

          <TouchableOpacity onPress={handleResendOtp} disabled={resendTimer > 0}>
            <Text style={styles.backText}>
              {resendTimer > 0 ? `Resend in ${resendTimer}s` : "Resend Code"}
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Step 3: Password Setup */}
      {step === "password" && (
        <View style={{ width: "100%" }}>
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
          <TextInput
            style={[
              styles.input,
              { backgroundColor: isDark ? "#1C2541" : "#E0E0E0", color: "#fff" },
            ]}
            placeholder="Confirm Password"
            placeholderTextColor="#9CA3AF"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <Pressable style={styles.btn} onPress={handleSetPassword} disabled={loading}>
            <Text style={styles.btnText}>{loading ? "Saving..." : "Finish Signup"}</Text>
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
