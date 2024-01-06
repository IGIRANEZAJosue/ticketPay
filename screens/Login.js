import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { TextInput, Checkbox } from 'react-native-paper'

const Login = () => {

   const [passwordVisible, setPasswordVisible] = useState (true);
   const [checked, setChecked] = useState(false);

   return (
      <View className=" my-8 px-4 min-h-screen bg-primary py-16">
         <Text className=" font-extrabold text-center text-white text-5xl my-4">Login </Text>
         <Text className=" text-xl font-medium text-center">Welcome back to TicketPay</Text>
         
         <View className="my-8">
            <Text className=" font-semibold text-lg mb-2 text-gray-800">Email</Text>
            <TextInput 
               label= "Email" 
               mode="outlined" 
               right={<TextInput.Icon icon="email-outline" color="gray" /> }
               className=" mb-4 " 
            />
            
            <Text className=" font-semibold text-lg mb-2 text-gray-800">Password</Text>
            <TextInput 
               label= "Password"
               mode="outlined"
               secureTextEntry={passwordVisible}
               right={
                  <TextInput.Icon onPress={() => {setPasswordVisible(!passwordVisible)}} icon={passwordVisible? "eye-off" : "eye"} color="gray" />
               }  
            />
         </View>

         <View>
            <Checkbox
               status={checked ? 'checked' : 'unchecked'}
               onPress={() => {
                  setChecked(!checked);
               }}
            />
            <Text>Forgot password?</Text>
         </View>






      </View>
   )
}

export default Login