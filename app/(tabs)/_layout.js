import { Tabs } from "expo-router";
import {
   Octicons,
   AntDesign,
   FontAwesome,
   FontAwesome5,
   Ionicons,
   MaterialCommunityIcons,
} from "@expo/vector-icons";

export default () => {
   return (
      <Tabs>
         <Tabs.Screen
            name="home"
            options={{
               headerShown:false,
               tabBarIcon: ({ color, focused }) => (
                  <Octicons
                     name={focused ? "home" : "home"}
                     size={26}
                     color={color}
                  />
               ),

               tabBarLabel: "Home",
               tabBarActiveTintColor: "#6c63ff",
            }}
         />

         <Tabs.Screen
            name="tickets"
            options={{
               headerShown:false,
               tabBarIcon: ({ color, focused }) => (
                  <MaterialCommunityIcons
                     name={
                        focused
                           ? "ticket-confirmation"
                           : "ticket-confirmation-outline"
                     }
                     size={28}
                     color={color}
                  />
               ),
               tabBarLabel: "Tickets",
               tabBarActiveTintColor: "#6c63ff",
            }}
         />

         <Tabs.Screen
            name="pay"
            options={{
               headerShown:false,
               tabBarIcon: ({ color, focused }) => (
                  <FontAwesome
                     name={
                        focused
                           ? "credit-card-alt"
                           : "credit-card"
                     }
                     size={26}
                     color={color}
                  />
               ),
               tabBarLabel: "Pay",
               tabBarActiveTintColor: "#6c63ff",
            }}
         />

         <Tabs.Screen
            name="login"
            options={{
               headerShown:false,
               tabBarIcon: ({ color, focused }) => (
                  <FontAwesome5
                     name={focused ? "user-alt" : "user"}
                     size={26}
                     color={color}
                  />
               ),
               tabBarLabel: "Profile",
               tabBarActiveTintColor: "#6c63ff",
            }}
         />
      </Tabs>
   );
};