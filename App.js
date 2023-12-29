import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Image, Text, View, ScrollView, FlatList } from 'react-native';

//Icons
import { Feather, AntDesign } from '@expo/vector-icons';
import UnpaidTickets from './components/UnpaidTickets';


export default function App() {

   

   return (
      <SafeAreaView className=" flex-1 bg-[#efeff1] pt-4">
         <StatusBar style="auto" />
            <ScrollView>
               <View className="flex-1 flex-col items-center space-y-1 pt-4 px-4">
                  <Text className="text-4xl font-extrabold text-[#5C54AD] ">TicketPay</Text>
                  
                  <View className=" flex-row items-center bg-white rounded-xl w-full p-4 mb-4 shadow-sm">
                     <Image className="mr-4" source={require("./assets/julian-wan-unsplash-1.png")} />
                     <View className="flex-col justify-between">
                        <Text className=" font-bold text-2xl">IGIRANEZA Josue</Text>
                        <Text className=" text-gray-400">1200280067228063</Text>
                     </View>
                  </View>


                  <View className="flex-row justify-between items-center bg-[#6C63FF] w-full p-4 rounded-xl " >
                  
                     <View className=" space-y-1 ">
                        <Text className="text-white/80 text-[20px] font-bold ">Total in tickets</Text>
                        <Text className="text-white font-black text-[48px]">175,000</Text>
                        <Text className="text-white/80 text-[20px]">RWF</Text>
                     </View>

                     <View className=" flex-row justify-center items-center border-2 rounded-[50px] border-white w-24 h-24">
                        <Text className="text-white text-lg font-extrabold">Pay</Text>
                     </View>

                  </View>

                  <View className=" w-full flex-col bg-[#f0f2f5] rounded-3xl mt-4">
                     
                     <View className="flex-row justify-between items-center mb-3 ">
                        <Text className="text-2xl font-bold">Unpaid Tickets</Text>
                        <Feather name="arrow-right-circle" size={24} color="black" />
                     </View>

                     <UnpaidTickets />
                     
                  </View>


               </View>
            </ScrollView>
            
      </SafeAreaView>
  );
}


