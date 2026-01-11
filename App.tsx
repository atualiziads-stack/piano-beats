import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PianoScreen from './src/screens/PianoScreen';
import RecordingsScreen from './src/screens/RecordingsScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#667eea',
          tabBarInactiveTintColor: '#999',
          tabBarStyle: {
            backgroundColor: '#fff',
            borderTopColor: '#eee',
            height: 60,
            paddingBottom: 8,
            paddingTop: 8,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600',
          },
        }}
      >
        <Tab.Screen
          name="Piano"
          component={PianoScreen}
          options={{
            tabBarLabel: '🎹 Piano',
            tabBarIcon: ({ color }) => (
              <Text style={{ fontSize: 24 }}>🎹</Text>
            ),
          }}
        />
        
        <Tab.Screen
          name="Recordings"
          component={RecordingsScreen}
          options={{
            tabBarLabel: '💾 Gravações',
            tabBarIcon: ({ color }) => (
              <Text style={{ fontSize: 24 }}>💾</Text>
            ),
          }}
        />
        
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: '⚙️ Configurações',
            tabBarIcon: ({ color }) => (
              <Text style={{ fontSize: 24 }}>⚙️</Text>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

import { Text } from 'react-native';