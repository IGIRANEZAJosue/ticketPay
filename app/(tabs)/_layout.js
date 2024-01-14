import { Tabs } from "expo-router";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

export default () => {
   return (
      <Tabs>
         <Tabs.Screen
            name="home"
            options={{
               tabBarIcon: ({ color }) => (
                  <Octicons name="home" size={24} color={color} />
               ),

               tabBarLabel: "Home",
            }}
         />
         <Tabs.Screen
            name="login"
            options={{
               tabBarIcon: ({ color }) => (
                  <Octicons name="person" size={24} color={color} />
               ),
               tabBarLabel: "Profile",
            }}
         />
      </Tabs>
   );
};
