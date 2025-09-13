import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider, useTheme } from './src/context/ThemeContext';
import { useAuth, AuthProvider } from './src/context/auth-context';
import { TabNavigator } from './src/navigation/tab-navigator';
import { LoginScreen } from './src/screens/auth/login-screen';
import { SignupScreen } from './src/screens/auth/signup-screen';
import { OnboardingScreen } from './src/screens/onboard-screen';
import { SplashScreen } from './src/screens/splash-screen';


type AppState = 'splash' | 'onboarding' | 'auth' | 'main';

const AppContent: React.FC = () => {
  const { colors, theme } = useTheme();
  const { user } = useAuth();
  const [appState, setAppState] = useState<AppState>('splash');
  const [authScreen, setAuthScreen] = useState<'login' | 'signup'>('login');

  useEffect(() => {
    console.log('AppState:', appState); // Debug log
    if (user) {
      setAppState('main');
    } else if (appState === 'splash') {
     
    } else {
      setAppState('auth');
    }
  }, [user]);

  const handleSplashComplete = () => {
    setAppState('onboarding');
  };

  const handleOnboardingComplete = () => {
    setAppState('auth');
  };

  const renderAuthScreen = () => {
    if (authScreen === 'login') {
      return (
        <LoginScreen
          onSignup={() => setAuthScreen('signup')}
          onForgotPassword={() => {}}
        />
      );
    } else {
      return (
        <SignupScreen
          onLogin={() => setAuthScreen('login')}
          onComplete={() => setAuthScreen('login')}
        />
      );
    }
  };

  return (
    <>
      <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
      {appState === 'splash' && <SplashScreen onComplete={handleSplashComplete} />}
      {appState === 'onboarding' && <OnboardingScreen onComplete={handleOnboardingComplete} />}
      {appState === 'auth' && renderAuthScreen()}
      {appState === 'main' && <TabNavigator />}
    </>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
}