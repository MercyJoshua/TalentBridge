import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useTheme } from "../context/ThemeContext";

type Props = { navigation: any; onSuccess: (token: string) => void };

export default function LoginScreen({ navigation, onSuccess }: Props) {
    const { theme } = useTheme();
  const isDark = theme === "dark";
  const mockLogin = async () => {
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
        style={[
          styles.title,
          { color: isDark ? "#EAEAEA" : "#4A4A4A" },
        ]}
      >
        Log in
      </Text>
      <Pressable
        style={[
          styles.btn,
          { backgroundColor: "#00BFA6" },
        ]}
        onPress={mockLogin}
      >
        <Text style={styles.btnText}>Continue</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0B132B", alignItems: "center", justifyContent: "center", padding: 24 },
  title: { color: "#EAEAEA", fontSize: 24, fontWeight: "800", marginBottom: 16 },
  btn: { backgroundColor: "#00BFA6", paddingVertical: 14, paddingHorizontal: 40, borderRadius: 28 },
  btnText: { color: "#fff", fontWeight: "700" },
});
