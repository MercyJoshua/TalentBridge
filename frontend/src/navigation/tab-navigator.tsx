import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { HomeScreen } from '../screens/student-dashboard/home-screen';
import { MessagesScreen } from '../screens/student-dashboard/message-screen';
import { NotificationsScreen } from '../screens/student-dashboard/notification-screen';
import { PassportScreen } from '../screens/student-dashboard/passport-screen';
import { ProfileScreen } from '../screens/student-dashboard/profile-screen';


const Tab = createBottomTabNavigator();

const getTabBarIcon = (routeName: string, focused: boolean) => {
  const icons = {
    Home: focused ? '🏠' : '🏡',
    Passport: focused ? '📋' : '📄',
    Messages: focused ? '💬' : '💭',
    Notifications: focused ? '🔔' : '🔕',
    Profile: focused ? '👤' : '👥',
  };
  return icons[routeName as keyof typeof icons] || '•';
};

export const TabNavigator: React.FC = () => {
  const { colors, theme } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.card,
          borderTopColor: colors.border,
          borderTopWidth: 1,
          paddingBottom: 8,
          paddingTop: 8,
          height: 70,
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.text + '60',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
          marginTop: 4,
        },
        tabBarIcon: ({ focused }) => (
          <Text style={{ fontSize: 24, color: focused ? colors.primary : colors.text + '60' }}>
            {getTabBarIcon(route.name, focused)}
          </Text>
        ),
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen 
        name="Passport" 
        component={PassportScreen}
        options={{
          tabBarLabel: 'Passport',
        }}
      />
      <Tab.Screen 
        name="Messages" 
        component={MessagesScreen}
        options={{
          tabBarLabel: 'Messages',
        }}
      />
      <Tab.Screen 
        name="Notifications" 
        component={NotificationsScreen}
        options={{
          tabBarLabel: 'Notifications',
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
};