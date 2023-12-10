import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Image, Text, View } from 'react-native';

const profileImage = require('./assets/julian-wan-unsplash-1.png');

export default function App() {
  return (
    <SafeAreaView className="flex-1 flex-col gap-4 items-center pt-8 px-6 bg-[#f0f2f5]">
      <Text className="text-4xl font-extrabold ">TicketPay</Text>
      <View className=" flex-row items-center bg-blue-100/50 rounded-xl w-full p-4">
          <Image className="mr-4" source={require("./assets/julian-wan-unsplash-1.png")} />
          <View className="flex-col justify-between">
            <Text className=" font-extrabold ">IGIRANEZA Josue</Text>
            <Text className=" text-gray-400">1200280067228063</Text>
          </View>
      </View>

      <View className="flex-row justify-between items-center bg-[#6C63FF] w-full p-4 rounded-xl" >
        
        <View>
          <Text className="text-white">Total in tickets</Text>
          <Text className="text-white font-extrabold text-3xl">75,000</Text>
          <Text className="text-white">RWF</Text>
        </View>

        <View className=" justify-center items-center border-2 rounded-[50px] border-white w-24 h-24">
          <Text className="text-white text-lg">Pay</Text>
        </View>

      </View>

      <View className=" w-full">
        <View className="flex-row justify-between items-center">
          <Text className="text-xl">Unpaid Tickets</Text>
          <Text>icon goes here</Text>
        </View>

      </View>
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


