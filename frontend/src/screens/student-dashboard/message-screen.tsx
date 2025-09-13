import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { IMAGES } from '../../lib/commons/constants';
import { useTheme } from '../../context/ThemeContext';


const mockConversations = [
  {
    id: '1',
    name: 'TechCorp Recruiter',
    avatar: IMAGES.avatars[1],
    lastMessage: 'Thanks for your interest in the Frontend Developer position!',
    timestamp: '2m ago',
    unread: true,
  },
  {
    id: '2',
    name: 'Sarah Chen',
    avatar: IMAGES.avatars[2],
    lastMessage: 'The UX Design internship sounds perfect for you.',
    timestamp: '1h ago',
    unread: false,
  },
  {
    id: '3',
    name: 'DataTech HR',
    avatar: IMAGES.avatars[3],
    lastMessage: 'We would love to schedule an interview with you.',
    timestamp: '3h ago',
    unread: true,
  },
];

export const MessagesScreen: React.FC = () => {
  const { colors } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredConversations = mockConversations.filter(conversation =>
    conversation.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>Messages</Text>
        
        <View style={styles.searchContainer}>
          <TextInput
            style={[styles.searchInput, { backgroundColor: colors.card, color: colors.text, borderColor: colors.border }]}
            placeholder="Search conversations..."
            placeholderTextColor={colors.text + '60'}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      <ScrollView style={styles.conversationsList} showsVerticalScrollIndicator={false}>
        {filteredConversations.map((conversation) => (
          <TouchableOpacity
            key={conversation.id}
            style={[styles.conversationItem, { backgroundColor: colors.card, borderColor: colors.border }]}
            activeOpacity={0.7}
          >
            <View style={styles.avatarContainer}>
              <Image 
                source={{ uri: conversation.avatar }} 
                style={styles.avatar}
                resizeMode="cover"
              />
              {conversation.unread && (
                <View style={[styles.unreadDot, { backgroundColor: colors.accent }]} />
              )}
            </View>

            <View style={styles.conversationContent}>
              <View style={styles.conversationHeader}>
                <Text style={[styles.name, { color: colors.text }]} numberOfLines={1}>
                  {conversation.name}
                </Text>
                <Text style={[styles.timestamp, { color: colors.text }]}>
                  {conversation.timestamp}
                </Text>
              </View>

              <Text 
                style={[
                  styles.lastMessage, 
                  { 
                    color: colors.text,
                    fontWeight: conversation.unread ? '600' : '400',
                    opacity: conversation.unread ? 1 : 0.7
                  }
                ]} 
                numberOfLines={2}
              >
                {conversation.lastMessage}
              </Text>
            </View>
          </TouchableOpacity>
        ))}

        {filteredConversations.length === 0 && (
          <View style={styles.emptyState}>
            <Text style={[styles.emptyTitle, { color: colors.text }]}>
              {searchQuery ? 'No conversations found' : 'No messages yet'}
            </Text>
            <Text style={[styles.emptyDescription, { color: colors.text }]}>
              {searchQuery 
                ? 'Try searching with different keywords'
                : 'Start connecting with companies and other professionals!'
              }
            </Text>
          </View>
        )}
      </ScrollView>

      <TouchableOpacity 
        style={[styles.fab, { backgroundColor: colors.primary }]}
        activeOpacity={0.8}
      >
        <Text style={styles.fabText}>✉️</Text>
      </TouchableOpacity>
    </View>
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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  searchContainer: {
    marginBottom: 10,
  },
  searchInput: {
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
  },
  conversationsList: {
    flex: 1,
    paddingHorizontal: 20,
  },
  conversationItem: {
    flexDirection: 'row',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  unreadDot: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  conversationContent: {
    flex: 1,
    justifyContent: 'center',
  },
  conversationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
  },
  timestamp: {
    fontSize: 12,
    opacity: 0.6,
  },
  lastMessage: {
    fontSize: 14,
    lineHeight: 18,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    textAlign: 'center',
  },
  emptyDescription: {
    fontSize: 14,
    opacity: 0.7,
    textAlign: 'center',
    lineHeight: 20,
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  fabText: {
    fontSize: 24,
  },
});