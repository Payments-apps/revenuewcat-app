import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import Purchases from 'react-native-purchases';

import { RootStackParamList } from '../App';
import useRevenewCat from '../hooks/useRevenewCat';

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Paywall">;

const PaywallScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const { currentOffering } = useRevenewCat();

  if (!currentOffering) {
    return (
      <View className='bg-[#1A2F44] flex-1 p-10' >
        <ActivityIndicator size='large' color='#E5962D' />
      </View>
    )
  }

  const handlMonthlyPurchase = async () => {
    if (!currentOffering.monthly) return;

    try {
      const purchaseInfo = await Purchases.purchasePackage(currentOffering.monthly);

      console.log('Monthly sub urchases >>', purchaseInfo.customerInfo.entitlements.active);

      if (purchaseInfo.customerInfo.entitlements.active.pro) {
        navigation.goBack()
      }
    } catch (error) {
      console.log(error)
    }
  }


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
      <TouchableOpacity onPress={handlMonthlyPurchase} className='items-center px-10 py-5 bg-[#E5962D] mx-10 rounded-full' >
        <Text className='text-white text-md text-md'>Free trial for one week...</Text>
        <Text className='text-white text-md text-md'>{currentOffering.monthly?.product.priceString}/month</Text>
      </TouchableOpacity>
      {/* Annual Subscribe */}

      {/* Restore Purchases */}

    </ScrollView>
  )
}

export default PaywallScreen