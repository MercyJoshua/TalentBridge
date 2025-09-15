import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/context/ThemeContext';
import { Candidate } from '@/lib/commons/types';
import { mockCandidates } from '@/lib/companyData';

export const CandidatesScreen: React.FC = () => {
  const { colors } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const CandidateCard: React.FC<{ candidate: Candidate }> = ({ candidate }) => (
    <TouchableOpacity style={[styles.candidateCard, { backgroundColor: colors.card }]}>
      <View style={styles.candidateHeader}>
        <Image source={{ uri: candidate.avatar }} style={styles.candidateAvatar} />
        <View style={styles.candidateInfo}>
          <Text style={[styles.candidateName, { color: colors.text }]}>
            {candidate.name}
          </Text>
          <Text style={[styles.candidateUniversity, { color: colors.text + '80' }]}>
            {candidate.university}
          </Text>
          <View style={[
            styles.levelBadge,
            { backgroundColor: getLevelColor(candidate.level) }
          ]}>
            <Text style={styles.levelText}>{candidate.level}</Text>
          </View>
        </View>
        <View style={styles.candidateActions}>
          {candidate.shortlisted && (
            <View style={[styles.shortlistedBadge, { backgroundColor: colors.highlight }]}>
              <Ionicons name="star" size={12} color="white" />
            </View>
          )}
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="ellipsis-horizontal" size={20} color={colors.text} />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={[styles.candidateBio, { color: colors.text + '80' }]}>
        {candidate.bio}
      </Text>

      <View style={styles.skillsContainer}>
        {candidate.skills.slice(0, 3).map((skill, index) => (
          <View key={index} style={[styles.skillChip, { backgroundColor: colors.primary + '20' }]}>
            <Text style={[styles.skillText, { color: colors.primary }]}>{skill}</Text>
          </View>
        ))}
        {candidate.skills.length > 3 && (
          <Text style={[styles.moreSkills, { color: colors.text + '60' }]}>
            +{candidate.skills.length - 3} more
          </Text>
        )}
      </View>

      <View style={styles.candidateFooter}>
        <TouchableOpacity style={[styles.footerButton, { borderColor: colors.primary }]}>
          <Ionicons name="chatbubble" size={16} color={colors.primary} />
          <Text style={[styles.footerButtonText, { color: colors.primary }]}>Message</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.footerButton, { backgroundColor: colors.primary }]}>
          <Ionicons name="star" size={16} color="white" />
          <Text style={[styles.footerButtonText, { color: 'white' }]}>Shortlist</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Ruby': return '#E53E3E';
      case 'Silver': return '#718096';
      case 'Gold': return '#D69E2E';
      case 'Platinum': return '#553C9A';
      default: return colors.primary;
    }
  };

  const FilterChip: React.FC<{ title: string; value: string; isActive: boolean }> = ({
    title,
    value,
    isActive,
  }) => (
    <TouchableOpacity
      style={[
        styles.filterChip,
        {
          backgroundColor: isActive ? colors.primary : colors.card,
          borderColor: colors.border,
        },
      ]}
      onPress={() => setSelectedFilter(value)}
    >
      <Text
        style={[
          styles.filterChipText,
          { color: isActive ? 'white' : colors.text },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: colors.text }]}>
          Candidates
        </Text>
      </View>

      {/* Search Bar */}
      <View style={[styles.searchContainer, { backgroundColor: colors.card }]}>
        <Ionicons name="search" size={20} color={colors.text + '60'} />
        <TextInput
          style={[styles.searchInput, { color: colors.text }]}
          placeholder="Search candidates..."
          placeholderTextColor={colors.text + '60'}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Filter Chips */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filtersContainer}>
        <FilterChip title="All" value="all" isActive={selectedFilter === 'all'} />
        <FilterChip title="Ruby" value="ruby" isActive={selectedFilter === 'ruby'} />
        <FilterChip title="Silver" value="silver" isActive={selectedFilter === 'silver'} />
        <FilterChip title="Gold" value="gold" isActive={selectedFilter === 'gold'} />
        <FilterChip title="Platinum" value="platinum" isActive={selectedFilter === 'platinum'} />
        <FilterChip title="Shortlisted" value="shortlisted" isActive={selectedFilter === 'shortlisted'} />
      </ScrollView>

      {/* Candidates List */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {mockCandidates.map((candidate) => (
          <CandidateCard key={candidate.id} candidate={candidate} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 15,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 12,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  filtersContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  filterChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
  },
  filterChipText: {
    fontSize: 14,
    fontWeight: '500',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  candidateCard: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },
  candidateHeader: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  candidateAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  candidateInfo: {
    flex: 1,
  },
  candidateName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  candidateUniversity: {
    fontSize: 14,
    marginBottom: 8,
  },
  levelBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  levelText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
  candidateActions: {
    alignItems: 'flex-end',
  },
  shortlistedBadge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  actionButton: {
    padding: 4,
  },
  candidateBio: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 15,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginBottom: 15,
  },
  skillChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  skillText: {
    fontSize: 12,
    fontWeight: '500',
  },
  moreSkills: {
    fontSize: 12,
    fontStyle: 'italic',
  },
  candidateFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'transparent',
    flex: 0.48,
    justifyContent: 'center',
  },
  footerButtonText: {
    marginLeft: 6,
    fontSize: 14,
    fontWeight: '600',
  },
});