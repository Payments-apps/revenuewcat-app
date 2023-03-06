import { Text, TouchableOpacity, View } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { NavigationProp } from '../screens/DemoScreen'
import useRevenewCat from '../hooks/useRevenewCat'



interface Props { title: string, screen: any, color: string, requiresPro?: boolean, icon?: any, vertical?: boolean }
const ActionRow: FC<Props> = ({ title, screen, color, requiresPro, icon, vertical }) => {
  const navigation = useNavigation<NavigationProp>()
  const { isProMember } = useRevenewCat();

  const lockedForProMembers = requiresPro && !isProMember;

  return (
    <TouchableOpacity
      onPress={() => lockedForProMembers ? navigation.navigate('Paywall') : navigation.navigate(screen)}
      className={`flex flex-1 justify-center items-center py-6 m-2 rounded-lg space-x-2 ${vertical ? 'flex-col' : 'flex-row'}`} style={{ backgroundColor: requiresPro && lockedForProMembers ? 'gray' : color }}>
      {lockedForProMembers
        ?
        <View className='absolute top-0 right-0 rotate-12 items-center'>
          <Ionicons name='lock-closed' size={20} color='white' />
          <Text className=' text-white font-extrabold' >PRO</Text>
        </View>
        : null}
      <Ionicons name={icon} size={33} color='white' />
      <Text className='text-white font-bold text-lg' >{title}</Text>
    </TouchableOpacity>
  )
}

export default ActionRow
