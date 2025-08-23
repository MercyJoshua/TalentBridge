import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardingScreen from "../screens/onboard-screen";
import SplashScreen from "../screens/landing-page";
import SignupScreen from "../screens/signup";
import LoginScreen from "../screens/login";
import DashboardScreen from "../screens/dashboard";
import LandingAuthScreen from "../screens/auth-screen";

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
<Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
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
