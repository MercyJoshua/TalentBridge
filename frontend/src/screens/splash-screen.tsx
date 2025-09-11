import React, { useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { AnimatedLogo } from '../components/AnimatedLogo';


interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const { colors, theme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar 
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'} 
        backgroundColor={colors.background}
      />
      
      <View style={styles.content}>
        <AnimatedLogo size={150} />
        
        <Text style={[styles.title, { color: colors.primary }]}>
          TalentVoyage
        </Text>
        
        <Text style={[styles.tagline, { color: colors.text }]}>
          Connecting Global Talent
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 24,
    letterSpacing: 1,
  },
  tagline: {
    fontSize: 16,
    marginTop: 8,
    opacity: 0.8,
    fontWeight: '300',
  },
});