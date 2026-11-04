import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import JournalScreen from '../screens/JournalScreen';
import RoutinesScreen from '../screens/RoutinesScreen';
import ProfilScreen from '../screens/ProfilScreen';

const Tab = createBottomTabNavigator();

export default function MainTabs({ onLogout }) {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Journal"
        component={JournalScreen}
        options={{ title: 'Journal' }}
      />
      <Tab.Screen
        name="Routines"
        component={RoutinesScreen}
        options={{ title: 'Mes routines' }}
      />
      <Tab.Screen name="Profil">
        {(props) => <ProfilScreen {...props} onLogout={onLogout} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
