import { Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { NavigationProp } from '../screens/HomeScreen'



interface Props { title: string, screen: any, color: string, requiresPro?: boolean, icon?: any, vertical?: boolean }
const ActionRow: FC<Props> = ({ title, screen, color, requiresPro, icon, vertical }) => {
  const navigation = useNavigation<NavigationProp>()
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(screen)}
      className={`flex flex-1 justify-center items-center py-6 m-2 rounded-lg space-x-2 ${vertical ? 'flex-col' : 'flex-row'}`} style={{ backgroundColor: color }}>
      <Ionicons name={icon} size={33} color='white' />
      <Text className='text-white font-bold text-lg' >{title}</Text>
    </TouchableOpacity>
  )
}

export default ActionRow
