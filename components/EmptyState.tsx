import { View, Text, Image } from 'react-native'
import React from 'react'
import { images } from '@/app/constants'
import CustomButton from './CustomButton'
type Props={
    title:string
    subtitle:string
}

const EmptyState:React.FC<Props> = ({title,subtitle}) => {
  return (
    <View className='justify-center items-center px-4'>
        <Image source={images.empty} className='w-[270px] h-[200px] mt-[30px] mb-5' resizeMode='contain'/>
        <Text className='text-white font-pmedium text-sm mb-2'>{subtitle}</Text>
        <Text className='text-white font-psemibold text-2xl mb-5'>{title}</Text>
        <CustomButton title='Upload Video' handlePress={()=>{}} height='h-[8vh]' color='bg-pblue' containerStyles='w-[80%]'/>
    </View>
  )
}

export default EmptyState