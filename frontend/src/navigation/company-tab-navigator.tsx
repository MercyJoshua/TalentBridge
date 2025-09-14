import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/context/ThemeContext';
import CompanyHomeScreen from '@/screens/admin-dashboard/admin-dashboard';
import {ProfileScreen} from '@/screens/admin-dashboard/settings';
import CandidatesScreen from '@/screens/admin-dashboard/candidates';
import PostOpportunityScreen from '@/screens/admin-dashboard/PostOpportunityScreen';
import { MessagesScreen } from '@/screens/student-dashboard/message-screen';

const Tab = createBottomTabNavigator();

export const CompanyTabNavigator: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Postings':
              iconName = focused ? 'briefcase' : 'briefcase-outline';
              break;
            case 'Candidates':
              iconName = focused ? 'people' : 'people-outline';
              break;
            case 'Messages':
              iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
              break;
            case 'Profile':
              iconName = focused ? 'person' : 'person-outline';
              break;
            default:
              iconName = 'sync';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.text + '80',
        tabBarStyle: {
          backgroundColor: colors.card,
          borderTopColor: colors.border,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={CompanyHomeScreen} />
      <Tab.Screen name="Postings" component={PostOpportunityScreen} />
      <Tab.Screen name="Candidates" component={CandidatesScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};