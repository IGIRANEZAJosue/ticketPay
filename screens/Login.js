import React, { useState } from 'react'
import { Pressable, Text, View, TouchableOpacity } from 'react-native'
import { TextInput, Checkbox } from 'react-native-paper'

const Login = () => {

   const [passwordVisible, setPasswordVisible] = useState (true);
   const [checked, setChecked] = useState(false);

   return (
      <View className=" min-h-screen bg-primary">

         <View className="flex-1 justify-center">   
            <Text className=" font-extrabold text-center text-white text-5xl my-4">TicketPay</Text>
            <Text className=" text-xl font-extrabold text-center text-white">Welcome Back</Text>
            <Text className=" font-medium text-center text-white">Sign in to continue</Text>
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

            <View className="flex-row space-x-1">
               <Text>Dont have an account?</Text> 
               <Pressable>
                  <Text className=" text-primary ">Create a new account</Text>
               </Pressable>
            </View>



         </View>

        






      </View>
   )
}

export default Login