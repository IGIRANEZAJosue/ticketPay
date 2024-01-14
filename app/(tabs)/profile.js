import { router } from "expo-router";
import React from "react";
import { View, Text } from "react-native";
import tw from "twrnc";
import { FontAwesome } from '@expo/vector-icons';


const profile = () => {
   return (
      <View>
         <Text style={tw`text-3xl text-center mt-4 font-bold text-black`}>
            Profile
         </Text>

      </View>
   );
};

export default profile;
