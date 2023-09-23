import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './index'
import Professional from '../screens/Professional'

const Stack = createNativeStackNavigator()

export default props => (
  <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
    <Stack.Screen name='Home'>
      {props => (
        <Home />
      )}
    </Stack.Screen>
  </Stack.Navigator>
)
