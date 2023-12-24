import { View, Text } from 'react-native'
import React from 'react'

const TicketCard = () => {
  return (
    <View className=" bg-white p-4 flex-col space-y-1 mr-4 rounded-xl border-[#dddde2] w-[180px]">
      <Text className=" font-extrabold text-lg">RAC 470 C</Text>
      <Text className=" text-gray-400">12 Nov 2022</Text>
      <Text className=" font-bold text-lg text-gray-600">Speeding</Text>
      <Text className=" text-lg font-extrabold">25,000 Rwf</Text>
    </View>
  )
}

export default TicketCard