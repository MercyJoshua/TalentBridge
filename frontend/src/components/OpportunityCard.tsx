import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import { Opportunity } from '@/lib/commons/types';

interface OpportunityCardProps {
  opportunity: Opportunity;
  onPress: () => void;
}

export const OpportunityCard: React.FC<OpportunityCardProps> = ({ opportunity, onPress }) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.header}>
        <Image 
          source={{ uri: opportunity.companyLogo }} 
          style={styles.logo}
          resizeMode="cover"
        />
        <View style={styles.headerText}>
          <Text style={[styles.title, { color: colors.text }]} numberOfLines={2}>
            {opportunity.title}
          </Text>
          <Text style={[styles.company, { color: colors.text }]} numberOfLines={1}>
            {opportunity.company}
          </Text>
        </View>
      </View>

      <View style={styles.details}>
        <View style={styles.row}>
          <Text style={[styles.location, { color: colors.text }]}>📍 {opportunity.location}</Text>
          <View style={[
            styles.typeTag,
            { backgroundColor: opportunity.type === 'remote' ? colors.primary + '20' : colors.accent + '20' }
          ]}>
            <Text style={[
              styles.typeText,
              { color: opportunity.type === 'remote' ? colors.primary : colors.accent }
            ]}>
              {opportunity.type.charAt(0).toUpperCase() + opportunity.type.slice(1)}
            </Text>
          </View>
        </View>

        <View style={styles.row}>
          <Text style={[styles.duration, { color: colors.text }]}>⏰ {opportunity.duration}</Text>
          {opportunity.isPaid && (
            <View style={[styles.paidTag, { backgroundColor: colors.highlight + '20' }]}>
              <Text style={[styles.paidText, { color: colors.text }]}>💰 Paid</Text>
            </View>
          )}
        </View>

        <View style={styles.skillsContainer}>
          {opportunity.skills.slice(0, 3).map((skill, index) => (
            <View key={index} style={[styles.skillTag, { backgroundColor: colors.primary + '15' }]}>
              <Text style={[styles.skillText, { color: colors.primary }]}>{skill}</Text>
            </View>
          ))}
          {opportunity.skills.length > 3 && (
            <Text style={[styles.moreSkills, { color: colors.text }]}>
              +{opportunity.skills.length - 3} more
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 12,
    marginRight: 12,
  },
  headerText: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  company: {
    fontSize: 14,
    opacity: 0.7,
  },
  details: {
    gap: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  location: {
    fontSize: 14,
    opacity: 0.8,
  },
  duration: {
    fontSize: 14,
    opacity: 0.8,
  },
  typeTag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  typeText: {
    fontSize: 12,
    fontWeight: '500',
  },
  paidTag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  paidText: {
    fontSize: 12,
    fontWeight: '500',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: 4,
  },
  skillTag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    marginRight: 6,
    marginBottom: 4,
  },
  skillText: {
    fontSize: 11,
    fontWeight: '500',
  },
  moreSkills: {
    fontSize: 11,
    opacity: 0.6,
    fontStyle: 'italic',
  },
});