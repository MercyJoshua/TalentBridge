import React, { useEffect, useState, useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { fetchUser } from "../../lib/api";
import { getUserBadge } from "../../lib/calculations";
import { LEVEL_RULES } from "../../lib/commons/constants";
import { User } from "../../lib/commons/types";

export default function PassportScreen() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser().then((data) => {
      setUser(data);
      setLoading(false);
    });
  }, []);

  const colors = {
    background: isDark ? "#0B132B" : "#FAFAFA",
    text: isDark ? "#EAEAEA" : "#1C1C1C",
    subText: isDark ? "#9CA3AF" : "#4A4A4A",
    card: isDark ? "#1C2541" : "#E5E7EB",
    highlight: "#4F46E5",
  };

  if (loading) {
    return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <ActivityIndicator color={colors.text} />
      </View>
    );
  }

  if (!user) return null;

  const totalSkills = user.skills.length;
  const badge = getUserBadge(user);

  const currentLevel = useMemo(() => {
    return LEVEL_RULES.find(
      (lvl) =>
        totalSkills >= lvl.minSkills &&
        totalSkills <= lvl.maxSkills &&
        user.totalExperience >= lvl.minExperience
    );
  }, [totalSkills, user.totalExperience]);

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      {/* Profile Header */}
      <View style={styles.header}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <Text style={[styles.name, { color: colors.text }]}>{user.name}</Text>
        <Text style={[styles.subtitle, { color: colors.subText }]}>
          {user.university}
        </Text>
      </View>

      {/* Skill Passport */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          Skill Passport
        </Text>

        {totalSkills === 0 ? (
          <>
            <Text style={[styles.sectionDesc, { color: colors.subText }]}>
              Add at least 3 core skills or take a skill assessment to unlock
              your first badge.
            </Text>
            <Pressable style={[styles.cta, { backgroundColor: colors.card }]}>
              <Text style={[styles.ctaText, { color: colors.text }]}>
                + Add Skills
              </Text>
            </Pressable>
            <Pressable style={[styles.cta, { backgroundColor: colors.card }]}>
              <Text style={[styles.ctaText, { color: colors.text }]}>
                Take Assessment
              </Text>
            </Pressable>
          </>
        ) : (
          <>
            <Text style={[styles.sectionDesc, { color: colors.subText }]}>
              You’ve added {totalSkills} skills. Current Level:
            </Text>
            <View style={[styles.badge, { backgroundColor: colors.highlight }]}>
              <Text style={{ color: "#fff", fontWeight: "700" }}>{badge}</Text>
            </View>
          </>
        )}
      </View>

      {/* Levels */}
      {totalSkills > 0 && (
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            Levels
          </Text>
          <View style={styles.badgeRow}>
            {LEVEL_RULES.map((level, i) => {
              const isActive = currentLevel?.level === level.level;
              return (
                <View
                  key={i}
                  style={[
                    styles.badge,
                    {
                      backgroundColor: isActive
                        ? colors.highlight
                        : colors.card,
                    },
                  ]}
                >
                  <Text style={{ color: isActive ? "#fff" : colors.text }}>
                    {level.level}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
      )}

      {/* Visas */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          Visas
        </Text>
        {totalSkills === 0 ? (
          <Text style={[styles.sectionDesc, { color: colors.subText }]}>
            Your Visas will appear here as you add and achieve skills.
          </Text>
        ) : (
          <View style={styles.visaRow}>
            {user.skills.map((skill, idx) => (
              <View
                key={idx}
                style={[styles.visa, { backgroundColor: colors.card }]}
              >
                <Text style={{ color: colors.text }}>{skill.name}</Text>
              </View>
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { alignItems: "center", marginBottom: 24 },
  avatar: { width: 90, height: 90, borderRadius: 45, marginBottom: 12 },
  name: { fontSize: 20, fontWeight: "700" },
  subtitle: { fontSize: 14 },
  section: { marginBottom: 24 },
  sectionTitle: { fontSize: 16, fontWeight: "700", marginBottom: 8 },
  sectionDesc: { fontSize: 14, marginBottom: 12 },
  cta: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: "center",
  },
  ctaText: { fontWeight: "600" },
  badgeRow: { flexDirection: "row", justifyContent: "space-between" },
  badge: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
    flex: 1,
    marginRight: 8,
  },
  visaRow: { flexDirection: "row", flexWrap: "wrap" },
  visa: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    margin: 4,
  },
});
