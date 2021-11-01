import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { StatusBar } from "expo-status-bar"
import React, { useCallback, useEffect, useReducer, useState } from "react"
import { ActivityIndicator, StyleSheet, Text, View } from "react-native"
import "react-native-gesture-handler"
import * as SecureStore from "expo-secure-store"
import LoginScreen from "./screens/auth/login"
import { useFonts } from "expo-font"
import SignUpScreen from "./screens/auth/signup"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons } from "@expo/vector-icons"

const Stack = createStackNavigator<RootStackParam>()
const Tab = createBottomTabNavigator<PlannerTabParam>()

const tabBarIconHash = {
  Home: (focused: boolean) => (focused ? "home" : "home-outline"),
}

const Planner = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon({ focused, color, size }) {
          return <Ionicons name={tabBarIconHash[route.name](focused)} />
        },
      })}
    >
      <Tab.Screen name="Home" component={() => <Text>hi</Text>} />
    </Tab.Navigator>
  )
}

export default function App() {
  const [state, dispatch] = useReducer(
    (prevState: AuthReducerState, action: AuthReducerActions) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          }
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          }
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          }
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  )
  const [fontsLoaded] = useFonts({
    "NotoSans-Bold": require("./assets/fonts/NotoSans-Bold.ttf"),
  })
  const getLoginState = useCallback(async () => {
    const loginState = await SecureStore.getItemAsync("logined")
    if (loginState) {
      // Check the token expired
      // if token expired
      dispatch({ type: "RESTORE_TOKEN", token: String(loginState) })
    }
  }, [])

  useEffect(() => {
    getLoginState()
  }, [])

  if (state.isLoading || !fontsLoaded)
    return <ActivityIndicator size="large" color="#000" />

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {state.userToken !== null ? (
          <Stack.Screen name="Planner" component={Planner} />
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
