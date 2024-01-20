import React from 'react';
import {View, Text, Image} from 'react-native';
import { router } from "expo-router";
import tw from "twrnc"
import { FontAwesome } from '@expo/vector-icons';

const Details = () => {
   return (
      <View style={tw`bg-white h-full`}>
         <View style={tw`flex-row justify-between p-4 items-center mb-4 `}>
            <FontAwesome name="chevron-left" size={20} color="black" onPress={() => router.back()}  />
            <Text style={tw`text-[24px] font-bold text-black`}>Ticket details</Text>
            <View></View>
         </View>

         <Text style={tw`text-center font-medium text-2xl`}>Ticket Details</Text>
         <Image style={tw` h-[100px] w-[100px]`} source={require("../../../assets/ticket-svgrepo-com.svg")} />

      </View>
   );
}


export default Details;
