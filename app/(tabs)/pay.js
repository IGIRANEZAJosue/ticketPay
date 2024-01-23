import React,{useEffect,useState} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity, Alert} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import tw from "twrnc";
import { Link, router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import dayjs from 'dayjs';


const Pay = () => {
   const [userInfo,setUserInfo]=useState()
   const [tickets,setTickets] = useState(null)
   const [total,setTotal] = useState(0)
 useEffect(()=>{
    const getData = async ()=>{
    const value = await AsyncStorage.getItem("userInfo");
    const parsedValue = JSON.parse(value);
    if(parsedValue.user._id){

    setUserInfo(parsedValue )}
    else{
       router.replace("/login");
    }
 }
 getData()
 },[])

 useEffect(()=>{
    const fetchData=async()=>{
       try {
          const response = await fetch(
             "https://ticket-pay-api.onrender.com/V1/ticket/all",
             {
                method: "POST",
                headers: {
                   "Content-Type": "application/json",
                },
                body: JSON.stringify({ owner:userInfo.user._id}),
             }
          );
         
          const data = await response.json();
          if (data) {
              let total=0
             setTickets(data.tickets.map((ticket,index) =>{
                total = total + parseFloat(ticket.amount)
                return({
                id: index,
                violation: ticket.name,
                licensePlate:ticket.vehicle,
                amount: ticket.amount,
                date: dayjs(ticket.createdAt).format("DD-MMM-YYYY")



             })}))
             setTotal(total)
             
          } 
       } catch (error) {
         //  .error("Error registering:", error);
       }
    }
    if(userInfo){
       fetchData()
    }
 },[userInfo])
   return (
      <ScrollView style={tw`flex-col h-full bg-white pb-8`}>
         <View style={tw` flex-col justify-between bg-[#6c63ff] p-4 rounded-b-[40px] h-[308px]`}>
            <View style={tw`flex-row justify-between items-center  `}>
               <FontAwesome name="chevron-left" size={20} color="white" onPress={() => router.back()} />
               <Text style={tw`text-[24px] font-bold text-white`}>Pay all tickets</Text>
               <View></View>
            </View>

            <View style={tw` flex-col justify-center items-center gap-4 `}>
               <Text style={tw`text-[56px] font-extrabold text-white`}>{total}</Text>
               <Text style={tw`text-3xl font-bold text-white`}>RWF</Text>
            </View>

            <Text style={tw`text-center text-white mt-4 `}>You have a total of {tickets&&tickets.length} tickets</Text>

         </View>

         
         <View style={tw` flex-row flex-wrap justify-center mt-2 mb-8 px-4`} className="grid grid-cols-5 grid-rows-5 gap-8">
            <View style={tw` items-center justify-center h-[120px] w-1/2 `} >
               <Image source={require("../../assets/mtn-momo-png-image.png")} />
            </View>
            <View style={tw` items-center justify-center h-[120px] w-1/2 `} >
               <Image source={require("../../assets/airtel-money-png.png")} />
            </View>
            <View style={tw` items-center justify-center h-[120px] w-1/2`} className="row-start-2">
               <Image source={require("../../assets/visa-logo-png.png")} />
            </View>
            <View style={tw` items-center justify-center h-[120px] w-1/2`} className="row-start-2">
               <Image source={require("../../assets/mastercard-logo-png.png")} />
            </View>

            <TouchableOpacity style={tw` mt-4 w-full bg-[#6c63ff] flex-row justify-center rounded-xl py-4`} onPress={()=> Alert.alert("You have successfully paid all your tickets")}>
               <Text style={tw`text-white font-bold `}>Pay</Text>
            </TouchableOpacity>

         </View>

         


      </ScrollView>
   );
}


export default Pay;
