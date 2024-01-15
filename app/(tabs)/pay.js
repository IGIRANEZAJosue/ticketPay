import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import tw from "twrnc";
import { Link, router } from 'expo-router';


const Pay = () => {
   return (
      <ScrollView style={tw`flex-col h-full bg-white pb-8`}>
         <View style={tw` flex-col justify-between bg-[#6c63ff] p-4 rounded-b-[40px] h-[308px]`}>
            <View style={tw`flex-row justify-between items-center  `}>
               <FontAwesome name="chevron-left" size={20} color="white" onPress={() => router.back()} />
               <Text style={tw`text-[24px] font-bold text-white`}>Pay all tickets</Text>
               <View></View>
            </View>

            <View style={tw` flex-col justify-center items-center gap-4 `}>
               <Text style={tw`text-[56px] font-extrabold text-white`}>75,000</Text>
               <Text style={tw`text-3xl font-bold text-white`}>RWF</Text>
            </View>

            <Text style={tw`text-center text-white mt-4 `}>You have a total of 10 tickets</Text>

         </View>

         
         <View style={tw` flex-row flex-wrap justify-center mt-2 mb-8 px-4`} className="grid grid-cols-5 grid-rows-5 gap-8">
            <View style={tw` items-center justify-center h-[120px] w-1/2 `} >
               <Image source={require("../../assets/mtn-momo-png-image.png")} />
            </View>
            <View style={tw` items-center justify-center h-[120px] w-1/2 `} >
               <Image source={require("../../assets/airtel-money-png.png")} />
            </View>
            <View style={tw` items-center justify-center h-[120px] w-1/2`} className="row-start-2">
               <Image source={require("../../assets/visa-logo-png.png")} />
            </View>
            <View style={tw` items-center justify-center h-[120px] w-1/2`} className="row-start-2">
               <Image source={require("../../assets/mastercard-logo-png.png")} />
            </View>

            <TouchableOpacity style={tw` mt-4 w-full bg-[#6c63ff] flex-row justify-center rounded-xl py-4`}>
               <Text style={tw`text-white font-bold `}>Pay</Text>
            </TouchableOpacity>

         </View>

         


      </ScrollView>
   );
}


export default Pay;
