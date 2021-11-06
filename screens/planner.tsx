import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React from "react"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import HomeScreen from "./planner/home"

const Tab = createBottomTabNavigator<PlannerTabParam>()

const tabBarIconHash = {
  Home: (focused: boolean, size: number, color: string) => (
    <Ionicons
      name={focused ? "md-home" : "home-outline"}
      size={size}
      color={color}
    />
  ),
  Todo: (focused: boolean, size: number, color: string) => (
    <MaterialCommunityIcons
      name={focused ? "comment-check" : "comment-check-outline"}
      size={size}
      color={color}
    />
  ),
}

const Planner = () => {
  return (
    <Tab.Navigator
      defaultScreenOptions={{ headerShown: false }}
      screenOptions={({ route }) => ({
        tabBarIcon({ focused, color, size }) {
          return tabBarIconHash[route.name](focused, size, color)
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Todo" component={HomeScreen} />
    </Tab.Navigator>
  )
}

export default Planner
