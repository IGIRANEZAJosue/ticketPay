
import { FlashList } from '@shopify/flash-list';
import React from 'react';
import {View, Text} from 'react-native';


const UnpaidTickets = () => {

   const TICKETS = [{
      id: 1,
      date: "21-Oct-2023",
      licensePlate : "RAE 619 A",
      violation: "Red Light",
      amount: "50,000 RWF"
    }, {
      id: 2,
      date: "18-Jul-2023",
      licensePlate : "RAC 470 C",
      violation: "Reckless Driving",
      amount: "50,000 RWF"
    }, {
      id: 3,
      date: "28-Dec-2022",
      licensePlate : "RAC 470 C",
      violation: "Red Light",
      amount: "50,000 RWF"
    }, {
      id: 4,
      date: "20-Oct-2023",
      licensePlate : "RAE 619 A",
      violation: "Illegal U-turn",
      amount: "50,000 RWF"
    }, {
      id: 5,
      date: "07-Jul-2023",
      licensePlate : "RAE 619 A",
      violation: "Illegal U-turn",
      amount: "25,000 RWF"
    }, {
      id: 6,
      date: "12-Jun-2023",
      licensePlate : "RAE 619 A",
      violation: "Red Light",
      amount: "10,000 RWF"
    }, {
      id: 7,
      date: "22-Oct-2023",
      licensePlate : "RAC 470 C",
      violation: "Parking Violation",
      amount: "10,000 RWF"
    }, {
      id: 8,
      date: "25-Oct-2023",
      licensePlate : "RAE 619 A",
      violation: "Reckless Driving",
      amount: "25,000 RWF"
    }, {
      id: 9,
      date: "07-Sep-2023",
      licensePlate : "RAC 470 C",
      violation: "Illegal U-turn",
      amount: "25,000 RWF"
    }, {
      id: 10,
      date: "18-Jan-2023",
      licensePlate : "RAE 619 A",
      violation: "Illegal U-turn",
      amount: "50,000 RWF"
    }]

   return (
      <View >
         <FlashList
            horizontal
            data={TICKETS}
            renderItem={({item}) => (
               <View className=" bg-white p-4 flex-col space-y-2 mr-4 mb-4 rounded-xl border-[#dddde2] w-[200px] shadow-lg ">
                  <Text className=" font-extrabold text-[24px] text-gray-900">{item.licensePlate}</Text>
                  <Text className=" text-gray-500">{item.date}</Text>
                  <Text className=" font-bold text-lg text-gray-900">{item.violation}:</Text>
                  <Text className=" text-[22px] text-gray-900 font-extrabold">{item.amount}</Text>
               </View>
               )
            }
            keyExtractor={item => item.id}
            estimatedItemSize={180}

         />

      </View>
      
   );
}


export default UnpaidTickets;
