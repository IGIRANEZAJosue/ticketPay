import { useEffect } from "react";
import { initDatabase } from "./database";
const { Stack } = require("expo-router");

const StackLayout = () => {
   const [user, setUser] = useState(null);

   useEffect(() => {
      const fetchUserAndRedirect = async () => {
         const user = await fetchUserData();
         setUser(user);

         if (user) {
            navigation.navigate("Home");
         }
      };

      fetchUserAndRedirect();
   }, []);

   return (
      <Stack>
         
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        
            <Stack.Screen name="index" />
        
      </Stack>
   );
};
