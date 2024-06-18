import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

export type Props = {
    icon:any
    color:string
    size:number

}

const IconButton :React.FC<Props> = ({icon,color,size}) => {
    return (
        <View className='bg-grayblack w-[20vw] h-12 justify-center items-center rounded-xl mr-2 ml-2'>
            <TouchableOpacity onPress={() => { }} >
                <FontAwesome name={icon} color={color} size={size} />
            </TouchableOpacity>
        </View>
    )
}

export default IconButton