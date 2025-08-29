import React from 'react';
import { ThemeProvider } from './src/context/ThemeContext';
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from './src/navigation/root-navigator';

export default function App() {
  return (
    <ThemeProvider>
     
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
