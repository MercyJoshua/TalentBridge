import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingAuthScreen from "../../screens/auth-screen";
import LoginScreen from "../../screens/login";
import SignupScreen from "../../screens/signup";
import { SkillAssessmentStackParamList } from "./assessment-navigator";


export type AuthStackParamList = {
  LandingAuth: undefined;
  Login: undefined;
  Signup: undefined;
  StudentDashboard: undefined;
  SkillAssessment: { screen?: keyof SkillAssessmentStackParamList } | undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

type Props = {
  onAuthSuccess: (token: string) => void;
};

export default function AuthNavigator({ onAuthSuccess }: Props) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LandingAuth" component={LandingAuthScreen} />
      <Stack.Screen name="Login">
        {(props) => <LoginScreen {...props} onSuccess={onAuthSuccess} />}
      </Stack.Screen>
      <Stack.Screen name="Signup">
        {(props) => <SignupScreen {...props} onSuccess={onAuthSuccess} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
