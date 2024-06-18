import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import Feather from '@expo/vector-icons/Feather'
import Icon from './Icon'
import { router, usePathname } from 'expo-router'
export type Props={
    value?:string 
    handleChange?:any
    otherStyles?:string
    inputType?:any
    placeHolder?:string
    initialQuery?:string
}

const SearchInput:React.FC<Props> = ({value,handleChange,otherStyles,inputType,placeHolder,initialQuery}) => {
  const pathname=usePathname()
  const[query,setQuery]=useState(initialQuery||'')
  const onQueryChange=(e:any)=> console.log(e.nativeEvent.text)
  const search=()=>{
    if(!query)
      Alert.alert("Empty search query")
    if(pathname.startsWith('/search')){
      router.setParams({query})
    }else{
      router.push(`/search/${query}`)
    }
  }
  return (
  

      <View className='border-2  w-[90vw] h-12 bg-grayblack rounded-xl focus:border-pblue flex-row items-center ml-4 text-white '>
        <TextInput
        className='flex-1 items-center justify-center ml-2 text-white text-sm placeholder-white pl-5'
        value={query}
        onChange={(e)=>{setQuery(e.nativeEvent.text )}}
        placeholder={placeHolder}
        keyboardType={inputType}
        placeholderTextColor={'#fff'}
        />
        <TouchableOpacity onPress={search} className='mr-2'><Icon name='search' size={20} color='#fff'/></TouchableOpacity>
      </View>
  )
}

export default SearchInput