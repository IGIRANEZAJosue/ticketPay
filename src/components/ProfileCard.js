import React from 'react'
import { View, Image, Text } from 'react-native'

const ProfileCard = () => {
   return (
      <View className=" flex-row items-center bg-gray-200 rounded-xl w-screen p-4">
         <Image source={require("./julian-wan-unsplash-1.png")} />
         <View className="flex-col justify-between">
            <Text className=" font-bold text-2xl">IGIRANEZA Josue</Text>
            <Text className=" text-gray-400">1200280067228063</Text>
         </View>
      </View>
   )
}

export default ProfileCard
