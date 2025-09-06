import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import DashboardScreen from "../../screens/dashboard";
import AdminDashboard from "../../screens/../screens/admin-dashboard/admin-dashboard";
import StudentDashboard from "../../screens/student-dashboard";


export type AppStackParamList = {
  StudentDashboard: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="StudentDashboard" component={StudentDashboard} />
      <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
    </Stack.Navigator>
  );
}
