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

interface MessageContact {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

const contacts: MessageContact[] = [
  {
    id: "1",
    name: "Ethan Carter",
    role: "Software Engineer",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    id: "2",
    name: "Olivia Bennett",
    role: "Product Designer",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    id: "3",
    name: "Noah Thompson",
    role: "Data Scientist",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    id: "4",
    name: "Ava Harper",
    role: "UX Researcher",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: "5",
    name: "Liam Foster",
    role: "Marketing Specialist",
    avatar: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    id: "6",
    name: "Isabella Hayes",
    role: "Business Analyst",
    avatar: "https://randomuser.me/api/portraits/women/66.jpg",
  },
];

const MessagesScreen: React.FC = () => {
  const [search, setSearch] = useState("");

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back-outline" size={24} color="#000" />
        <Text style={styles.title}>Messages</Text>
        <View style={{ width: 24 }} /> {/* spacer to balance back icon */}
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="#9ca3af" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#9ca3af"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Contacts List */}
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.contactRow}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <View style={{ flex: 1 }}>
              <Text style={styles.contactName}>{item.name}</Text>
              <Text style={styles.contactRole}>{item.role}</Text>
            </View>
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
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="people-outline" size={22} color="#000" />
          <Text style={styles.navText}>Candidates</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, styles.activeNav]}>
          <Ionicons name="mail-outline" size={22} color="#000" />
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

export default MessagesScreen;

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
  contactRow: {
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
  contactName: {
    fontSize: 15,
    fontWeight: "500",
  },
  contactRole: {
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
