import { View, Text, FlatList, Image, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useGlobalContext } from '@/context/GlobalProvider'
import SearchInput from '@/components/SearchInput'
import EmptyState from '@/components/EmptyState'
import VideoCard from '@/components/VideoCard'
import { useLocalSearchParams } from 'expo-router'
import { useApi } from '@/hooks/useApi'
import { searchVideos } from '@/queries/search.query'

const Bookmark = () => {
  const { user } = useGlobalContext()
  const [refreshing, setRefreshing] = useState(false)
  const[currentPlay,setCurrentPlay]=useState(null)
  const{query}=useLocalSearchParams()
  const{data:posts,refetchData}=useApi(searchVideos(query?.toString()))
  const onRefresh = async () => {
    setRefreshing(true)
    await refetchData()
    setRefreshing(false)
  }
  useEffect(()=>{
    refetchData()
  },[query])

  return (
    <SafeAreaView className='bg-[#0B0B0B] h-full'>
      <FlatList
        data={posts}
        keyExtractor={(item: any) => item?.id}
        renderItem={({ item }) => (<VideoCard video={item} currentPlay={currentPlay} setCurrentPlay={setCurrentPlay} creator={item}/>)}
        ListHeaderComponent={() => (

              <View className='mt-6 mb-6'>
                <View className='pl-4 pr-4'>
                <Text className='text-white font-pmedium text-2xl'>Saved Videos</Text>
                </View>

                <View className='mb-8 mt-6 self-start'>
                  <SearchInput placeHolder='Search for a video topic.' initialQuery={query?.toString()} />
                  </View>
                
              </View>
        )}

        ListEmptyComponent={() => (
          <EmptyState title='No Videos Found' subtitle='No Saved Videos' />
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </SafeAreaView>
  )
}

export default Bookmark