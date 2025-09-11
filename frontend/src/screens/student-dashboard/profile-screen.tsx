import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/auth-context';
import { ThemeToggle } from '../../components/mini-components/theme-toggle';


const menuItems = [
  { id: 'edit', title: 'Edit Profile', icon: '✏️' },
  { id: 'settings', title: 'Settings', icon: '⚙️' },
  { id: 'privacy', title: 'Privacy', icon: '🔒' },
  { id: 'help', title: 'Help & Support', icon: '❓' },
  { id: 'about', title: 'About TalentBridge', icon: 'ℹ️' },
];

export const ProfileScreen: React.FC = () => {
  const { colors, theme } = useTheme();
  const { user, logout } = useAuth();

  const handleMenuPress = (itemId: string) => {
    switch (itemId) {
      case 'edit':
        Alert.alert('Edit Profile', 'Profile editing feature coming soon!');
        break;
      case 'settings':
        Alert.alert('Settings', 'Settings panel coming soon!');
        break;
      case 'privacy':
        Alert.alert('Privacy', 'Privacy settings coming soon!');
        break;
      case 'help':
        Alert.alert('Help & Support', 'Help center coming soon!');
        break;
      case 'about':
        Alert.alert('About TalentBridge', 'TalentBridge v1.0\nConnecting global talent with opportunities.');
        break;
    }
  };

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Logout', style: 'destructive', onPress: logout },
      ]
    );
  };

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: colors.background }]}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>Profile</Text>
        <ThemeToggle />
      </View>

      <View style={[styles.profileCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <View style={styles.profileHeader}>
          <Image 
            source={{ uri: user?.avatar }} 
            style={styles.avatar}
            resizeMode="cover"
          />
          <TouchableOpacity style={[styles.editAvatarButton, { backgroundColor: colors.primary }]}>
            <Text style={styles.editAvatarText}>📷</Text>
          </TouchableOpacity>
        </View>

        <Text style={[styles.name, { color: colors.text }]}>{user?.name}</Text>
        <Text style={[styles.email, { color: colors.text }]}>{user?.email}</Text>
        
        {user?.university && (
          <Text style={[styles.university, { color: colors.text }]}>
            🎓 {user.university}
          </Text>
        )}

        {user?.bio && (
          <Text style={[styles.bio, { color: colors.text }]}>
            {user.bio}
          </Text>
        )}

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={[styles.statNumber, { color: colors.primary }]}>12</Text>
            <Text style={[styles.statLabel, { color: colors.text }]}>Applications</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={[styles.statNumber, { color: colors.primary }]}>5</Text>
            <Text style={[styles.statLabel, { color: colors.text }]}>Skills</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={[styles.statNumber, { color: colors.primary }]}>2</Text>
            <Text style={[styles.statLabel, { color: colors.text }]}>Badges</Text>
          </View>
        </View>
      </View>

      <View style={[styles.menuSection, { backgroundColor: colors.card, borderColor: colors.border }]}>
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[styles.menuItem, { borderBottomColor: colors.border }]}
            onPress={() => handleMenuPress(item.id)}
            activeOpacity={0.7}
          >
            <Text style={styles.menuIcon}>{item.icon}</Text>
            <Text style={[styles.menuTitle, { color: colors.text }]}>{item.title}</Text>
            <Text style={[styles.menuArrow, { color: colors.text }]}>›</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.themeSection}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Appearance</Text>
        <View style={[styles.themeCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <View style={styles.themeInfo}>
            <Text style={[styles.themeTitle, { color: colors.text }]}>
              {theme === 'light' ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </Text>
            <Text style={[styles.themeDescription, { color: colors.text }]}>
              {theme === 'light' ? 'Bright and clean interface' : 'Easy on the eyes'}
            </Text>
          </View>
          <ThemeToggle />
        </View>
      </View>

      <TouchableOpacity
        style={[styles.logoutButton, { backgroundColor: colors.accent }]}
        onPress={handleLogout}
        activeOpacity={0.8}
      >
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={[styles.footerText, { color: colors.text }]}>
          TalentBridge v1.0 • Made with ❤️
        </Text>
      </View>
    </ScrollView>
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
  profileCard: {
    margin: 20,
    marginTop: 0,
    padding: 24,
    borderRadius: 16,
    borderWidth: 1,
    alignItems: 'center',
  },
  profileHeader: {
    position: 'relative',
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editAvatarButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editAvatarText: {
    fontSize: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center',
  },
  email: {
    fontSize: 16,
    opacity: 0.7,
    marginBottom: 8,
    textAlign: 'center',
  },
  university: {
    fontSize: 14,
    opacity: 0.8,
    marginBottom: 12,
    textAlign: 'center',
  },
  bio: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    marginBottom: 20,
    opacity: 0.8,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    opacity: 0.7,
  },
  menuSection: {
    margin: 20,
    borderRadius: 16,
    borderWidth: 1,
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
  },
  menuIcon: {
    fontSize: 20,
    marginRight: 16,
    width: 24,
  },
  menuTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
  },
  menuArrow: {
    fontSize: 20,
    opacity: 0.5,
  },
  themeSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  themeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
  },
  themeInfo: {
    flex: 1,
  },
  themeTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  themeDescription: {
    fontSize: 14,
    opacity: 0.7,
  },
  logoutButton: {
    margin: 20,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  logoutText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 40,
  },
  footerText: {
    fontSize: 12,
    opacity: 0.6,
  },
});