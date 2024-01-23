import { router } from "expo-router";
import React from "react";
import { View, Text, Image,TouchableOpacity } from "react-native";
import tw from "twrnc";
import { FontAwesome } from '@expo/vector-icons';
import { useEffect,useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';



const profile = () => {
   const [profileInfo,setProfileInfo]=useState()
 
   useEffect(()=>{
      const getData = async ()=>{
      const value = await AsyncStorage.getItem("userInfo");
      const parsedValue = JSON.parse(value);
      if(parsedValue.user._id){

         setProfileInfo(parsedValue)}
      else{
         router.replace("/login");
      }
   }
   if(!profileInfo){
   getData()}
   },[])
   const handleLogout = async () => {
      
           await AsyncStorage.removeItem('userInfo');
          await AsyncStorage.removeItem("userToken");
         //   setIsLoggedIn(true);
         router.replace("/login");
          
       
   };
   return (
      <View style={tw`bg-white h-full px-8 `}>
         <Text style={tw`text-3xl text-center mt-4 font-bold`}>
            Profile
         </Text>

         <View style={tw` justify-center items-center`}>
            <Image style={tw`h-[120px] w-[120px] mt-6`} source={require("../../assets/julian-wan-unsplash-1.png")} />
            <View>
               <Text style={tw`text-center`}>{profileInfo&&profileInfo.user.name}</Text>
               <Text style={tw`text-center`}>{profileInfo&&profileInfo.user.email}</Text>
            </View>
         </View>
         <TouchableOpacity
               onPress={handleLogout}
               style={tw`w-full justify-center items-center py-4 bg-[#6c63ff] rounded-lg my-4`}
               className=" w-full justify-center items-center py-4 bg-[#6c63ff] rounded-lg my-4"
            >
               <Text
                  style={tw`text-[16px] text-white font-bold`}
                  className=" text-[16px] text-white font-bold"
               >
                  LOGOUT
               </Text>
            </TouchableOpacity>

      </View>
   );
};

export default profile;
