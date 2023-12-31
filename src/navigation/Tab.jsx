import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons'
import Home from '../screens/Home'
import Professional from '../screens/Professional'
import { NavigationContainer } from '@react-navigation/native'
import Videos from '../screens/Videos'
import { SafeAreaView } from 'react-native-safe-area-context'
import Form from '../screens/Form'

const Tab = createBottomTabNavigator()

export default props => (
  <SafeAreaView style={{ flex: 1 }}>
    <NavigationContainer>
  <Tab.Navigator
  onReady={console.log('tab', props)}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName
        switch (route.name) {
          case 'HomeScreen':
            iconName = focused
              ? 'ios-home'
              : 'ios-home-outline';
            break
          case 'Professional':
            iconName = focused
              ? 'people'
              : 'people-outline';
            break
          case 'Videos':
            iconName = focused
              ? 'logo-youtube'
              : 'logo-youtube';
            break
          case 'Form':
            iconName = focused
              ? 'help-circle'
              : 'help-circle-outline';
            break
          case 'Perfil':
            iconName = focused
              ? 'person-circle'
              : 'person-circle-outline';
            break
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'black',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: { backgroundColor: '#d9d9d9' },
      headerShown: false,
    })}
 >
    <Tab.Screen name='HomeScreen' component={Home} options={{ tabBarLabel: 'home' }} />
    <Tab.Screen name='Professional' component={Professional} options={{ tabBarLabel: 'profissionais' }} />
    <Tab.Screen name='Videos' component={Videos} options={{ tabBarLabel: 'videos' }} />
    <Tab.Screen name='Form' component={Form} options={{ tabBarLabel: 'formulário' }} />
  </Tab.Navigator>
  </NavigationContainer>
  </SafeAreaView>
)