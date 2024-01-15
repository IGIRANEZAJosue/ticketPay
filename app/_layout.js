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
         {user ? (
            <Stack.Screen name="(tabs)" />
         ) : (
            <Stack.Screen name="index" />
         )}
      </Stack>
   );
};
