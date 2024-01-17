import { FlashList } from "@shopify/flash-list";
import React from "react";
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import tw from "twrnc";
import { router } from "expo-router";
import { Button } from "react-native-paper";

router

const Tickets = () => {

   const TICKETS = [{
      "id": 1,
      "date": "29-Oct-2023",
      "licenseplate": "RAE 619 A",
      "violation": "Speeding",
      "amount": "10,000 RWF",
      "day": 17,
      "month": "May"
    }, {
      "id": 2,
      "date": "10-Jul-2023",
      "licenseplate": "RAC 470 C",
      "violation": "Parking Violation",
      "amount": "10,000 RWF",
      "day": 9,
      "month": "Oct"
    }, {
      "id": 3,
      "date": "07-Aug-2023",
      "licenseplate": "RAE 619 A",
      "violation": "Speeding",
      "amount": "50,000 RWF",
      "day": 2,
      "month": "Jun"
    }, {
      "id": 4,
      "date": "21-Feb-2023",
      "licenseplate": "RAE 619 A",
      "violation": "Reckless Driving",
      "amount": "10,000 RWF",
      "day": 20,
      "month": "Oct"
    }, {
      "id": 5,
      "date": "12-Aug-2023",
      "licenseplate": "RAE 619 A",
      "violation": "Running a Red Light",
      "amount": "50,000 RWF",
      "day": 5,
      "month": "Aug"
    }, {
      "id": 6,
      "date": "17-Jun-2023",
      "licenseplate": "RAC 470 C",
      "violation": "Parking Violation",
      "amount": "50,000 RWF",
      "day": 1,
      "month": "Aug"
    }, {
      "id": 7,
      "date": "07-Sep-2023",
      "licenseplate": "RAC 470 C",
      "violation": "Speeding",
      "amount": "10,000 RWF",
      "day": 18,
      "month": "Jun"
    }, {
      "id": 8,
      "date": "08-Feb-2023",
      "licenseplate": "RAC 470 C",
      "violation": "Reckless Driving",
      "amount": "10,000 RWF",
      "day": 13,
      "month": "Jun"
    }, {
      "id": 9,
      "date": "27-Oct-2023",
      "licenseplate": "RAC 470 C",
      "violation": "Reckless Driving",
      "amount": "25,000 RWF",
      "day": 2,
      "month": "Feb"
    }, {
      "id": 10,
      "date": "16-Jan-2023",
      "licenseplate": "RAC 470 C",
      "violation": "Speeding",
      "amount": "25,000 RWF",
      "day": 31,
      "month": "Oct"
    }]
   
   
   return (
      <ScrollView style={tw` flex-1 bg-[#f0f2f5] px-4 pt-4`}>

         <View style={tw`flex-row justify-between items-center mb-4 `}>
            <FontAwesome name="chevron-left" size={20} color="black" onPress={() => router.back()}  />
            <Text style={tw`text-[20px] font-bold text-black`}>Unpaid tickets</Text>
            <View></View>
         </View>


         <FlashList
            data={TICKETS}
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
