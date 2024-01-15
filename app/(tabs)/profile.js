import { router } from "expo-router";
import React from "react";
import { View, Text, Image } from "react-native";
import tw from "twrnc";
import { FontAwesome } from '@expo/vector-icons';


const profile = () => {
   return (
      <View style={tw`bg-white h-full `}>
         <Text style={tw`text-3xl text-center mt-4 font-bold`}>
            Profile
         </Text>

         <View style={tw` justify-center items-center`}>
            <Image style={tw`h-[120px] w-[120px]`} source={require("../../assets/julian-wan-unsplash-1.png")} />
         </View>

      </View>
   );
};

export default profile;
