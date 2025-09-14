import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '@/context/auth-context';

export const ProfileScreen: React.FC = () => {
  const { colors } = useTheme();
  const { user, logout } = useAuth();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>Profile</Text>
      </View>
      <View style={styles.content}>
        <Text style={[styles.companyName, { color: colors.text }]}>{user?.name}</Text>
        <Text style={[styles.email, { color: colors.text + '80' }]}>{user?.email}</Text>
        <TouchableOpacity 
          style={[styles.logoutButton, { backgroundColor: colors.accent }]}
          onPress={logout}
        >
          <Ionicons name="log-out" size={20} color="white" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50 },
  header: { padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold' },
  content: { flex: 1, padding: 20 },
  companyName: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  email: { fontSize: 16, marginBottom: 40 },
  logoutButton: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 15, borderRadius: 12 },
  logoutText: { color: 'white', fontWeight: '600', marginLeft: 8 },
});