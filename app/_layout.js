import "../global.css"


const { Stack } = require("expo-router")

const StackLayout = () => {
   return (
      <Stack>
         <Stack.Screen name="(tabs)" />
      </Stack>
   )
}