import { View, Text } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
export type Props = {
    color?: string;
    size?:number
    name:any
    styles?:string
  };
const Icon:React.FC<Props> = ({color,size,name,styles}) => {
  return (
    <View className={`${styles}`}>
      <Feather name={name} size={size} color={color}/>
    </View>
  )
}

export default Icon