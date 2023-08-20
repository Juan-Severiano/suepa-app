import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Professional from '../screens/Professional'

const Stack = createNativeStackNavigator()

export default props => (
  <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
    <Stack.Screen name='Home' component={Home} />
    <Stack.Screen name='Professional' component={Professional} />
  </Stack.Navigator>
)
