import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import FormField from '@/components/FormField'
import { ResizeMode, Video } from 'expo-av'
import Icon from '@/components/Icon'
import CustomButton from '@/components/CustomButton'
import * as DocumentPicker from 'expo-document-picker'

const Create = () => {
  const [form,setForm]=useState({
    title:'',
    video:'',
    thumbnail:'',
    prompt:''
  })
  const[uploading,setUploading]=useState(false)
const openPicker = async (selectType: string) => {
  try {
    const result = await DocumentPicker.getDocumentAsync({
      type: selectType==='image'?['image/png','image/jpg']:['video/mp4','video/gif'],
    });
    if (!result.canceled) {
      if(selectType==='image'){
        setForm({...form,thumbnail:result.assets[0].uri})
      }else if(selectType==='video'){
        setForm({...form,video:result.assets[0].uri})
        console.log(form.video)
      }
      else{
        setTimeout(()=>{
          Alert.alert('Document Picked',JSON.stringify(result,null,2))

        },100)
      }
      console.log(result.assets); // Use the document URI as needed
    } else {
      console.log('Document picking was cancelled');
    }
  } catch (error) {
    console.error(error);
  }
};
  return (
    <SafeAreaView className='bg-[#0B0B0B] h-full'>
      <ScrollView className='px-4 my-6'>
        <View>
        <Text className='text-2xl text-white font-psemibold mt-4'>
          Upload Video
        </Text>
        <FormField width='w-[90vw]' title='Video Title' value={form.title} placeHolder='Give your video a catch title ...' handleChange={(e:string)=>setForm({...form,title:e})} 
        otherStyles='mt-10 placeholder-white'
        />
        <FormField width='w-[90vw]' title='Video Title' value={form.title} placeHolder='Give your video a catch title ...' handleChange={(e:string)=>setForm({...form,title:e})} 
         otherStyles='mt-5 placeholder-white'
        />
        </View>
        <View className='mt-7 mb-2'>
          <Text className='text-base text-white mb-3 '>
            Upload Video
          </Text>
          <TouchableOpacity onPress={()=>{
            openPicker('video')
          }}>
            {form.video?(<Video source={{uri:form.video}}
            className='w-full h-64 rounded-2xl '
            useNativeControls
            resizeMode={ResizeMode.COVER}
            isLooping
            />):
            <View className='w-full h-40 pl-4 pr-4 bg-grayblack rounded-2xl justify-center items-center '>
              <View className='w-14 h-14 border-dashed border border-pblue justify-center items-center '>
                <Icon name={'upload'} size={20} color='#3b82f6'/>
              </View>
              </View>}
          </TouchableOpacity>
        </View>
        <View className='mt-7 mb-2'>
          <Text className='text-base text-white font-pmedium mb-3'>
            Thumbnail Image
          </Text>
          <TouchableOpacity onPress={()=>{
            openPicker('image')
          }}>
            {form.thumbnail?(<Image source={{uri:form.thumbnail}}
            className='w-full h-64 rounded-2xl '
            resizeMode='cover'
            />):
            <View className='w-full h-40 pl-4 pr-4 bg-grayblack rounded-2xl justify-center items-center '>
              <View className='w-14 h-14 border-dashed border border-pblue justify-center items-center '>
                <Icon name={'upload'} size={20} color='#3b82f6'/>
              </View>
              </View>}
          </TouchableOpacity>
        </View>
        <CustomButton handlePress={()=>{}} title='Submit & Publish' color='bg-pblue' height='h-[8vh]' containerStyles='mt-5'/>
      </ScrollView>
    </SafeAreaView>

  )
}

export default Create