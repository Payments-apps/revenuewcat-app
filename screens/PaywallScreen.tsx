import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { useNavigation } from '@react-navigation/native';

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Paywall">;

const PaywallScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <ScrollView className=' bg-[#1A2F44] flex-1'>
      <Text className='text-2xl text-center uppercase text-white'>
        upgrade
      </Text>
      <Text className='text-center text-white'>
        Upgrade to Pro to Access all te Features
      </Text>
      <TouchableOpacity onPress={() => navigation.goBack()} className='absolute top-0 right-0 p-5'>
        <Ionicons name='md-close-circle-sharp' size={33} color='#E5962D' />
      </TouchableOpacity>

      {/* Logo */}
      <View className='items-center'>
        <MaterialCommunityIcons name='trophy-award' size={150} color='#E5962D' />
      </View>

      {/* Content */}
      <View className='space-y-5 px-10 py-5'>
        <View className=' flex-row space-x-10 items-center '>
          <Ionicons name='md-key' size={33} color='#E5962D' />
          <View className=' flex-1 '>
            <Text className=' text-white font-bold text-lg'>Access to all features</Text>
            <Text className='text-white text-sm font-extralight'>Upgrade to the premium version of the app and enjoy all the exclusive features available only to pro users.</Text>
          </View>
        </View>
      </View>

      {/* Monthly Subscribe */}

      {/* Annual Subscribe */}

      {/* Restore Purchases */}

    </ScrollView>
  )
}

export default PaywallScreen