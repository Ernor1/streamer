import { View, Text, FlatList, Image, RefreshControl } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { videoArray } from '@/data/video.data'
import { useGlobalContext } from '@/context/GlobalProvider'
import { images } from '../constants'
import SearchInput from '@/components/SearchInput'
import Trending from '@/components/Trending'
import { TrendingVideoArray } from '@/data/trending.data'
import EmptyState from '@/components/EmptyState'
import VideoCard from '@/components/VideoCard'

const Home = () => {
  const { user } = useGlobalContext()
  const [refreshing, setRefreshing] = useState(false)
  const[currentPlay,setCurrentPlay]=useState(null)
  const onRefresh = () => {
    setRefreshing(true)
  }

  const renderTrendingVideos = () => {
    if (TrendingVideoArray.length === 0) {
      return
    }

    return (
      <>
        <Text className='text-gray-100 text-lg font-pregular ml-3'>Latest Videos on</Text>
        <Trending posts={TrendingVideoArray} />
      </>
    )
  }

  return (
    <SafeAreaView className='bg-[#0B0B0B] h-full'>
      <FlatList
        data={videoArray}
        keyExtractor={(item: any) => item?.id}
        renderItem={({ item }) => (<VideoCard video={item} currentPlay={currentPlay} setCurrentPlay={setCurrentPlay} creator={item}/>)}
        ListHeaderComponent={() => (
          <View>
            <View className='flex-row justify-between items-start '>
              <View className='ml-3 mt-5'>
                <Text className='text-white font-pmedium text-sm'>Welcome Back</Text>
                <Text className='text-white font-psemibold text-2xl'>{user?.username}</Text>
              </View>
              <View>
                <Image className='w-[80px] h-[70px] mt-1' resizeMode='contain' source={images.blueLogo}></Image>
              </View>
            </View>
            <SearchInput placeHolder='Search for a video topic.' />
            <View className='w-full flex-1 pt-5 pb-8 '>
              {renderTrendingVideos()}
            </View>
          </View>
        )}

        ListEmptyComponent={() => (
          <EmptyState title='No Videos' subtitle='Be the first one to upload' />
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </SafeAreaView>
  )
}

export default Home