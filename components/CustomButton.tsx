import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';
export type Props={
  title: string
  handlePress:any
  containerStyles?:string
  textStyles?:string
  isLoading?:boolean
  color:string
  height:string



}

const CustomButton:React.FC<Props> = ({title,handlePress,containerStyles,textStyles,isLoading,color,height}) => {
  console.log(isLoading)
  return (
    <TouchableOpacity
    onPress={handlePress}
    activeOpacity={0.7}
     className={`${color} rounded-xl ${height} justify-center items-center ${containerStyles} ${isLoading? 'opacity-50':''}`}
     disabled={isLoading}
     >

{isLoading?<Progress.Circle size={30} indeterminate={true} color='#ffffff' />:<Text className={`font-psemibold text-lg text-white ${textStyles}`}>{title}</Text>
      }

    </TouchableOpacity>

  )
}

export default CustomButton