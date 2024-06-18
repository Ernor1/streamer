import { View, Text, ImageSourcePropType, Image } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from'@expo/vector-icons/Feather'
import Feather from '@expo/vector-icons/Feather';
// import FontAwesomeIcon from '@expo/vector-icons/FontAwesomeIcon';
export type Props = {
    color?: string;
    icon?:any
    focused?:boolean
    size?:number
    name?:string
  };

const TabBarIcon :React.FC<Props> = ({color,name,focused,size,icon}) => {
  return (
    <View className='items-center justify-center gap-2'>

      <Feather name={icon} size={size} color={color} />
      <Text className={`${focused?'font-psemibold':'font-pregular'} text-xs`} style={{
        color:color
      }}>{name}</Text>
    </View>
  )
}

export default TabBarIcon