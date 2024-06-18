import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Slot, SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font';
import { GlobalProvider } from '@/context/GlobalProvider';
import Background from '@/components/Background';
import { PaperProvider } from 'react-native-paper';
import '@tamagui/core/reset.css'


import { TamaguiProvider } from 'tamagui'
import tamaguiConfig from '@/tamagui.config'

const _layout = () => {
  SplashScreen.preventAutoHideAsync()
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("./assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("./assets/fonts/Poppins-Thin.ttf"),
    "Lobster-Regular":require("./assets/fonts/Lobster-Regular.ttf"),
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });
  useEffect(() => {
    if (error) throw error;
  
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);
  
  if (!fontsLoaded && !error) {
    return null;
  }
  return (
    <TamaguiProvider config={tamaguiConfig}>
    
    <GlobalProvider>
      <Background>
    <Stack >
      <Stack.Screen name='index' options={{headerShown:false,
        presentation:'card'
      }

    } />
      <Stack.Screen name='profile' options={{headerShown:false}} />
      <Stack.Screen name='(auth)' options={{headerShown:false}} />
      <Stack.Screen name='(tabs)' options={{headerShown:false}} />
      <Stack.Screen name='search/[query]' options={{headerShown:false}} />
    </Stack>
    </Background>
    </GlobalProvider>
    </TamaguiProvider>
    
  )
}

export default _layout

const styles = StyleSheet.create({
  global:{
    backgroundColor:'#0B0B0B'
  }
  
  
})