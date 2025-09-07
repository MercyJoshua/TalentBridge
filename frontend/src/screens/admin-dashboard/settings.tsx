import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ProfileScreen = () => {
  return (
  <View style={styles.container}>
      {/* Header */}
  <View style={styles.header}>
  <TouchableOpacity>
          <Ionicons name="arrow-back" size={22} color="black" />
        </TouchableOpacity>
  <Text style={styles.headerTitle}>Settings</Text>
  <View style={{ width: 24 }} /> {/* Spacer for balance */}
      </View>

  <ScrollView contentContainerStyle={{ paddingHorizontal: 20 }}>
        {/* Profile Section */}
  <View style={styles.profileSection}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
            }}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>TalentBridge</Text>
          <Text style={styles.profileDesc}>
            Connect students and companies for global internships
          </Text>
        </View>

        {/* Preferences */}
  <Text style={styles.sectionTitle}>Preferences</Text>

        <TouchableOpacity style={styles.row}>
          <Text style={styles.rowText}>Theme</Text>
          <Ionicons name="moon-outline" size={20} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.row}>
          <Text style={styles.rowText}>Language</Text>
          <Text style={styles.rowSubText}>English</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row}>
          <Text style={styles.rowText}>Notifications</Text>
          <Ionicons name="notifications-outline" size={20} color="black" />
        </TouchableOpacity>

        {/* Account */}
  <Text style={[styles.sectionTitle, { marginTop: 24 }]}>Account</Text>

        <TouchableOpacity style={styles.row}>
          <Text style={styles.rowText}>Manage Account</Text>
          <Ionicons name="person-outline" size={20} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.row, { borderBottomWidth: 0 }] }>
          <Text style={styles.rowText}>Log Out</Text>
          <Ionicons name="arrow-forward-outline" size={20} color="black" />
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation */}
  <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="grid-outline" size={22} color="gray" />
          <Text style={styles.navText}>Dashboard</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="briefcase-outline" size={22} color="gray" />
          <Text style={styles.navText}>Postings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="people-outline" size={22} color="gray" />
          <Text style={styles.navText}>Candidates</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="chatbubble-ellipses-outline" size={22} color="gray" />
          <Text style={styles.navText}>Messages</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={22} color="black" />
          <Text style={[styles.navText, styles.activeNavText]}>Profile</Text>
        </TouchableOpacity>
      </View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 24,
  },
  profileImage: {
    width: 96,
    height: 96,
    borderRadius: 48,
    marginBottom: 12,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  profileDesc: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  rowText: {
    fontSize: 16,
    color: '#000',
  },
  rowSubText: {
    color: '#4B5563',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  activeNavText: {
    color: '#000',
    fontWeight: '600',
  },
});

export default ProfileScreen;
