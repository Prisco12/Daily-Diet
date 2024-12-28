import {  useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';
import { ActivityIndicator, StatusBar, StyleSheet, Text, View } from 'react-native';
import { HomeScreen } from '@screens/home';
import { ThemeProvider } from 'styled-components/native';
import theme from '@theme';
import { Loading } from '@components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold
  })
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
        {fontsLoaded ? <HomeScreen/> : <Loading />}
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
