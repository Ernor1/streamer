import { View, Text,Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from './Icon'
import IconButton from './IconButton'
import icons from '../app/constants/icons'
import { ResizeMode, Video } from 'expo-av'
export type VideoProp={
    title:string
    thumbnail:string
    video:string
    id:string

}
export type Creator={
    username:string
    avatar:string
}
export type Props={
    video:VideoProp
    creator:Creator
    currentPlay:any
    setCurrentPlay:(id: any) => void
}

const VideoCard:React.FC<Props> = ({video:{title,thumbnail,video,id},creator:{username,avatar},setCurrentPlay,currentPlay}) => {
    const [play,setPlay]=useState(false)
  return (
    <View className='flex-col items-center px-4 mb-14'>
        <View className='flex-row gap-3 items-start'>
            <View className='justify-center items-center flex-row flex-1'>
                <View className='w-[46px] h-[46px] rounded-lg  border border-pblue justify-center items-center p-0.5 '>
                    <Image source={{uri:avatar}}
                    className='h-full w-full rounded-lg'
                    resizeMode='cover'
                    />
                </View>
                <View className='justify-center flex-1 ml-3 gap-y-1'>
                    <Text className='text-white font-psemibold text-sm' numberOfLines={1}>{title}</Text>
                    <Text className='text-xs text-gray-100 font-pregular'>{username}</Text>
                </View>
            </View>
            <View
            className='pt-2'
            >
            <Icon name={'more-vertical'} color='white' size={20}/>
            </View>
        </View>
        {play &&currentPlay===id?(<Video source={{uri:video}} className='w-full h-60 rounded-xl bg-secondary'
              resizeMode={ResizeMode.CONTAIN}
              useNativeControls
              shouldPlay
              onPlaybackStatusUpdate={(status)=>{
                if(status.isLoaded){
                  if(status.didJustFinish && currentPlay===id){
                    setPlay(false)
                  }
                }

              }}
              />):(<TouchableOpacity className='w-full
        h-60 rounded-xl mt-3 justify-center relative items-center'
        activeOpacity={0.7}
        onPress={()=>{
            if(currentPlay!==id){
                setCurrentPlay(id)
            }
            setPlay(true)

        }}
        >
            <Image source={{uri:thumbnail}} className='w-full h-60 rounded-xl mt-5 overflow-hidden shadow shadow-orange-500 '
            resizeMode='cover'
            />
            <Image source={icons.play} className='absolute w-12 h-12'/>
        </TouchableOpacity>)}
    </View>
  )
}

export default VideoCard