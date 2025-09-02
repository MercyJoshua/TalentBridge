import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Pressable,
  Image,
} from "react-native";
import { useTheme } from "../context/ThemeContext";
import { Ionicons } from "@expo/vector-icons";

const mockOpportunities = [
  {
    id: "1",
    title: "Marketing Internship",
    company: "Acme Co.",
    location: "Remote",
    image: require("../../assets/dashboard/4.png"),
  },
  {
    id: "2",
    title: "Software Engineering Project",
    company: "TechCorp",
    location: "San Francisco",
    image: require("../../assets/dashboard/2.png"),
  },
  {
    id: "3",
    title: "Product Design Internship",
    company: "DesignHub",
    location: "New York",
    image: require("../../assets/dashboard/7.png"),
  },
  {
    id: "4",
    title: "Product Design Internship",
    company: "DesignHub",
    location: "New York",
    image: require("../../assets/dashboard/6.png"),
  },
  {
    id: "5",
    title: "Product Design Internship",
    company: "DesignHub",
    location: "New York",
    image: require("../../assets/dashboard/5.png"),
  },
];

export default function StudentDashboard() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const colors = {
    background: isDark ? "#0B132B" : "#FAFAFA",
    text: isDark ? "#EAEAEA" : "#1C1C1C",
    subText: isDark ? "#9CA3AF" : "#4A4A4A",
    pillBg: isDark ? "#1C2541" : "#E5E7EB",
    pillText: isDark ? "#fff" : "#111827",
    icon: isDark ? "#EAEAEA" : "#1C1C1C",
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Top Header */}
      <View style={styles.header}>
        <Text style={[styles.logo, { color: colors.text }]}>TalentBridge</Text>
       {/*  <Pressable>
          <Ionicons name="settings-outline" size={24} color={colors.icon} />
        </Pressable> */}
      </View>

      {/* Filters */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filters}
      >
        {["Remote", "Travel", "Duration", "Paid"].map((tag) => (
          <Pressable
            key={tag}
            style={[styles.filterPill, { backgroundColor: colors.pillBg }]}
          >
            <Text style={[styles.filterText, { color: colors.pillText }]}>
              {tag}
            </Text>
          </Pressable>
        ))}
      </ScrollView>

      {/* Recommended Section */}
      <Text style={[styles.sectionTitle, { color: colors.text }]}>
        Recommended for You
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {mockOpportunities.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={item.image} style={styles.cardImage} />
            <Text style={[styles.cardTitle, { color: colors.text }]}>
              {item.title}
            </Text>
            <Text style={[styles.cardSubtitle, { color: colors.subText }]}>
              {item.company} | {item.location}
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* All Opportunities */}
      <Text style={[styles.sectionTitle, { color: colors.text }]}>
        All Opportunities
      </Text>
      <FlatList
        data={mockOpportunities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Image source={item.image} style={styles.listImage} />
            <View style={{ flex: 1 }}>
              <Text style={[styles.listTitle, { color: colors.text }]}>
                {item.title}
              </Text>
              <Text style={[styles.listSubtitle, { color: colors.subText }]}>
                {item.company} | {item.location}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  logo: { fontSize: 18, fontWeight: "700" },
  filters: { flexDirection: "row", marginBottom: 16 },
  filterPill: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 8,
  },
  filterText: { fontSize: 14 },
  sectionTitle: { fontSize: 16, fontWeight: "700", marginVertical: 12 },
  card: { marginRight: 12, width: 180 },
  cardImage: { width: 180, height: 100, borderRadius: 8, marginBottom: 8 },
  cardTitle: { fontWeight: "700", fontSize: 14 },
  cardSubtitle: { fontSize: 12 },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  listImage: { width: 60, height: 60, borderRadius: 8, marginRight: 12 },
  listTitle: { fontWeight: "700" },
  listSubtitle: { fontSize: 12 },
});