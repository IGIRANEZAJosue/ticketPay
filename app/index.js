import { router, useRouter } from "expo-router";
import React, { useState } from "react";
import { Pressable, Text, View, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { TextInput, Checkbox } from "react-native-paper";
import tw from "twrnc";
import { loginUser } from "./database";

const Page = () => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

   const [passwordVisible, setPasswordVisible] = useState(true);
   const [checked, setChecked] = useState(false);

   const handleLogin = async () => {
      const user = await loginUser(username, password);
      if (user) {
         // Store user information (e.g., using state management)
         router.replace("/home");
      } else {
         // Handle login error
         console.log('Error logging in')
      }
   };

   return (
      <ScrollView
         style={tw` flex-col bg-[#6c63ff]`}
         className=" min-h-screen bg-[#6c63ff]"
      >
         <View
            style={tw` justify-center min-h-[320px] mb-8 `}
            className="flex-1 justify-center"
         >
            <Text
               style={tw`font-extrabold text-center text-white text-5xl my-4`}
               className=" font-extrabold text-center text-white text-6xl my-4"
            >
               TicketPay
            </Text>
            <Text
               style={tw`text-2xl font-extrabold text-center text-white mt-5`}
               className=" text-2xl font-extrabold text-center text-white mt-8"
            >
               Welcome Back
            </Text>
            <Text
               style={tw`font-medium text-lg text-center text-white mt-4`}
               className=" font-medium text-lg text-center text-white mt-4"
            >
               Sign in to continue
            </Text>
         </View>

         <View
            style={tw` px-8 bg-white rounded-t-[32px] pt-10 pb-6`}
            className=" flex-2 px-8 bg-white rounded-t-[32px] pt-10 pb-6"
         >
            <TextInput
               label="Email"
               value={username}
               onChangeText={setUsername}
               mode="outlined"
               right={<TextInput.Icon icon="email-outline" color="#6c63ff" />}
               className=" mb-6 "
               style={tw`mb-6`}
            />

            <TextInput
               label="Password"
               value={password}
               onChangeText={setPassword}
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

            <View
               style={tw`flex-row items-center justify-between`}
               className="flex-row items-center justify-between"
            >
               <View
                  style={tw`flex-row items-center -ml-2`}
                  className="flex-row items-center -ml-2"
               >
                  <Checkbox
                     status={checked ? "checked" : "unchecked"}
                     onPress={() => {
                        setChecked(!checked);
                     }}
                     color="#6c63ff"
                  />
                  <Text
                     style={tw`text-[14px] -ml-1`}
                     className="text-[14px] -ml-1"
                  >
                     Remember me
                  </Text>
               </View>

               <Pressable>
                  <Text style={tw`text-[#6c63ff]`} className=" text-[#6c63ff]">
                     Forgot password?
                  </Text>
               </Pressable>
            </View>

            <TouchableOpacity
               onPress={handleLogin}
               style={tw`w-full justify-center items-center py-4 bg-[#6c63ff] rounded-lg my-4`}
               className=" w-full justify-center items-center py-4 bg-[#6c63ff] rounded-lg my-4"
            >
               <Text
                  style={tw`text-[16px] text-white font-bold`}
                  className=" text-[16px] text-white font-bold"
               >
                  LOGIN
               </Text>
            </TouchableOpacity>

            <View
               style={tw`flex-row justify-center`}
               className="flex-row justify-center space-x-1"
            >
               <Text>Dont have an account?</Text>
               <Pressable onPress={() => router.push("./Signup")}>
                  <Text style={tw`text-[#6c63ff]`} className=" text-[#6c63ff] ">
                     Create a new account
                  </Text>
               </Pressable>
            </View>
         </View>
      </ScrollView>
   );
};

export default Page;

