import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import StudentDashboard from "../../screens/student-dashboard";
import PassportScreen from "../../screens/student-dashboard/passport-screen";
import MessagesScreen from "../../screens/student-dashboard/message-screen";
import NotificationsScreen from "../../screens/student-dashboard/notification-screen";
import ProfileScreen from "../../screens/student-dashboard/profile-screen";


const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === "Home") iconName = "home-outline";
          else if (route.name === "Passport") iconName = "document-text-outline";
          else if (route.name === "Messages") iconName = "chatbubble-outline";
          else if (route.name === "Notifications") iconName = "notifications-outline";
          else iconName = "person-outline";

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: { backgroundColor: "#0B132B", borderTopWidth: 0 },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#9CA3AF",
      })}
    >
      <Tab.Screen name="Home" component={StudentDashboard} />
      <Tab.Screen name="Passport" component={PassportScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
