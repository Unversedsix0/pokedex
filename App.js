import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Favorites, Home } from "./src/screens";


export default function App() {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarLabel: 'Pokedex',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
        />

        <Tab.Screen 
        name="Favorites" 
        component={Favorites} 
        options={{
          tabBarLabel: 'My Favorites',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart" color={color} size={26} />
          ),
        }}
  
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
