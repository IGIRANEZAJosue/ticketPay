import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView } from 'react-native';
import { PaperProvider } from 'react-native-paper';

import Home from './screens/Home';
import Login from './screens/Login';


export default function App() {


   return (
      <SafeAreaView className=" flex-1 bg-white">
         <StatusBar style="auto" />
         
         <ScrollView>
            <Home />
            <Login />
         </ScrollView>

      </SafeAreaView>
  );
}


