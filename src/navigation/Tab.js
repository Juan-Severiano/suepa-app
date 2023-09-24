import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Professional from '../screens/Professional'
import { NavigationContainer } from '@react-navigation/native'
import Videos from '../screens/Videos'
import { SafeAreaView } from 'react-native-safe-area-context'
import Form from '../screens/Form'
import Stack from './Stack'

const Stack2 = createNativeStackNavigator()
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
              ? 'filter'
              : 'filter-outline';
            break
          case 'Videos':
            iconName = focused
              ? 'add-circle'
              : 'add-circle-outline';
            break
          case 'Form':
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
    <Tab.Screen name='Professional' component={Professional} options={{ tabBarLabel: 'profissionais' }} />
    <Tab.Screen name='Videos' component={Videos} options={{ tabBarLabel: 'videos' }} />
    <Tab.Screen name='Form' component={Form} options={{ tabBarLabel: 'home' }} />


  </Tab.Navigator>
  <Stack2.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
    <Stack2.Screen name='Home'>
      {props => (
        <Home navigationStack={props.navigation} />
      )}
    </Stack2.Screen>
  </Stack2.Navigator>
  </NavigationContainer>
  </SafeAreaView>
)