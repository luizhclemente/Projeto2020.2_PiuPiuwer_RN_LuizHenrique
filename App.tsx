import { StatusBar } from 'expo-status-bar';

import React from 'react';
import { Text } from 'react-native';
import Login from './src/pages/Login';
import { AppLoading } from 'expo'

// Fonts
import { 
  Montserrat_400Regular, 
  Montserrat_500Medium,
  useFonts } from '@expo-google-fonts/montserrat'

import AppStack from './src/routes/AppStack';
import Feed from './src/pages/Feed';
import AppTabs from './src/routes/AppTabs';
import AppProvider from './src/hooks';
import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
        <AppProvider>
          <Routes />
          <StatusBar style="auto" />
        </AppProvider>
    );
  };
}
