import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { ThemeToggle } from '../../components/mini-components/theme-toggle';


interface SignupScreenProps {
  onLogin: () => void;
  onComplete: () => void;
}

export const SignupScreen: React.FC<SignupScreenProps> = ({ onLogin, onComplete }) => {
  const { colors } = useTheme();
  const [userType, setUserType] = useState<'student' | 'company'>('student');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    university: '',
    company: '',
  });

  const handleSignup = () => {
    if (!formData.name || !formData.email || !formData.password) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    if (userType === 'student' && !formData.university) {
      Alert.alert('Error', 'Please enter your university');
      return;
    }

    Alert.alert('Success', 'Account created successfully!', [
      { text: 'OK', onPress: onComplete }
    ]);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <ThemeToggle />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={[styles.title, { color: colors.text }]}>Create Account</Text>
        <Text style={[styles.subtitle, { color: colors.text }]}>Join TalentBridge today</Text>

        <View style={styles.toggleContainer}>
          <TouchableOpacity
            style={[
              styles.toggleButton,
              { 
                backgroundColor: userType === 'student' ? colors.primary : colors.card,
                borderColor: colors.border 
              }
            ]}
            onPress={() => setUserType('student')}
          >
            <Text style={[
              styles.toggleButtonText,
              { color: userType === 'student' ? '#FFFFFF' : colors.text }
            ]}>
              Student
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.toggleButton,
              { 
                backgroundColor: userType === 'company' ? colors.primary : colors.card,
                borderColor: colors.border 
              }
            ]}
            onPress={() => setUserType('company')}
          >
            <Text style={[
              styles.toggleButtonText,
              { color: userType === 'company' ? '#FFFFFF' : colors.text }
            ]}>
              Company
            </Text>
          </TouchableOpacity>
        </View>

        <TextInput
          style={[styles.input, { backgroundColor: colors.card, color: colors.text, borderColor: colors.border }]}
          placeholder={userType === 'student' ? 'Full Name' : 'Company Name'}
          placeholderTextColor={colors.text + '80'}
          value={formData.name}
          onChangeText={(text) => setFormData(prev => ({ ...prev, name: text }))}
        />

        <TextInput
          style={[styles.input, { backgroundColor: colors.card, color: colors.text, borderColor: colors.border }]}
          placeholder="Email"
          placeholderTextColor={colors.text + '80'}
          value={formData.email}
          onChangeText={(text) => setFormData(prev => ({ ...prev, email: text }))}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {userType === 'student' && (
          <TextInput
            style={[styles.input, { backgroundColor: colors.card, color: colors.text, borderColor: colors.border }]}
            placeholder="University"
            placeholderTextColor={colors.text + '80'}
            value={formData.university}
            onChangeText={(text) => setFormData(prev => ({ ...prev, university: text }))}
          />
        )}

        <TextInput
          style={[styles.input, { backgroundColor: colors.card, color: colors.text, borderColor: colors.border }]}
          placeholder="Password"
          placeholderTextColor={colors.text + '80'}
          value={formData.password}
          onChangeText={(text) => setFormData(prev => ({ ...prev, password: text }))}
          secureTextEntry
        />

        <TextInput
          style={[styles.input, { backgroundColor: colors.card, color: colors.text, borderColor: colors.border }]}
          placeholder="Confirm Password"
          placeholderTextColor={colors.text + '80'}
          value={formData.confirmPassword}
          onChangeText={(text) => setFormData(prev => ({ ...prev, confirmPassword: text }))}
          secureTextEntry
        />

        <TouchableOpacity
          style={[styles.signupButton, { backgroundColor: colors.primary }]}
          onPress={handleSignup}
        >
          <Text style={styles.signupButtonText}>Create Account</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onLogin}>
          <Text style={[styles.loginText, { color: colors.text }]}>
            Already have an account? <Text style={{ color: colors.primary }}>Sign In</Text>
          </Text>
        </TouchableOpacity>
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
    justifyContent: 'flex-end',
    padding: 20,
    paddingTop: 60,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    opacity: 0.7,
    marginBottom: 40,
  },
  toggleContainer: {
    flexDirection: 'row',
    marginBottom: 30,
    borderRadius: 25,
    overflow: 'hidden',
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderWidth: 1,
  },
  toggleButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
    marginBottom: 16,
  },
  signupButton: {
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  signupButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  loginText: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 40,
  },
});