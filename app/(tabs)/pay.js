import React from 'react';
import {View, Text} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import tw from "twrnc";
import { Link, router } from 'expo-router';


const Pay = () => {
   return (
      <View style={tw``}>
         <View style={tw`bg-[#6c63ff] p-4 rounded-b-[40px]`}>
            <View style={tw`flex-row justify-between items-center  `}>
               <FontAwesome name="chevron-left" size={20} color="white" onPress={() => router.back()} />
               <Text style={tw`text-xl font-bold text-white`}>Pay all tickets</Text>
               <View></View>
            </View>

            <View style={tw` flex-col justify-center items-center mt-8`}>
               <Text style={tw`text-3xl font-bold text-white`}>75,000</Text>
               <Text style={tw`text-3xl font-bold text-white`}>RWF</Text>
            </View>

            <Text style={tw`text-center text-white mt-4`}>You have a total of 10 tickets</Text>

            <View style={tw`flex gap-4`} >
               <Text style={tw`mr-4`}>View details</Text>
               <FontAwesome name="chevron-right" size={12} color="black" />
            </View>

         </View>
      </View>
   );
}


export default Pay;
