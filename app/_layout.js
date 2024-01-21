import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { Stack, router } = require("expo-router");


const StackLayout = () => {

   useEffect(() => {
      checkUserAuthentication();
    }, []);

    const checkUserAuthentication = async () => {
      const userToken = await AsyncStorage.getItem('userToken');
      
      if (userToken) {
        router.replace('/home');
        console.log('User is already logged in');
      } else {
        console.log('User is not logged in');
      }
    };


   return (
      <Stack>
         
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        
            <Stack.Screen name="index" />
        
      </Stack>
   );
};
