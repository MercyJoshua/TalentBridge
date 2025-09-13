import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { mockSkills } from '../../lib/data';
import { useAuth } from '../../context/auth-context';


const badges = [
  { level: 'Ruby', color: '#E53E3E', unlocked: true },
  { level: 'Silver', color: '#A0AEC0', unlocked: true },
  { level: 'Gold', color: '#D69E2E', unlocked: false },
  { level: 'Platinum', color: '#805AD5', unlocked: false },
];

export const PassportScreen: React.FC = () => {
  const { colors } = useTheme();
  const { user } = useAuth();
  const [showAssessment, setShowAssessment] = useState(false);

  const currentBadge = badges.find(badge => badge.unlocked) || badges[0];
  const hasSkills = mockSkills.length > 0;

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: colors.background }]}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <View style={styles.profileSection}>
          <Image 
            source={{ uri: user?.avatar }} 
            style={styles.avatar}
            resizeMode="cover"
          />
          <View style={styles.profileInfo}>
            <Text style={[styles.name, { color: colors.text }]}>{user?.name}</Text>
            <Text style={[styles.university, { color: colors.text }]}>
              {user?.university || 'University'}
            </Text>
          </View>
        </View>
      </View>

      <View style={[styles.section, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Skill Passport</Text>
        
        {!hasSkills ? (
          <View style={styles.emptyState}>
            <Text style={[styles.emptyTitle, { color: colors.text }]}>
              Build Your Skill Passport
            </Text>
            <Text style={[styles.emptyDescription, { color: colors.text }]}>
              Add at least 3 core skills or take our assessment to unlock your first badge and start your journey!
            </Text>
            
            <View style={styles.actionButtons}>
              <TouchableOpacity
                style={[styles.actionButton, { backgroundColor: colors.primary }]}
                onPress={() => setShowAssessment(true)}
              >
                <Text style={styles.actionButtonText}>Take Assessment</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={[styles.actionButton, { backgroundColor: colors.accent }]}
              >
                <Text style={styles.actionButtonText}>+ Add Skills</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={styles.skillsContent}>
            <View style={styles.currentBadge}>
              <View style={[styles.badgeCircle, { backgroundColor: currentBadge.color }]}>
                <Text style={styles.badgeText}>{currentBadge.level[0]}</Text>
              </View>
              <Text style={[styles.badgeLevel, { color: colors.text }]}>
                {currentBadge.level} Level
              </Text>
            </View>

            <View style={styles.skillsList}>
              {mockSkills.map((skill) => (
                <View key={skill.id} style={[styles.skillItem, { backgroundColor: colors.background }]}>
                  <Text style={[styles.skillName, { color: colors.text }]}>{skill.name}</Text>
                  <Text style={[styles.skillLevel, { color: colors.primary }]}>
                    {skill.level}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        )}
      </View>

      <View style={[styles.section, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Badge Levels</Text>
        
        <View style={styles.badgesGrid}>
          {badges.map((badge, index) => (
            <View key={badge.level} style={styles.badgeItem}>
              <View style={[
                styles.badgeCircle,
                { 
                  backgroundColor: badge.unlocked ? badge.color : colors.border,
                  opacity: badge.unlocked ? 1 : 0.5
                }
              ]}>
                <Text style={[
                  styles.badgeText,
                  { color: badge.unlocked ? '#FFFFFF' : colors.text }
                ]}>
                  {badge.level[0]}
                </Text>
              </View>
              <Text style={[styles.badgeName, { color: colors.text }]}>
                {badge.level}
              </Text>
              {badge.unlocked && (
                <Text style={[styles.unlockedText, { color: colors.primary }]}>
                  ✓ Unlocked
                </Text>
              )}
            </View>
          ))}
        </View>
      </View>

      <View style={[styles.section, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Achievement Visas</Text>
        
        <View style={styles.visasContainer}>
          <Text style={[styles.comingSoon, { color: colors.text }]}>
            🎯 Complete challenges and earn special visas for your achievements!
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    paddingTop: 60,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  university: {
    fontSize: 14,
    opacity: 0.7,
  },
  section: {
    margin: 20,
    marginTop: 0,
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    textAlign: 'center',
  },
  emptyDescription: {
    fontSize: 14,
    opacity: 0.7,
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 20,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  actionButton: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  skillsContent: {
    alignItems: 'center',
  },
  currentBadge: {
    alignItems: 'center',
    marginBottom: 24,
  },
  badgeCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  badgeText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  badgeLevel: {
    fontSize: 16,
    fontWeight: '600',
  },
  skillsList: {
    width: '100%',
    gap: 8,
  },
  skillItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
  },
  skillName: {
    fontSize: 14,
    fontWeight: '500',
  },
  skillLevel: {
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  badgesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  badgeItem: {
    width: '48%',
    alignItems: 'center',
    marginBottom: 16,
  },
  badgeName: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 8,
  },
  unlockedText: {
    fontSize: 12,
    marginTop: 4,
  },
  visasContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  comingSoon: {
    fontSize: 14,
    opacity: 0.7,
    textAlign: 'center',
  },
});