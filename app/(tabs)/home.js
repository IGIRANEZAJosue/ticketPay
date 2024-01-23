import { Image, Text, View, ScrollView, FlatList } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect,useState} from "react";

//Icons
import { Feather, AntDesign } from "@expo/vector-icons";
import UnpaidTickets from "../../components/UnpaidTickets";
import Login from "../../screens/Login";
import { Link, router } from "expo-router";
import tw from 'twrnc';
import dayjs from "dayjs";

const Home = () => {
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
            // .error("Error registering:", error);
         }
      }
      if(userInfo){
         fetchData()
      }
   },[userInfo])
   

   return (
      <ScrollView style={tw` bg-white`}>
         <View style={tw`flex-1 flex-col items-center gap-1 pt-4 px-3 `} className="flex-1 flex-col items-center space-y-1 pt-4 px-3 min-h-screen ">
            <Text style={tw` text-4xl font-extrabold text-[#6c63ff] my-6 `} className="text-4xl font-extrabold text-primary my-6 ">
               TicketPay
            </Text>

            <View style={tw` flex-row items-center bg-[#f0f3f5] rounded-[22px] w-full p-4 mb-4 mx-4 shadow-sm`} className=" flex-row items-center bg-[#f0f3f5] rounded-2xl w-full p-4 mb-4 mx-4 shadow-sm">
               <Image style={tw`mr-4`} className="mr-4" source={require("../../assets/julian-wan-unsplash-1.png")} />
               <View style={tw` flex-col justify-between `} className="flex-col justify-between">
                  <Text style={tw` font-bold text-2xl `} className=" font-bold text-2xl">{userInfo&&userInfo.user.name}</Text>
                  <Text style={tw` text-gray-500 `} className=" text-gray-500">Welcome back!</Text>
               </View>
            </View>

            <View style={tw` flex-row justify-between items-center bg-[#6c63ff] w-full p-[20px] mb-4 rounded-[22px] `} className="flex-row justify-between items-center bg-primary w-full p-4 mb-4 rounded-2xl ">
               <View style={tw`gap-1`} className=" space-y-1 ">
                  <Text style={tw`text-white/80 text-[20px] font-bold `} className="text-white/80 text-[20px] font-bold ">
                     Total in tickets
                  </Text>
                  <Text style={tw`text-white font-black text-[48px]`} className="text-white font-black text-[48px]">
                    {total}
                  </Text>
                  <Text style={tw`text-white/60
                  font-bold text-[20px]`} className="text-white/80 text-[20px]">RWF</Text>
               </View>

               <Link href={"./pay"}>
                  <View style={tw`flex-row justify-center items-center border-2 rounded-[50px] border-white w-24 h-24`} className=" flex-row justify-center items-center border-2 rounded-[50px] border-white w-24 h-24">
                     <Text style={tw`text-white text-lg font-extrabold`} className="text-white text-lg font-extrabold">Pay</Text>
                  </View>
               </Link>
               
            </View>

            <View style={tw` w-full flex-col rounded-3xl mt-4 `} className=" w-full flex-col rounded-3xl mt-4 ">
               <View style={tw`flex-row justify-between items-center mb-3 px-1`} className="flex-row justify-between items-center mb-3 px-4">
                  <Text style={tw`text-2xl font-bold`} className="text-2xl font-bold">Unpaid Tickets</Text>
                  <Link href={"./tickets"}>
                     <Feather
                        name="arrow-right-circle"
                        size={24}
                        color="black"
                     />
                  </Link>
               </View>

               <UnpaidTickets tickets={tickets} />
            </View>
         </View>

      </ScrollView>
   );
};

export default Home;
