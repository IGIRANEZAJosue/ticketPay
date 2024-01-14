import React, { useState } from 'react'
import { Pressable, Text, View, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput, Checkbox } from 'react-native-paper'

import tw from 'twrnc';

const Login = () => {

   const [passwordVisible, setPasswordVisible] = useState (true);
   const [checked, setChecked] = useState(false);

   return (
      <ScrollView style={tw`min-h-screen bg-[#6c63ff]`} className=" min-h-screen bg-[#6c63ff]">

         <View style={tw`flex-1 justify-center`} className="flex-1 justify-center">   
            <Text style={tw`font-extrabold text-center text-white text-6xl my-4`} className=" font-extrabold text-center text-white text-6xl my-4">TicketPay</Text>
            <Text style={tw`text-2xl font-extrabold text-center text-white mt-8`} className=" text-2xl font-extrabold text-center text-white mt-8">Welcome Back</Text>
            <Text className=" font-medium text-lg text-center text-white mt-4">Sign in to continue</Text>
         </View>
         
         <View className=" flex-2 px-8 bg-white rounded-t-[32px] pt-10 pb-6">
            <TextInput 
               label= "Email" 
               mode="outlined" 
               right={<TextInput.Icon icon="email-outline" color="#6c63ff" /> }
               className=" mb-6 " 
            />
            
            <TextInput 
               label= "Password"
               mode="outlined"
               secureTextEntry={passwordVisible}
               right={
                  <TextInput.Icon onPress={() => {setPasswordVisible(!passwordVisible)}} icon={passwordVisible? "eye-off-outline" : "eye"} color="#6c63ff" />
               }  
            />

            <View className="flex-row items-center justify-between">
               <View className="flex-row items-center -ml-2">
                  <Checkbox
                     status={checked ? 'checked' : 'unchecked'}
                     onPress={() => {
                        setChecked(!checked);
                     }}
                     color='#6c63ff'
                  />
                  <Text className="text-[14px] -ml-1">Remember me</Text>
               </View>
               <Pressable>
                  <Text className=" text-primary">Forgot password?</Text>
               </Pressable>
            </View>

            <TouchableOpacity className=" w-full justify-center items-center py-4 bg-primary rounded-lg my-4">
               <Text className=" text-[16px] text-white font-bold">LOGIN</Text>
            </TouchableOpacity>

            <View className="flex-row justify-center space-x-1">
               <Text>Dont have an account?</Text> 
               <Pressable>
                  <Text className=" text-primary ">Create a new account</Text>
               </Pressable>
            </View>



         </View>

        






      </ScrollView>
   )
}

export default Login