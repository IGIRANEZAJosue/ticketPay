import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
   Pressable,
   Text,
   View,
   TouchableOpacity,
   ScrollView,
} from "react-native";
import { TextInput, Checkbox } from "react-native-paper";
import tw from "twrnc";
import AsyncStorage from '@react-native-async-storage/async-storage';
import db from "./database";

const Signup = () => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [email, setEmail] = useState("");
   const [phoneNumber, setPhoneNumber] = useState("");
   const [id,setId]=useState("")
   const[error, setError] = useState(null)

   const [passwordVisible, setPasswordVisible] = useState(true);
   const [checked, setChecked] = useState(false);

   const handleRegister = async () => {
      // db.transaction((tx) => {
      //    tx.executeSql(
      //       "INSERT INTO users (username, password, email, phone_number) VALUES (?, ?, ?, ?)",
      //       [username, password, email, phoneNumber],
      //       (_, { insertId }) => {
      //          if (insertId) {
      //             router.replace("/home");
      //          }
      //       }
      //    );
      // });

      try {
         const response = await fetch(
            "https://ticket-pay-api.onrender.com/V1/auth/register",
            {
               method: "POST",
               headers: {
                  "Content-Type": "application/json",
               },
               body: JSON.stringify({ id:id,name:username, email:email, password:password, phone:phoneNumber }),
            }
         );
         
         const data = await response.json();
         if (response.ok) {
            await AsyncStorage.setItem("userInfo", JSON.stringify(data));
            
             router.replace("/home");
         } else {
            
            setError("User already registered")
         }
      } catch (error) {
         setError("User already registered")
      }
   };

   return (
      <ScrollView
         style={tw` bg-[#6c63ff]`}
         className=" min-h-screen bg-primary"
      >
         <View
            style={tw`justify-center min-h-[320px]`}
            className="flex-1 justify-center"
         >
            <Text
               style={tw`text-3xl font-extrabold text-center text-white mt-8`}
               className=" text-3xl font-extrabold text-center text-white mt-8"
            >
               Welcome
            </Text>
            <Text
               style={tw`text-2xl font-extrabold text-center text-white mt-4`}
               className=" text-2xl font-extrabold text-center text-white mt-4"
            >
               to
            </Text>
            <Text
               style={tw`font-extrabold text-center text-white text-6xl my-4`}
               className=" font-extrabold text-center text-white text-6xl my-4"
            >
               TicketPay
            </Text>
            <Text
               style={tw`font-medium text-center text-lg text-white mb-4`}
               className=" font-medium text-center text-lg text-white mb-4"
            >
               Register to continue
            </Text>
         </View>

         <View
            style={tw` px-8 bg-white rounded-t-[32px] pt-6 pb-6`}
            className=" flex-2 px-8 bg-white rounded-t-[32px] pt-6 pb-6"
         >
             {error&&(<Text style={tw`text-red-500 font-bold text-center text-lg`}> 
            {error}
             </Text>)}
             <TextInput
               label="National Identity Number"
               value={id}
               onChangeText={(text) => setId(text)}
               mode="outlined"
               right={<TextInput.Icon icon="account" color="#6c63ff" />}
               className=" mb-6 "
               style={tw`mb-6 `}
            />
            <TextInput
               label="Name"
               value={username}
               onChangeText={(text) => setUsername(text)}
               mode="outlined"
               right={<TextInput.Icon icon="account" color="#6c63ff" />}
               className=" mb-6 "
               style={tw`mb-6 `}
            />

            <TextInput
               label="Email"
               value={email}
               onChangeText={(text) => setEmail(text)}
               mode="outlined"
               right={<TextInput.Icon icon="email-outline" color="#6c63ff" />}
               className=" mb-6 "
               style={tw`mb-6 `}
            />

            <TextInput
               label="Phone Number"
               value={phoneNumber}
               onChangeText={(text) => setPhoneNumber(text)}
               mode="outlined"
               right={<TextInput.Icon icon="email-outline" color="#6c63ff" />}
               className=" mb-6 "
               style={tw`mb-6 `}
            />

            <TextInput
               label="Password"
               value={password}
               onChangeText={(text) => setPassword(text)}
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
                  <Text style={tw`text-[#6c63ff]`} className=" text-primary">
                     Forgot password?
                  </Text>
               </Pressable>
            </View>

            <TouchableOpacity
               onPress={handleRegister}
               style={tw`w-full justify-center items-center py-4 bg-[#6c63ff] rounded-lg my-4`}
               className=" w-full justify-center items-center py-4 bg-primary rounded-lg my-4"
            >
               <Text
                  style={tw`text-[16px] text-white font-bold`}
                  className=" text-[16px] text-white font-bold"
               >
                  REGISTER
               </Text>
            </TouchableOpacity>

            <View
               style={tw`flex-row justify-center gap-1`}
               className="flex-row justify-center space-x-1"
            >
               <Text>Already have an account?</Text>
               <Pressable onPress={() => router.push("/login")}>
                  <Text style={tw`text-[#6c63ff] `} className=" text-primary ">
                     Login
                  </Text>
               </Pressable>
            </View>
         </View>
      </ScrollView>
   );
};

export default Signup;
