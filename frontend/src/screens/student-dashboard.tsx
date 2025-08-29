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
    image: "https://via.placeholder.com/150",
  },
  {
    id: "2",
    title: "Software Engineering Project",
    company: "TechCorp",
    location: "San Francisco",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "3",
    title: "Product Design Internship",
    company: "DesignHub",
    location: "New York",
    image: "https://via.placeholder.com/150",
  },
];

export default function StudentDashboard() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDark ? "#0B132B" : "#FAFAFA" },
      ]}
    >
      {/* Top Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>TalentBridge</Text>
        <Pressable>
          <Ionicons name="settings-outline" size={24} color="#fff" />
        </Pressable>
      </View>

      {/* Filters */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filters}
      >
        {["Remote", "Travel", "Duration", "Paid"].map((tag) => (
          <Pressable key={tag} style={styles.filterPill}>
            <Text style={styles.filterText}>{tag}</Text>
          </Pressable>
        ))}
      </ScrollView>

      {/* Recommended Section */}
      <Text style={styles.sectionTitle}>Recommended for You</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {mockOpportunities.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardSubtitle}>
              {item.company} | {item.location}
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* All Opportunities */}
      <Text style={styles.sectionTitle}>All Opportunities</Text>
      <FlatList
        data={mockOpportunities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Image source={{ uri: item.image }} style={styles.listImage} />
            <View style={{ flex: 1 }}>
              <Text style={styles.listTitle}>{item.title}</Text>
              <Text style={styles.listSubtitle}>
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
  logo: { color: "#fff", fontSize: 18, fontWeight: "700" },
  filters: { flexDirection: "row", marginBottom: 16 },
  filterPill: {
    backgroundColor: "#1C2541",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 8,
  },
  filterText: { color: "#fff", fontSize: 14 },
  sectionTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    marginVertical: 12,
  },
  card: { marginRight: 12, width: 180 },
  cardImage: { width: 180, height: 100, borderRadius: 8, marginBottom: 8 },
  cardTitle: { color: "#fff", fontWeight: "700", fontSize: 14 },
  cardSubtitle: { color: "#9CA3AF", fontSize: 12 },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  listImage: { width: 60, height: 60, borderRadius: 8, marginRight: 12 },
  listTitle: { color: "#fff", fontWeight: "700" },
  listSubtitle: { color: "#9CA3AF", fontSize: 12 },
});
