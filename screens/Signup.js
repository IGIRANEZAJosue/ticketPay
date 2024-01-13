import React, { useState } from "react";
import { Pressable, Text, View, TouchableOpacity } from "react-native";
import { TextInput, Checkbox } from "react-native-paper";

const Signup = () => {
   const [passwordVisible, setPasswordVisible] = useState(true);
   const [checked, setChecked] = useState(false);

   return (
      <View className=" min-h-screen bg-primary">
         <View className="flex-1 justify-center">
            <Text className=" text-3xl font-extrabold text-center text-white mt-8">
               Welcome
            </Text>
            <Text className=" text-2xl font-extrabold text-center text-white mt-4">
               to
            </Text>
            <Text className=" font-extrabold text-center text-white text-6xl my-4">
               TicketPay
            </Text>
            <Text className=" font-medium text-center text-lg text-white mb-4">
               Register to continue
            </Text>
         </View>

         <View className=" flex-2 px-8 bg-white rounded-t-[32px] pt-6 pb-6">
            <TextInput
               label="Name"
               mode="outlined"
               right={<TextInput.Icon icon="user" color="#6c63ff" />}
               className=" mb-6 "
            />

            <TextInput
               label="Phone Number"
               mode="outlined"
               right={<TextInput.Icon icon="numeric" color="#6c63ff" />}
               className=" mb-6 "
            />

            <TextInput
               label="Email"
               mode="outlined"
               right={<TextInput.Icon icon="email-outline" color="#6c63ff" />}
               className=" mb-6 "
            />

            <TextInput
               label="Password"
               mode="outlined"
               secureTextEntry={passwordVisible}
               right={
                  <TextInput.Icon
                     onPress={() => {
                        setPasswordVisible(!passwordVisible);
                     }}
                     icon={passwordVisible ? "eye-off-outline" : "eye"}
                     color="#6c63ff"
                  />
               }
            />

            <View className="flex-row items-center justify-between">
               <View className="flex-row items-center -ml-2">
                  <Checkbox
                     status={checked ? "checked" : "unchecked"}
                     onPress={() => {
                        setChecked(!checked);
                     }}
                     color="#6c63ff"
                  />
                  <Text className="text-[14px] -ml-1">Remember me</Text>
               </View>
               <Pressable>
                  <Text className=" text-primary">Forgot password?</Text>
               </Pressable>
            </View>

            <TouchableOpacity className=" w-full justify-center items-center py-4 bg-primary rounded-lg my-4">
               <Text className=" text-[16px] text-white font-bold">
                  REGISTER
               </Text>
            </TouchableOpacity>

            <View className="flex-row justify-center space-x-1">
               <Text>Already have an account?</Text>
               <Pressable>
                  <Text className=" text-primary ">Login</Text>
               </Pressable>
            </View>
         </View>
      </View>
   );
};

export default Signup;
