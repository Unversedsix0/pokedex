import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Favorites, Home } from "./src/screens";


export default function App() {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="My Favorites" component={Favorites} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
