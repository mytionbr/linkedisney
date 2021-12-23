import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import TabNavigation from './navigation/TabNavigation';
import DrawerNavigation from './navigation/DrawerNavigation';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent"
  }
}

export default function App() {
  
  const [loaded] = useFonts({
    "Roboto-Bold": require('./assets/fonts/Roboto-Bold.ttf'),
    "Roboto-Medium": require('./assets/fonts/Roboto-Medium.ttf'),
    "Roboto-Regular": require('./assets/fonts/Roboto-Regular.ttf'),
    "Roboto-Thin": require('./assets/fonts/Roboto-Thin.ttf'),
  });
  
  if(!loaded){
    return null;
  }

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        initialRouteName={'Drawer'}
        screenOptions={{
          headerShown: false,
        }}>

        <Stack.Screen 
          name='Drawer'
          component={DrawerNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


