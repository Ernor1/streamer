import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import TabBarIcon from '@/components/navigation/TabBarIcon'
import { icons } from '../constants'
import Ionicons from '@expo/vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar'
import Background from '@/components/Background'



const TabLayout = () => {
  return (
    <Background>
    <Tabs
    screenOptions={{
        tabBarShowLabel:false,
        tabBarActiveTintColor:'#579AFF',
        tabBarInactiveTintColor:'#9f9f9f',
        tabBarStyle:{   
            backgroundColor:'#292929',
            borderTopColor:'#292929',
            height:84,
            borderBottomColor:'#292828',
            paddingTop: 10,
            borderTopLeftRadius:20,
            borderTopRightRadius:20
        }
    }}
    >
        <Tabs.Screen name='home'
        options={{
            title:'Home',
            headerShown:false,
            tabBarIcon:({color,focused})=>(
                <TabBarIcon name='Home'  color={color} icon='home' size={25} focused={focused}/>
            )
        }}
        />
                <Tabs.Screen name='create'
        options={{
            title:'Create',
            headerShown:false,
            tabBarIcon:({color,focused})=>(
                <TabBarIcon size={25} color={color} name='Create' icon='plus-circle' focused={focused}/>
            )
        }}
        />
        <Tabs.Screen name='profile'
        options={{
            title:'Profile',
            headerShown:false,
            tabBarIcon:({color,focused})=>(
                <TabBarIcon  name='Profile' size={25} color={color} icon='user' focused={focused}/>
            )
        }}
        />
        <Tabs.Screen name='bookmark'
        options={{
            title:'Bookmark',
            headerShown:false,
            tabBarIcon:({color,focused})=>(
                <TabBarIcon name='Bookmark'  size={25} color={color} icon='bookmark' focused={focused}/>
            )
        }}
        />
    </Tabs>
    <StatusBar backgroundColor={'#0172B2'} style='light'></StatusBar>
    
    </Background>

  )
}

export default TabLayout