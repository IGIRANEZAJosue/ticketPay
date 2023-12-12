import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Image, Text, View, ScrollView } from 'react-native';

//Icons
import { Feather, AntDesign } from '@expo/vector-icons';
import ProfileCard from './src/components/ProfileCard';
import TicketCard from './components/TicketCard';

const profileImage = require('./assets/julian-wan-unsplash-1.png');

export default function App() {
  return (
    <SafeAreaView className="flex-1 flex-col gap-4 items-center pt-8 px-6 bg-[#f2f0f5]">
         <Text className="text-4xl font-extrabold ">TicketPay</Text>
         <View className=" flex-row items-center bg-gray-200 rounded-xl w-full p-4">
            <Image className="mr-4" source={require("./assets/julian-wan-unsplash-1.png")} />
            <View className="flex-col justify-between">
               <Text className=" font-bold text-2xl">IGIRANEZA Josue</Text>
               <Text className=" text-gray-400">1200280067228063</Text>
            </View>
         </View>


         <View className="flex-row justify-between items-center bg-[#6C63FF] w-full p-4 rounded-xl" >
         
            <View>
               <Text className="text-white">Total in tickets</Text>
               <Text className="text-white font-extrabold text-[48px]">75,000</Text>
               <Text className="text-white">RWF</Text>
            </View>

            <View className=" flex-row justify-center items-center border-2 rounded-[50px] border-white w-24 h-24">
               <Text className="text-white text-lg font-extrabold">Pay</Text>
            </View>

         </View>

         <ScrollView className=" w-full flex-col space-y-2 bg-[#f0f2f5] px-4 rounded-3xl py-4">
            <View className="flex-row justify-between items-center ">
               <Text className="text-2xl font-bold">Unpaid Tickets</Text>
               <Feather name="arrow-right-circle" size={24} color="black" />
            </View>

            <ScrollView horizontal="true" className=" flex-row">
               <TicketCard />
               <TicketCard />
               <TicketCard />
            </ScrollView>

         </ScrollView>
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


