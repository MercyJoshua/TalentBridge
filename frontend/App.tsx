import React from 'react';
import { ThemeProvider } from './src/context/ThemeContext';
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from './src/navigation/root-navigator';
import ThemeToggle from './src/components/mini-components/theme-toggle';

export default function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
