import React, { useState } from 'react';
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
import { JobPosting } from '@/lib/commons/types';
import { mockJobPostings } from '@/lib/companyData';

export const PostingsScreen: React.FC = () => {
  const { colors } = useTheme();
  const [showForm, setShowForm] = useState(false);

  const PostingCard: React.FC<{ posting: JobPosting }> = ({ posting }) => (
    <View style={[styles.postingCard, { backgroundColor: colors.card }]}>
      <View style={styles.postingHeader}>
        <Image source={{ uri: posting.companyLogo }} style={styles.companyLogo} />
        <View style={styles.postingInfo}>
          <Text style={[styles.postingTitle, { color: colors.text }]}>
            {posting.title}
          </Text>
          <Text style={[styles.postingLocation, { color: colors.text + '80' }]}>
            {posting.location} • {posting.type}
          </Text>
          <Text style={[styles.postingCompensation, { color: colors.primary }]}>
            {posting.compensation}
          </Text>
        </View>
        <View style={[
          styles.statusBadge,
          { backgroundColor: posting.status === 'open' ? colors.primary : colors.text + '40' }
        ]}>
          <Text style={styles.statusText}>{posting.status.toUpperCase()}</Text>
        </View>
      </View>
      
      <View style={styles.postingStats}>
        <View style={styles.statItem}>
          <Ionicons name="people" size={16} color={colors.text + '80'} />
          <Text style={[styles.statText, { color: colors.text + '80' }]}>
            {posting.applicantsCount} applicants
          </Text>
        </View>
        <Text style={[styles.postedDate, { color: colors.text + '60' }]}>
          Posted {posting.postedAt.toLocaleDateString()}
        </Text>
      </View>

      <View style={styles.postingActions}>
        <TouchableOpacity style={[styles.actionBtn, { borderColor: colors.border }]}>
          <Ionicons name="eye" size={16} color={colors.text} />
          <Text style={[styles.actionText, { color: colors.text }]}>View</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionBtn, { borderColor: colors.border }]}>
          <Ionicons name="create" size={16} color={colors.text} />
          <Text style={[styles.actionText, { color: colors.text }]}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionBtn, { borderColor: colors.border }]}>
          <Ionicons name="people" size={16} color={colors.text} />
          <Text style={[styles.actionText, { color: colors.text }]}>Applicants</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: colors.text }]}>
          Job Postings
        </Text>
        <TouchableOpacity
          style={[styles.addButton, { backgroundColor: colors.primary }]}
          onPress={() => setShowForm(true)}
        >
          <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Postings List */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {mockJobPostings.map((posting) => (
          <PostingCard key={posting.id} posting={posting} />
        ))}
      </ScrollView>

      {/* Quick Stats */}
      <View style={[styles.quickStats, { backgroundColor: colors.card }]}>
        <View style={styles.quickStatItem}>
          <Text style={[styles.quickStatValue, { color: colors.primary }]}>
            {mockJobPostings.length}
          </Text>
          <Text style={[styles.quickStatLabel, { color: colors.text + '80' }]}>
            Total Postings
          </Text>
        </View>
        <View style={styles.quickStatItem}>
          <Text style={[styles.quickStatValue, { color: colors.accent }]}>
            {mockJobPostings.filter(p => p.status === 'open').length}
          </Text>
          <Text style={[styles.quickStatLabel, { color: colors.text + '80' }]}>
            Active
          </Text>
        </View>
        <View style={styles.quickStatItem}>
          <Text style={[styles.quickStatValue, { color: colors.highlight }]}>
            {mockJobPostings.reduce((sum, p) => sum + p.applicantsCount, 0)}
          </Text>
          <Text style={[styles.quickStatLabel, { color: colors.text + '80' }]}>
            Total Applicants
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  addButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  postingCard: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },
  postingHeader: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  companyLogo: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 15,
  },
  postingInfo: {
    flex: 1,
  },
  postingTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  postingLocation: {
    fontSize: 14,
    marginBottom: 4,
  },
  postingCompensation: {
    fontSize: 16,
    fontWeight: '600',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    height: 32,
    justifyContent: 'center',
  },
  statusText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
  postingStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    marginLeft: 6,
    fontSize: 14,
  },
  postedDate: {
    fontSize: 12,
  },
  postingActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    flex: 0.3,
    justifyContent: 'center',
  },
  actionText: {
    marginLeft: 6,
    fontSize: 14,
    fontWeight: '500',
  },
  quickStats: {
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  quickStatItem: {
    flex: 1,
    alignItems: 'center',
  },
  quickStatValue: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  quickStatLabel: {
    fontSize: 12,
    marginTop: 4,
  },
});