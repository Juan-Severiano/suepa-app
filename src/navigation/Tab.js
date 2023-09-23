import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons'
import Home from '../screens/Home'
import Professional from '../screens/Professional'
import { NavigationContainer } from '@react-navigation/native'

const Tab = createBottomTabNavigator()

export default props => (
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
          case 'Filter':
            iconName = focused
              ? 'filter'
              : 'filter-outline';
            break
          case 'Add':
            iconName = focused
              ? 'add-circle'
              : 'add-circle-outline';
            break
          case 'YourTasks':
            iconName = focused
              ? 'grid'
              : 'grid-outline';
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


  </Tab.Navigator>
  </NavigationContainer>
)