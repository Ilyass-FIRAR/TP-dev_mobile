import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabs from './MainTabs';
import ParametresScreen from '../screens/ParametresScreen';

const Drawer = createDrawerNavigator();

export default function AppDrawer({ onLogout }) {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Sections" options={{ title: 'Application' }}>
        {() => <MainTabs onLogout={onLogout} />}
      </Drawer.Screen>
      <Drawer.Screen
        name="Parametres"
        component={ParametresScreen}
        options={{ title: 'Paramètres' }}
      />
    </Drawer.Navigator>
  );
}
