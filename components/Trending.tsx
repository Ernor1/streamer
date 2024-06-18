import { View, Text, FlatList } from 'react-native';
import React, { useState } from 'react';
import * as Animatable from 'react-native-animatable';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { icons } from '@/app/constants';
import { ResizeMode, Video } from 'expo-av';

export type Post = {
  id: any,
  video: string,
  thumbnail: string
};

export type Props = {
  posts: Post[]
};

export type TrendingProps = {
  activeItem: any,
  item: Post,
  currentPlay: any,
  setCurrentPlay: (id: any) => void
};

const zoomIn = {
  0: {
    scale: 0.9
  },
  1: {
    scale: 1.1
  }
};

const zoomOut = {
  0: {
    scale: 1.0
  },
  1: {
    scale: 0.9
  }
};

const TrendingItem: React.FC<TrendingProps> = ({ activeItem, item, currentPlay, setCurrentPlay }) => {
  const [play, setPlay] = useState(false);

  const handlePress = () => {
    if (currentPlay !== item.id) {
      setCurrentPlay(item.id);
    }
    setPlay(true);
  };

  return (
    <Animatable.View className='mr-5'
      animation={activeItem.id === item.id ? zoomIn : zoomOut}
      duration={500}
    >
      {play && item.id === currentPlay ? (
        <Video
          source={{ uri: item.video }}
          className='w-40 h-72 rounded-[35px] bg-secondary'
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          shouldPlay
          onPlaybackStatusUpdate={(status) => {
            if (status.isLoaded) {
              if (status.didJustFinish && item.id === currentPlay) {
                setPlay(false);
              }
            }
          }}
        />
      ) : (
        <TouchableOpacity className='w-full h-60 rounded-xl mt-3 justify-center relative items-center'
          activeOpacity={0.7}
          onPress={handlePress}
        >
          <Image source={{ uri: item.thumbnail }} className='w-40 h-72 rounded-[35px] mt-5 overflow-hidden shadow shadow-orange-500'
            resizeMode='cover'
          />
          <Image source={icons.play} className='absolute w-12 h-12' />
        </TouchableOpacity>
      )}
    </Animatable.View>
  );
};

const Trending: React.FC<Props> = ({ posts }) => {
  const [activeItem, setActiveItem] = useState(posts[0]);
  const [currentPlay, setCurrentPlay] = useState(null);

  const onViewableItemChange = ({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setActiveItem(viewableItems[0].item);
    }
  };

  return (
    <FlatList
      data={posts}
      keyExtractor={(item: Post) => item.id}
      renderItem={({ item }) => (
        <View>
          <TrendingItem
            activeItem={activeItem}
            item={item}
            currentPlay={currentPlay}
            setCurrentPlay={setCurrentPlay}
          />
        </View>
      )}
      horizontal
      onViewableItemsChanged={onViewableItemChange}
      viewabilityConfig={{
        itemVisiblePercentThreshold: 70
      }}
      contentOffset={{ x: 170, y: 0 }}
    />
  );
};

export default Trending;
