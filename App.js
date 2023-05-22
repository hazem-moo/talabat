import { LogBox } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TailwindProvider } from 'tailwindcss-react-native'
import { NavigationContainer } from '@react-navigation/native'
import Home from './src/screens/Home'
import Product from './src/screens/Product'
import Basket from './src/screens/Basket'
import { Provider } from 'react-redux'
import store from './src/redux/store'

LogBox.ignoreLogs([ ""])
// LogBox.ignoreLogs(["Warning: ..."]);

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <Provider store={ store }>
    <TailwindProvider>
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }} >
          <Stack.Screen name='Home' component={ Home } />
          <Stack.Screen name='Product' component={ Product } />
          <Stack.Screen name='Basket' component={ Basket } />
        </Stack.Navigator>
      </NavigationContainer>
      </TailwindProvider>
    </Provider>
  )
}