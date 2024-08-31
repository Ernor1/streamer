import { View, Text, ScrollView, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native'
import { images } from '../constants'
import FormField from '@/components/FormField'
import { Link, router } from 'expo-router'
import CustomButton from '@/components/CustomButton'
import IconButton  from '@/components/IconButton'
import { useApi } from '@/hooks/useApi'
import { login } from '@/api/auth.api'
import { useGlobalContext } from '@/context/GlobalProvider'
import { User } from '@/data/user.data'
import { Button, Dialog, Portal,Text as TextPopUp } from 'react-native-paper';
import { AlertDialog, Button as TamaButton, XStack, YStack } from 'tamagui'




const Login = () => {
  const [form,setForm]=useState({email:'',password:''})
  const [isSubmitting,setIsSubmitting]=useState(false)
  const {user,setUser}=useGlobalContext()
  const handleInputChange = (name:string) => (text:string) => {
    setForm({ ...form, [name]: text });
  };
  const [showPopUp,setShowPopUp]=useState(false)
  const[popMessage,setPopMessage]=useState('')
  const submit=async ()=>{
    setIsSubmitting(true)
    if(!form.email && !form.password){
      Alert.alert("Please Fill")
      setIsSubmitting(false)
      return
    }
    try{
      const loginResponse=await login(form)
      if(loginResponse.data.token && loginResponse.data.email){
        const userDTO:User={
          username:loginResponse.data.userName,
          email:loginResponse.data.email,
          avatar:'https://randomuser.me/api/portraits/men/75.jpg'
        }
        console.log("before response")

        console.log(loginResponse)
        setUser(userDTO)
        setIsSubmitting(false)
        router.push('/home')

      }


    }catch(error:any){
      console.log("trouble")
      console.log(error)
      setIsSubmitting(false)
      setShowPopUp(true)
      setPopMessage(error?.message)

    }

  }
  const hideDialog = () => setShowPopUp(false);
  return (
    <SafeAreaView className='bg-[#0B0B0B] h-full'>
      <ScrollView>
        <View className='w-full justify-center items-center'>
          <Image source={images.blueLogo} style={styles.image} className='mb-3' />
          <Text className='text-3xl text-white font-pbold'>Welcome Back</Text>
          <Text className='text-white text-sm mt-3'>Login To Continue by enter your account info</Text>
          <FormField title='Email'inputType={'email-address'} value={form.email} secureText={false} width='w-[80vw]' handleChange={handleInputChange('email')} otherStyles='mt-6'/>
          <FormField title='Password' width='w-[80vw]' value={form.password} secureText={true} handleChange={handleInputChange('password')} otherStyles='mt-6'/>
          <Link href={'/forgot-password'} className='text-white text-base w-[80%] mt-3 mb-7'>Forgot Password ?</Link>
          <CustomButton title='Sign in' height='h-[8vh]' color='bg-pblue' handlePress={submit} containerStyles='w-[80%]' isLoading={isSubmitting}/>
        </View>

        <View className='w-full justify-center items-center flex-row mb-2'>
          <View className='bg-black-100 w-12 h-1 self-center rounded-3xl mr-1 mt-[0.20 rem]'></View>
          <Text className='text-white font-pbold mt-1'>Or</Text>
          <Text className='text-white'>Continue with social account</Text>
          <View className='bg-black-100 w-12 h-1 self-center rounded-3xl ml-1 mt-[0.20 rem]'></View>
        </View>
        <View className=' w-full flex-row justify-center items-center space-x-4 mt-3  '>
          <IconButton icon={'apple'} size={30} color='white'/>
          <IconButton icon={'google'} size={30} color='red'/>
          <IconButton icon={'facebook'} size={30} color='#0172B2'/>
        </View>
        <View className='flex-row justify-center items-center mt-[10vh]'>
          <Text className='text-white '>Don't have an account?</Text>
          <Link className='text-[#3b82f6] font-pbold mt-1' href={'sign-up'}>Register</Link>
        </View>

      </ScrollView>

    </SafeAreaView>

  )
}
const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: 100,
    height: 100,
    resizeMode: 'contain'
}
})
export default Login