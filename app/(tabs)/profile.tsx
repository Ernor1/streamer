import { View, Text, FlatList, Image, RefreshControl, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useGlobalContext } from '@/context/GlobalProvider'
import SearchInput from '@/components/SearchInput'
import EmptyState from '@/components/EmptyState'
import VideoCard from '@/components/VideoCard'
import { router, useLocalSearchParams } from 'expo-router'
import { useApi } from '@/hooks/useApi'
import { searchVideos } from '@/queries/search.query'
import { UserVideoArray } from '@/data/userVideos.data'
import Icon from '@/components/Icon'
import { removeAuthToken } from '@/api/auth.api'

const Profile = () => {
  const { user,setUser,setIsLoggedIn } = useGlobalContext()
  const [refreshing, setRefreshing] = useState(false)
  const[currentPlay,setCurrentPlay]=useState(null)
  const{query}=useLocalSearchParams()
  const onRefresh = async () => {
    setRefreshing(true)
  }

  const logout=async ()=>{
    try{
      await removeAuthToken()
      setIsLoggedIn(false)
      setUser(null)
      router.replace('/login')
    }catch(error){
      throw error
    }


  }


  return (
    <SafeAreaView className='bg-[#0B0B0B] h-full'>
      <FlatList
        data={UserVideoArray}
        keyExtractor={(item: any) => item?.id}
        renderItem={({ item }) => (<VideoCard video={item} currentPlay={currentPlay} setCurrentPlay={setCurrentPlay} creator={item}/>)}
        ListHeaderComponent={() => (

              <View className='mt-6 mb-6'>
                <View className='flex-1 justify-end items-end w-full'>
                  <TouchableOpacity className='mr-5' onPress={logout}>
                    <Icon name={'log-out'} color='#3b82f6' size={30}></Icon>
                  </TouchableOpacity>
                </View>
                <View className='flex-1 justify-center items-center'>
                <View className='w-[76px] h-[76px] rounded-lg  border border-pblue justify-center items-center p-0.5 '>
                    <Image source={{uri:user?.avatar}}
                    className='h-full w-full rounded-lg'
                    resizeMode='cover'
                    />
                </View>
                <Text className='text-white font-pmedium text-sm mt-5'>{user?.username}</Text>
                <View className='flex-row gap-11 mt-0.5 mb-6'>
                  <View>
                    <Text className='text-white font-pextrabold text-3xl'>10</Text>
                    <Text className='text-white font-pregular text-lg'>Posts</Text>
                  </View>
                  <View>
                    <Text className='text-white font-pextrabold text-3xl'>1.2k</Text>
                    <Text className='text-white font-pregular text-lg'>Views</Text>
                  </View>
                </View>
                </View>
              </View>
        )}

        ListEmptyComponent={() => (
          <EmptyState title='No Videos Found' subtitle='No Videos found for this profile' />
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </SafeAreaView>
  )
}

export default Profile