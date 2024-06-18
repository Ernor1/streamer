import { Button, Image, ScrollView,StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, Redirect, router } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from './constants';
import CustomButton from '@/components/CustomButton';
import {StatusBar} from 'expo-status-bar'
import { useGlobalContext } from '@/context/GlobalProvider';
import { useApi } from '@/hooks/useApi';



const index = () => {

  const {isLoading,isLoggedIn}=useGlobalContext()
  if(!isLoading && isLoggedIn)
    return <Redirect href={'/home'}/>
  return (

    <SafeAreaView>
                  <LinearGradient
        colors={['#0172B2', '#001645']}
        style={styles.background}
      />
      <ScrollView contentContainerStyle={{height:'100%'}}>
      <View style={styles.container} className="flex-1 items-center justify-center h-[85vh]">
        <View className='justify-center flex-row gap-2'>
        <Text className='font-lregular text-white text-4xl'>Streamer</Text>
        <Image source={images.globe}></Image>

        </View>
      

      <Text className='text-white text-base mt-5 w-1/2 text-center '>Your Ultimate Binge-Watch Destination</Text>
      <CustomButton height='h-[10vh]' color={'bg-secondary'} title='Continue with email' handlePress={()=> router.push('login')} containerStyles='w-[80%] mt-7 '/>
    </View>

    <StatusBar backgroundColor={'#0172B2'} style='light'></StatusBar>

      </ScrollView>
    </SafeAreaView>

  )
}

export default index

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        alignItems:'center',
        justifyContent:'center',

    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height:1000

    },

})