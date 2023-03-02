import React, { Component } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'

import ActionRow from '../components/ActionRow'

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Demo">;

export class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView className='flex-1 bg-gray-100 relative' >
        <ScrollView>
          <TouchableOpacity className='absolute z-50 top5 right-10 items-center' >
            <Text className='text-center text-[#E5962D] font-bold' >UPGRADE</Text>
            <Ionicons name='person-circle' size={33} color='#E5962D' />
          </TouchableOpacity>
          <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3H0J1GfxD7x1UIlCj5OCJI6fR3DKUgYghQQ&usqp=CAU' }}
            className=" w-full h-64 flex-1 align-bottom"
          />
          <View className='mx-5'>
            <View className='flex-row justify-between space-x-2'>
              <ActionRow
                title='Track Workout'
                screen='Demo'
                color='#E5962D'
                icon='fitness'
                vertical
              />
              <ActionRow
                title='Browse Workouts'
                screen='Demo'
                color='#1982C4'
                icon='library'
                vertical
              />
            </View>
            <ActionRow
              title='Connect with Friends'
              screen='Demo'
              color='#F44174'
              icon='share-social'
            />
            <ActionRow
              title='Add an Exercise'
              screen='Demo'
              color='#8AC926'
              icon='md-time'
              requiresPro
            />
            <ActionRow
              title='Create a Routine'
              screen='Demo'
              color='#C03221'
              icon='md-time'
              requiresPro
            />
            <ActionRow
              title='Join Challenges'
              screen='Demo'
              color='#23967F'
              icon='trophy'
              requiresPro
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default HomeScreen