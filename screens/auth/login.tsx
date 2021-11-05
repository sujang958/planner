import { StackScreenProps } from "@react-navigation/stack"
import React, {
  Dispatch,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react"
import {
  View,
  Text,
  TextInput,
  Pressable,
  GestureResponderEvent,
  ActivityIndicator,
} from "react-native"
import { AuthContainers } from "../../styles/containers"
import { AuthTexts } from "../../styles/texts"
import * as SecureStore from "expo-secure-store"
import { StackActions } from "@react-navigation/routers"
import AuthContext from "../../states/authContexts"
import { TouchableOpacity } from "react-native-gesture-handler"

const LoginScreen = ({
  navigation,
}: StackScreenProps<RootStackParam, "Login">) => {
  const [id, setId] = useState<string>("")
  const [pw, setPw] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const idRef = useRef<TextInput>(null)
  const pwRef = useRef<TextInput>(null)
  const { signIn } = useContext(AuthContext)
  const handleLogin = useCallback(
    (e: GestureResponderEvent) => {
      setLoading(true)
      e.preventDefault()
      if (id.length <= 0) {
        idRef.current?.focus()
        setLoading(false)
        return alert("Please put your id")
      }
      if (pw.length <= 0) {
        pwRef.current?.focus()
        setLoading(false)
        return alert("Please put password")
      }

      const token: string = "this-is-dummy-token"
      Promise.all([
        SecureStore.setItemAsync("logined", "1"),
        SecureStore.setItemAsync("token", token),
      ]).then(() => {
        signIn({ token })
      })
    },
    [id, pw]
  )

  if (!loading) <ActivityIndicator size="large" color="#000" />

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
