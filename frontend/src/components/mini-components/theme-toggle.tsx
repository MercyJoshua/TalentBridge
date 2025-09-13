import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../context/ThemeContext';


export const ThemeToggle: React.FC = () => {
  const { theme, colors, toggleTheme } = useTheme();

  return (
    <TouchableOpacity
      style={[styles.toggle, { backgroundColor: colors.card, borderColor: colors.border }]}
      onPress={toggleTheme}
    >
      <Text style={[styles.toggleText, { color: colors.text }]}>
        {theme === 'light' ? '🌙' : '☀️'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  toggle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  toggleText: {
    fontSize: 20,
  },
});