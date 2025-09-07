import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const DashboardScreen = () => {
  return (
  <View style={styles.container}>
      {/* Header */}
  <View style={styles.header}>
  <Text style={styles.headerTitle}>Dashboard</Text>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={22} color="white" />
        </TouchableOpacity>
      </View>

  <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Stats */}
  <View style={styles.statsRow}>
          <View style={[styles.statBox, { marginRight: 12 }] }>
            <Text style={styles.statLabel}>Total Applicants</Text>
            <Text style={styles.statValue}>125</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Interviews Scheduled</Text>
            <Text style={styles.statValue}>32</Text>
          </View>
        </View>

  <View style={styles.postingsBox}>
          <Text style={styles.statLabel}>Active Postings</Text>
          <Text style={styles.statValue}>5</Text>
        </View>

        {/* Quick Actions */}
  <Text style={styles.quickActionsTitle}>
          Quick Actions
        </Text>

        <TouchableOpacity style={styles.actionButtonBlue}>
          <Text style={styles.actionButtonText}>Post New Opportunity</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButtonGray}>
          <Text style={styles.actionButtonText}>Browse Candidates</Text>
        </TouchableOpacity>

        {/* AI Matching Section */}
  <View style={styles.matchingSection}>
          <View style={styles.matchingTextBox}>
            <Text style={styles.matchingNew}>New</Text>
            <Text style={styles.matchingTitle}>AI-Powered Candidate Matching</Text>
            <Text style={styles.matchingDesc}>
              Find the perfect fit for your team with our advanced matching algorithm.
            </Text>
            <TouchableOpacity style={styles.exploreButton}>
              <Text style={styles.exploreButtonText}>Explore</Text>
            </TouchableOpacity>
          </View>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/2922/2922561.png",
            }}
            style={styles.matchingImage}
            resizeMode="contain"
          />
        </View>

        {/* Messages */}
  <Text style={styles.messagesTitle}>
          Messages
        </Text>
  <View style={styles.messageRow}>
          <Image
            source={{
              uri: "https://randomuser.me/api/portraits/women/44.jpg",
            }}
            style={styles.messageAvatar}
          />
          <View style={styles.messageTextBox}>
            <Text style={styles.messageSender}>Sophia Chen</Text>
            <Text style={styles.messagePreview} numberOfLines={1}>
              Hi there, I'm interested in the marketing internship...
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
  <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="grid-outline" size={22} color="white" />
          <Text style={styles.navTextActive}>Dashboard</Text>
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
          <Ionicons name="person-outline" size={22} color="gray" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  scrollContent: {
    paddingHorizontal: 20,
  },
  statsRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  statBox: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#374151',
    borderRadius: 16,
    padding: 16,
  },
  statLabel: {
    fontSize: 14,
    color: '#9CA3AF',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 4,
  },
  postingsBox: {
    borderWidth: 1,
    borderColor: '#374151',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
  },
  quickActionsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 12,
  },
  actionButtonBlue: {
    backgroundColor: '#2563EB',
    paddingVertical: 12,
    borderRadius: 12,
    marginBottom: 12,
  },
  actionButtonGray: {
    backgroundColor: '#374151',
    paddingVertical: 12,
    borderRadius: 12,
    marginBottom: 24,
  },
  actionButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
  },
  matchingSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginBottom: 24,
  },
  matchingTextBox: {
    flex: 1,
    marginRight: 12,
  },
  matchingNew: {
    fontSize: 12,
    color: '#3B82F6',
    marginBottom: 4,
  },
  matchingTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
  },
  matchingDesc: {
    fontSize: 14,
    color: '#9CA3AF',
    marginBottom: 12,
  },
  exploreButton: {
    backgroundColor: '#374151',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  exploreButtonText: {
    color: '#fff',
    fontWeight: '500',
  },
  matchingImage: {
    width: 96,
    height: 96,
    borderRadius: 12,
  },
  messagesTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 12,
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  messageAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  messageTextBox: {
    marginLeft: 12,
    flex: 1,
  },
  messageSender: {
    color: '#fff',
    fontWeight: '600',
  },
  messagePreview: {
    color: '#9CA3AF',
    fontSize: 14,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#1F2937',
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
  navTextActive: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
  },
});

export default DashboardScreen;
