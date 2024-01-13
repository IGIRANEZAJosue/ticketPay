import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import { useFonts } from 'expo-font';


import Home from './screens/Home';
import Login from './screens/Login';


export default function App() {

   const [loaded] = useFonts({
      Poppins: require("./assets/fonts/Poppins-Regular.ttf")
   })

   if (!loaded) {
      return null;
   }

   return (
      <SafeAreaView className=" flex-1 bg-white">
         <StatusBar style="auto" />
         
         <ScrollView>
            <Text style={{fontFamily: "Poppins"}} className="text-center mt-8">Hello</Text>
            <Home />
            <Login />
         </ScrollView>

      </SafeAreaView>
  );
}


