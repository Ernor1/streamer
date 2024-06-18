import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Feather from '@expo/vector-icons/Feather'
import Icon from './Icon'
export type Props={
    title:string
    value:string 
    handleChange:any
    otherStyles?:string
    inputType?:any
    placeHolder?:string
    secureText?:boolean
    width:string
}

const FormField:React.FC<Props> = ({title,value,handleChange,otherStyles,inputType,placeHolder,secureText=false,width}) => {
    const [hideText,setHideText]=useState(secureText)
  return (
    <View className={`space-y-2 ${otherStyles}`}>

      <Text className='text-white font-pmedium text-base '>{title}</Text>
      <View className={`border-2  ${width} h-12 bg-grayblack rounded-md focus:border-pblue flex-row items-center text-white`}>
        <TextInput
        className='flex-1 items-center justify-center ml-2 text-white text-sm placeholder-white'
        value={value}
        onChangeText={handleChange}
        placeholder={placeHolder}
        secureTextEntry={hideText}
        keyboardType={inputType}
        placeholderTextColor={'#fff'}
        />
        {secureText&& (<TouchableOpacity onPress={()=>setHideText(!hideText)} className='mr-2'>{hideText?<Icon name='eye' size={20} color='#fff'/>:<Icon name='eye-off' size={20} color='#fff'/>}</TouchableOpacity>)}
      </View>
    </View>
  )
}

export default FormField