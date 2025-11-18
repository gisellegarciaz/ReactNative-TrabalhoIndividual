import { useFonts } from 'expo-font';
import { Parkinsans_400Regular, Parkinsans_600SemiBold, Parkinsans_700Bold } from '@expo-google-fonts/parkinsans';
import { StatusBar } from 'expo-status-bar';
import { Routers } from './src/routers';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';

export default function App() {

  const [fontsLoaded] = useFonts({
    'Parkinsans-Regular': Parkinsans_400Regular,
    'Parkinsans-SemiBold': Parkinsans_600SemiBold,
    'Parkinsans-Bold': Parkinsans_700Bold,
  });

  return (
    <>
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>

      <StatusBar style="auto" />
      <Routers />
    </SafeAreaProvider>
    </>
  );
}
