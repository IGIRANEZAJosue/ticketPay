import { Text, View } from 'react-native'
import React from 'react'

const ProfileCard = () => {
   return (
      <View className=" flex-row items-center bg-gray-200 rounded-xl w-full p-4">
         <Image className="mr-4" source={require("./assets/julian-wan-unsplash-1.png")} />
         <View className="flex-col justify-between">
            <Text className=" font-bold text-2xl">IGIRANEZA Josue</Text>
            <Text className=" text-gray-400">1200280067228063</Text>
         </View>
      </View>
  )
}

export default ProfileCard;