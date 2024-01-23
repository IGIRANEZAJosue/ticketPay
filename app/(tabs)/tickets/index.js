import { FlashList } from "@shopify/flash-list";
import React,{useEffect,useState} from "react";
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import tw from "twrnc";
import { router } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from "react-native-paper";
import dayjs from "dayjs";

router

const Tickets = () => {
     const [alltickets,setAllTickets] = useState(null)
  
   useEffect(()=>{
      const fetchData=async()=>{
         const value = await AsyncStorage.getItem("userInfo");
      const parsedValue = JSON.parse(value);
         try {
            const response = await fetch(
               "https://ticket-pay-api.onrender.com/V1/ticket/all",
               {
                  method: "POST",
                  headers: {
                     "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ owner:parsedValue.user._id}),
               }
            );
           
            const data = await response.json();
            if (data) {
               
               setAllTickets(data.tickets.map((ticket,index) =>({
                  id: index,
                  violation: ticket.name,
                  licensePlate:ticket.vehicle,
                  amount: ticket.amount,
                  date: dayjs(ticket.createdAt).format("DD-MMM-yyyy"),
                  day:dayjs(ticket.createdAt).format("DD"),
                  month:dayjs(ticket.createdAt).format("MMM")

               



               })))
            } 
         } catch (error) {
            // .error("Error registering:", error);
         }
      }
      
         fetchData()
    
   },[])

   
   
   
   return (
      <ScrollView style={tw` flex-1 bg-[#f0f2f5] px-4 pt-4`}>

         <View style={tw`flex-row justify-between items-center mb-4 `}>
            <FontAwesome name="chevron-left" size={20} color="black" onPress={() => router.back()}  />
            <Text style={tw`text-[20px] font-bold text-black`}>Unpaid tickets</Text>
            <View></View>
         </View>


         <FlashList
            data={alltickets}
            renderItem={({item}) => (
               <View onPress={() => router.push("/(tabs)/tickets/details")} style={tw` h-[144px] flex-row mb-4 rounded-[16px] items-center w-full gap-4 bg-[#fff] p-4`}>
                  
                  <View style={tw` bg-[#6c63ff]/90 flex-col items-center justify-center rounded-[22px] h-[110px] w-[100px]   `}>
                     <Text style={tw`text-[24px] text-white font-bold `}>{item.day}</Text>
                     <Text style={tw`text-[24px] text-white font-bold `}>{item.month}</Text>
                  </View>
                  
                  <View>
                     <Text style={tw`font-bold text-xl text-gray-900`} className=" font-bold text-lg text-gray-900">{item.violation}:</Text>
                     <Text style={tw`text-[18px] text-gray-900 font-extrabold`} className=" text-[22px] text-gray-900 font-extrabold">{item.amount}</Text>
                     <View style={tw` flex-row gap-4 mt-4`}>
                        <TouchableOpacity onPress={() => router.push("/(tabs)/tickets/details")} style={tw` bg-[#6c63ff]/90 rounded-full px-5 py-1  `}>
                           <Text style={tw`text-white text-sm `}>Pay</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => router.push("/(tabs)/tickets/details")}  style={tw` border-2 border-gray-600 px-4 rounded-full `}>
                           <Text  style={tw`text-sm `}>Details</Text>
                        </TouchableOpacity>
                     </View>
                  </View>

               </View>
               )
            }
            keyExtractor={item => item.id}
            estimatedItemSize={160}
            
         />
      </ScrollView>
   );
};

export default Tickets;
