import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Candidate {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

const candidates: Candidate[] = [
  {
    id: "1",
    name: "Ethan Carter",
    role: "Software Engineering",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: "2",
    name: "Olivia Bennett",
    role: "Data Science",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: "3",
    name: "Noah Thompson",
    role: "Product Management",
    avatar: "https://randomuser.me/api/portraits/men/54.jpg",
  },
  {
    id: "4",
    name: "Ava Harper",
    role: "UX/UI Design",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const CandidatesScreen: React.FC = () => {
  const [search, setSearch] = useState("");

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Candidates</Text>
        <Ionicons name="options-outline" size={22} color="#000" />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="#9ca3af" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search candidates"
          placeholderTextColor="#9ca3af"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Filter Chips */}
      <View style={styles.chipContainer}>
        <TouchableOpacity style={styles.chip}>
          <Ionicons name="code-slash-outline" size={16} color="#000" />
          <Text style={styles.chipText}>Skills</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.chip}>
          <Ionicons name="location-outline" size={16} color="#000" />
          <Text style={styles.chipText}>Location</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.chip}>
          <Ionicons name="calendar-outline" size={16} color="#000" />
          <Text style={styles.chipText}>Availability</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.chip}>
          <Ionicons name="globe-outline" size={16} color="#000" />
          <Text style={styles.chipText}>More</Text>
        </TouchableOpacity>
      </View>

      {/* Top Candidates */}
      <Text style={styles.sectionTitle}>Top candidates</Text>
      <FlatList
        data={candidates}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.candidateRow}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <View style={{ flex: 1 }}>
              <Text style={styles.candidateName}>{item.name}</Text>
              <Text style={styles.candidateRole}>{item.role}</Text>
            </View>
            <Ionicons name="chevron-forward-outline" size={20} color="#000" />
          </TouchableOpacity>
        )}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="grid-outline" size={22} color="#000" />
          <Text style={styles.navText}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="briefcase-outline" size={22} color="#000" />
          <Text style={styles.navText}>Postings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, styles.activeNav]}>
          <Ionicons name="people-outline" size={22} color="#000" />
          <Text style={styles.navText}>Candidates</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="chatbubble-outline" size={22} color="#000" />
          <Text style={styles.navText}>Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={22} color="#000" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CandidatesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f9f7",
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e8f0ec",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 16,
    height: 40,
  },
  searchInput: {
    marginLeft: 8,
    flex: 1,
    fontSize: 14,
    color: "#000",
  },
  chipContainer: {
    flexDirection: "row",
    marginBottom: 16,
    flexWrap: "wrap",
  },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e8f0ec",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    marginBottom: 8,
  },
  chipText: {
    marginLeft: 6,
    fontSize: 13,
    color: "#000",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
  },
  candidateRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ddd",
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 12,
  },
  candidateName: {
    fontSize: 15,
    fontWeight: "500",
  },
  candidateRole: {
    fontSize: 13,
    color: "#38bdf8",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    borderTopWidth: 0.5,
    borderTopColor: "#ddd",
    backgroundColor: "#f5f9f7",
  },
  navItem: {
    alignItems: "center",
  },
  activeNav: {
    borderTopWidth: 2,
    borderTopColor: "#000",
  },
  navText: {
    fontSize: 12,
    marginTop: 2,
    color: "#000",
  },
});
