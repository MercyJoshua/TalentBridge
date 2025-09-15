import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/context/ThemeContext';
import { useAuth } from '@/context/auth-context';
import { IMAGES } from '@/lib/commons/constants';
import { mockCompanyStats } from '@/lib/companyData';

export const AdminDashboard: React.FC = () => {
  const { colors } = useTheme();
  const { user } = useAuth();

  const StatCard: React.FC<{ title: string; value: number; icon: string }> = ({
    title,
    value,
    icon,
  }) => (
    <View style={[styles.statCard, { backgroundColor: colors.card }]}>
      <Ionicons name={icon as any} size={24} color={colors.primary} />
      <Text style={[styles.statValue, { color: colors.text }]}>{value}</Text>
      <Text style={[styles.statTitle, { color: colors.text + '80' }]}>
        {title}
      </Text>
    </View>
  );

  const ActivityItem: React.FC<{ title: string; time: string; type: string }> = ({
    title,
    time,
    type,
  }) => (
    <View style={[styles.activityItem, { borderBottomColor: colors.border }]}>
      <View style={styles.activityContent}>
        <Text style={[styles.activityTitle, { color: colors.text }]}>
          {title}
        </Text>
        <Text style={[styles.activityTime, { color: colors.text + '60' }]}>
          {time}
        </Text>
      </View>
      <View style={[styles.activityBadge, { backgroundColor: colors.primary }]}>
        <Text style={styles.activityType}>{type}</Text>
      </View>
    </View>
  );

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.welcomeSection}>
          <Image source={{ uri: IMAGES.companyLogos[0] }} style={styles.companyLogo} />
          <View>
            <Text style={[styles.welcomeText, { color: colors.text + '80' }]}>
              Welcome back,
            </Text>
            <Text style={[styles.companyName, { color: colors.text }]}>
              {user?.name}
            </Text>
          </View>
        </View>
      </View>

      {/* Stats Cards */}
      <View style={styles.statsContainer}>
        <StatCard
          title="Active Postings"
          value={mockCompanyStats.activePostings}
          icon="briefcase"
        />
        <StatCard
          title="Total Applicants"
          value={mockCompanyStats.totalApplicants}
          icon="people"
        />
        <StatCard
          title="Shortlisted"
          value={mockCompanyStats.shortlistedCandidates}
          icon="star"
        />
        <StatCard
          title="Unread Messages"
          value={mockCompanyStats.messagesUnread}
          icon="mail"
        />
      </View>

      {/* Action Buttons */}
      <View style={styles.actionsContainer}>
        <TouchableOpacity
          style={[styles.actionButton, { backgroundColor: colors.primary }]}
        >
          <Ionicons name="add" size={20} color="white" />
          <Text style={styles.actionButtonText}>Post a Job</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionButton, { backgroundColor: colors.accent }]}
        >
          <Ionicons name="search" size={20} color="white" />
          <Text style={styles.actionButtonText}>Browse Candidates</Text>
        </TouchableOpacity>
      </View>

      {/* Recent Activity */}
      <View style={[styles.activityContainer, { backgroundColor: colors.card }]}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          Recent Activity
        </Text>
        <ActivityItem
          title="New application for Frontend Developer"
          time="2 hours ago"
          type="NEW"
        />
        <ActivityItem
          title="Message from Sarah Chen"
          time="4 hours ago"
          type="MSG"
        />
        <ActivityItem
          title="Candidate shortlisted for Data Science role"
          time="1 day ago"
          type="UPDATE"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  header: {
    padding: 20,
  },
  welcomeSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  companyLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  welcomeText: {
    fontSize: 16,
  },
  companyName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  statCard: {
    width: '48%',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 10,
    marginHorizontal: '1%',
  },
  statValue: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  statTitle: {
    fontSize: 14,
    textAlign: 'center',
  },
  actionsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 12,
    marginHorizontal: 5,
  },
  actionButtonText: {
    color: 'white',
    fontWeight: '600',
    marginLeft: 8,
  },
  activityContainer: {
    margin: 20,
    borderRadius: 12,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  activityItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  activityTime: {
    fontSize: 14,
    marginTop: 4,
  },
  activityBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  activityType: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
});