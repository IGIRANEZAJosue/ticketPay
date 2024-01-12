import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView } from 'react-native';
import { PaperProvider } from 'react-native-paper';

import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';


export default function App() {


   return (
      <SafeAreaView className=" flex-1 bg-white">
         <StatusBar style="dark" />
         
         <ScrollView>
            <Home />
            <Login />
            <Signup />
         </ScrollView>

      </SafeAreaView>
  );
}


