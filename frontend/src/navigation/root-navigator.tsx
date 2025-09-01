import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardingScreen from "../screens/onboard-screen";
import SplashScreen from "../screens/landing-page";
import SignupScreen from "../screens/signup";
import LoginScreen from "../screens/login";
import LandingAuthScreen from "../screens/auth-screen";
import ThemeToggle from "../components/mini-components/theme-toggle";
import { useTheme } from "../context/ThemeContext";
import StudentDashboard from "../screens/student-dashboard";

const Stack = createStackNavigator();

export default function RootNavigator() {
    const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
<Stack.Navigator   screenOptions={{
        headerStyle: {
          backgroundColor: isDark ? "#0B132B" : "#FAFAFA",
        },
        headerTintColor: isDark ? "#EAEAEA" : "#4A4A4A", 
        headerTitle: "", 
        headerRight: () => <ThemeToggle />,
      }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="StudentDashboard" component={StudentDashboard} />
      <Stack.Screen name="Auth" component={LandingAuthScreen} />
<Stack.Screen name="Onboarding">
  {props => <OnboardingScreen {...props} onDone={() => console.log("Done!")} />}
</Stack.Screen>

<Stack.Screen name="Signup">
  {props => <SignupScreen {...props} onSuccess={() => console.log("Signed up!")} />}
</Stack.Screen>

<Stack.Screen name="Login">
  {props => <LoginScreen {...props} onSuccess={() => console.log("Logged in!")} />}
</Stack.Screen>


    </Stack.Navigator>
  );
}
