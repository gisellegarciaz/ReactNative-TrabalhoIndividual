import React, { useCallback } from 'react';
import { View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { Parkinsans_400Regular, Parkinsans_600SemiBold, Parkinsans_700Bold } from '@expo-google-fonts/parkinsans';
import { StatusBar } from 'expo-status-bar';
import { Routers } from './src/routers';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';


// Tive que aplicar uma splash screen porque a fonte do Login
// não estava carregando ao abrir o app :/

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    'Parkinsans-Regular': Parkinsans_400Regular,
    'Parkinsans-SemiBold': Parkinsans_600SemiBold,
    'Parkinsans-Bold': Parkinsans_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
                <StatusBar style="auto" />
                <Routers />
        </SafeAreaProvider>
    </View>
  );
}
