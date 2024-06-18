import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native'
import { images } from '../constants'
import FormField from '@/components/FormField'
import { Link } from 'expo-router'
import CustomButton from '@/components/CustomButton'
import IconButton  from '@/components/IconButton'


const SignUp = () => {
  const [form,setForm]=useState({email:'',password:'',username:''})
  const [isSubmitting,setIsSubmitting]=useState(false)
  const submit=()=>{

  }
  return (
    <SafeAreaView className='bg-[#0B0B0B] h-full'>
      <ScrollView>
        <View className='w-full justify-center items-center'>
          <Image source={images.blueLogo} style={styles.image} className='mb-3' />
          <Text className='text-3xl text-white font-pbold'>Welcome To Streamer</Text>
          <Text className='text-white text-sm mt-3'>Register to Streamer and travel the world</Text>
          <FormField title='Username' width='w-[80vw]' value={form.username} secureText={false} handleChange={(e:string)=>setForm({...form,username:e})} otherStyles='mt-4'/>
          <FormField title='Email' width='w-[80vw]' inputType={'email-address'} value={form.email} secureText={false} handleChange={(e:string)=>setForm({...form,email:e})} otherStyles='mt-4'/>
          <FormField width='w-[80vw]' title='Password' value={form.password} secureText={true} handleChange={(e:string)=>setForm({...form,password:e})} otherStyles='mt-4'/>
          <CustomButton title='Sign in' height='h-[8vh]' color='bg-pblue' handlePress={submit} containerStyles='w-[80%] mt-4' isLoading={false}/>
        </View>

        <View className='w-full justify-center items-center flex-row mb-2'>
          <View className='bg-black-100 w-12 h-1 self-center rounded-3xl mr-1 mt-[0.20 rem]'></View>
          <Text className='text-white font-pbold mt-1'>Or</Text>
          <Text className='text-white'>SignUp with social account</Text>
          <View className='bg-black-100 w-12 h-1 self-center rounded-3xl ml-1 mt-[0.20 rem]'></View>
        </View>
        <View className=' w-full flex-row justify-center items-center space-x-4 mt-3  '>
          <IconButton icon={'apple'} size={30} color='white'/>
          <IconButton icon={'google'} size={30} color='red'/>
          <IconButton icon={'facebook'} size={30} color='#0172B2'/>
        </View>
        <View className='flex-row justify-center items-center mt-[5vh]'>
          <Text className='text-white '>Have an account already?</Text>
          <Link className='text-[#3b82f6] font-pbold mt-1' href={'login'}>Login</Link>
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
export default SignUp