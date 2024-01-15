import 'react-native-gesture-handler'
import React, { useState } from "react";
import { View, Text } from "react-native";
import { Redirect } from "expo-router";
import Login from './login';


const index = () => {

   const [isLoggedIn, setIsLoggedIn] = useState("false");

   return (
      
     <Redirect href="/home" />

   );
};

export default index;
