import { StackScreenProps } from "@react-navigation/stack"
import React, { useCallback, useRef, useState } from "react"
import {
  View,
  Text,
  TextInput,
  Pressable,
  GestureResponderEvent,
} from "react-native"
import { AuthContainers } from "../../styles/containers"
import { AuthTexts } from "../../styles/texts"
import * as SecureStore from "expo-secure-store"
import { StackActions } from "@react-navigation/routers"

const LoginScreen = ({
  navigation,
}: StackScreenProps<RootStackParam, "Login">) => {
  const [id, setId] = useState<string>("")
  const [pw, setPw] = useState<string>("")
  const idRef = useRef<TextInput>(null)
  const pwRef = useRef<TextInput>(null)
  const handleLogin = useCallback(
    (e: GestureResponderEvent) => {
      e.preventDefault()
      if (id.length <= 0) {
        idRef.current?.focus()
        return alert("Please put your id")
      }
      if (pw.length <= 0) {
        pwRef.current?.focus()
        return alert("Please put password")
      }
      Promise.all([
        SecureStore.setItemAsync("logined", "1"),
        SecureStore.setItemAsync("token", "this-is-dummy-token"),
      ]).then(() => {
        navigation.dispatch(StackActions.pop())
      })
    },
    [id, pw]
  )

  return (
    <View style={AuthContainers.container}>
      <View style={AuthContainers.header}>
        <Text style={AuthTexts.title}>Log in</Text>
        <Text
          style={AuthTexts.description}
          onPress={() => navigation.navigate("SignUp")}
        >
          Don't have an account? Sign up
        </Text>
      </View>
      <View style={AuthContainers.body}>
        <View style={AuthContainers.InputContainer}>
          <Text style={AuthTexts.InputLabel}>Id</Text>
          <TextInput
            style={AuthContainers.Input}
            value={id}
            onChangeText={setId}
            ref={idRef}
          />
        </View>
        <View style={AuthContainers.InputContainer}>
          <Text style={AuthTexts.InputLabel}>Password</Text>
          <TextInput
            style={AuthContainers.Input}
            textContentType="password"
            secureTextEntry={true}
            value={pw}
            onChangeText={setPw}
            ref={pwRef}
          />
        </View>
        <Pressable onPress={handleLogin} style={AuthContainers.SubmitButton}>
          <Text style={AuthTexts.ButtonText}>Log in</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default LoginScreen
