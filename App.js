import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import AppDrawer from './navigation/AppDrawer';
import DetailsExerciceScreen from './screens/DetailsExerciceScreen';

const Stack = createNativeStackNavigator();

export default function App() {
 const [isSignedIn, setIsSignedIn] = useState(false);

 return (
 <NavigationContainer>
 <Stack.Navigator>
 {!isSignedIn ? (
 <Stack.Screen name="Login" options={{ title: 'Connexion' }}>
 {() => <LoginScreen onLogin={() => setIsSignedIn(true)} />}
 </Stack.Screen>
 ) : (
 <>
 <Stack.Screen name="Application" options={{ headerShown: false }}>
 {() => <AppDrawer onLogout={() => setIsSignedIn(false)} />}
 </Stack.Screen>
 <Stack.Screen
 name="DetailsExercice"
 component={DetailsExerciceScreen}
 options={{ title: "Détail de l'exercice" }}
 />
 </>
 )}
 </Stack.Navigator>
 </NavigationContainer>
 );
}