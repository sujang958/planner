import { StackScreenProps } from "@react-navigation/stack"
import React, { useCallback, useRef, useState } from "react"
import { View, Text, TextInput, Pressable } from "react-native"
import { AuthContainers } from "../../styles/containers"
import { AuthTexts } from "../../styles/texts"

const SignUpScreen = ({
  navigation,
}: StackScreenProps<RootStackParam, "SignUp">) => {
  const [email, setEmail] = useState<string>("")
  const [id, setId] = useState<string>("")
  const [pw, setPw] = useState<string>("")
  const refs = {
    email: useRef<TextInput>(null),
    id: useRef<TextInput>(null),
    pw: useRef<TextInput>(null),
  }

  const handleSignUp = useCallback(() => {
    if (email.length === 0) {
      refs.email.current?.focus()
      return alert("Please put your email")
    } else if (id.length === 0) {
      refs.id.current?.focus()
      return alert("Please put your id")
    } else if (pw.length === 0) {
      refs.pw.current?.focus()
      return alert("Please put your password")
    }
    // Validate account
    // if account is validated
    navigation.navigate("EmailVerification", { email })
  }, [id, pw, email])

  return (
    <View style={AuthContainers.container}>
      <View style={AuthContainers.header}>
        <Text style={AuthTexts.title}>Sign Up</Text>
        <Text
          style={AuthTexts.description}
          onPress={() => navigation.navigate("Login")}
        >
          Already have an account? Log in
        </Text>
      </View>
      <View style={AuthContainers.body}>
        <View style={AuthContainers.InputContainer}>
          <Text style={AuthTexts.InputLabel}>E-mail</Text>
          <TextInput
            style={AuthContainers.Input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            ref={refs.email}
          />
        </View>
        <View style={AuthContainers.InputContainer}>
          <Text style={AuthTexts.InputLabel}>Id</Text>
          <TextInput
            style={AuthContainers.Input}
            value={id}
            onChangeText={setId}
            ref={refs.id}
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
            ref={refs.pw}
          />
        </View>
        <Pressable onPress={handleSignUp} style={AuthContainers.SubmitButton}>
          <Text style={AuthTexts.ButtonText}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default SignUpScreen
