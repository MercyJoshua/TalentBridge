import { useTheme } from '@/context/ThemeContext';
import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';


const mockNotifications = [
  {
    id: '1',
    title: 'New Opportunity Match',
    message: 'Frontend Developer Intern at TechCorp matches your skills!',
    timestamp: '5 minutes ago',
    type: 'opportunity',
    read: false,
  },
  {
    id: '2',
    title: 'Message Received',
    message: 'Sarah Chen sent you a message about the UX Design position.',
    timestamp: '1 hour ago',
    type: 'message',
    read: false,
  },
  {
    id: '3',
    title: 'Badge Unlocked!',
    message: 'Congratulations! You earned the Silver Level badge.',
    timestamp: '2 hours ago',
    type: 'achievement',
    read: true,
  },
  {
    id: '4',
    title: 'Application Update',
    message: 'Your application for Data Science Trainee has been reviewed.',
    timestamp: 'Yesterday',
    type: 'opportunity',
    read: true,
  },
  {
    id: '5',
    title: 'Skill Assessment Available',
    message: 'Complete your Python assessment to improve your profile.',
    timestamp: '2 days ago',
    type: 'achievement',
    read: true,
  },
];

const getNotificationIcon = (type: string) => {
  switch (type) {
    case 'opportunity':
      return '💼';
    case 'message':
      return '💬';
    case 'achievement':
      return '🏆';
    default:
      return '🔔';
  }
};

export const NotificationsScreen: React.FC = () => {
  const { colors } = useTheme();

  const groupedNotifications = mockNotifications.reduce((groups, notification) => {
    const isToday = notification.timestamp.includes('minutes') || notification.timestamp.includes('hour');
    const isYesterday = notification.timestamp === 'Yesterday';
    
    let group = 'Earlier';
    if (isToday) group = 'Today';
    else if (isYesterday) group = 'Yesterday';

    if (!groups[group]) groups[group] = [];
    groups[group].push(notification);
    return groups;
  }, {} as Record<string, typeof mockNotifications>);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>Notifications</Text>
        
        <TouchableOpacity>
          <Text style={[styles.markAllRead, { color: colors.primary }]}>
            Mark all read
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.notificationsList} showsVerticalScrollIndicator={false}>
        {Object.entries(groupedNotifications).map(([group, notifications]) => (
          <View key={group} style={styles.group}>
            <Text style={[styles.groupTitle, { color: colors.text }]}>{group}</Text>
            
            {notifications.map((notification) => (
              <TouchableOpacity
                key={notification.id}
                style={[
                  styles.notificationItem,
                  { 
                    backgroundColor: notification.read ? colors.background : colors.card,
                    borderColor: colors.border,
                    borderLeftColor: notification.read ? colors.border : colors.primary,
                  }
                ]}
                activeOpacity={0.7}
              >
                <View style={styles.notificationContent}>
                  <View style={styles.notificationHeader}>
                    <Text style={styles.notificationIcon}>
                      {getNotificationIcon(notification.type)}
                    </Text>
                    <View style={styles.notificationText}>
                      <Text style={[
                        styles.notificationTitle,
                        { 
                          color: colors.text,
                          fontWeight: notification.read ? '500' : '600'
                        }
                      ]}>
                        {notification.title}
                      </Text>
                      <Text style={[
                        styles.notificationMessage,
                        { 
                          color: colors.text,
                          opacity: notification.read ? 0.6 : 0.8
                        }
                      ]}>
                        {notification.message}
                      </Text>
                    </View>
                    {!notification.read && (
                      <View style={[styles.unreadDot, { backgroundColor: colors.primary }]} />
                    )}
                  </View>
                  <Text style={[styles.timestamp, { color: colors.text }]}>
                    {notification.timestamp}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ))}

        {mockNotifications.length === 0 && (
          <View style={styles.emptyState}>
            <Text style={[styles.emptyTitle, { color: colors.text }]}>
              No notifications yet
            </Text>
            <Text style={[styles.emptyDescription, { color: colors.text }]}>
              You'll see updates about opportunities, messages, and achievements here.
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  markAllRead: {
    fontSize: 14,
    fontWeight: '500',
  },
  notificationsList: {
    flex: 1,
    paddingHorizontal: 20,
  },
  group: {
    marginBottom: 24,
  },
  groupTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
    opacity: 0.8,
  },
  notificationItem: {
    borderRadius: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderLeftWidth: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  notificationContent: {
    padding: 16,
  },
  notificationHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  notificationIcon: {
    fontSize: 20,
    marginRight: 12,
    marginTop: 2,
  },
  notificationText: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    marginBottom: 4,
  },
  notificationMessage: {
    fontSize: 14,
    lineHeight: 18,
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginTop: 6,
  },
  timestamp: {
    fontSize: 12,
    opacity: 0.6,
    textAlign: 'right',
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
});