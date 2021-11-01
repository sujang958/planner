import { StackScreenProps } from "@react-navigation/stack"
import React, { useState } from "react"
import { View, Text, TextInput, Pressable } from "react-native"
import { AuthContainers } from "../../styles/containers"
import { AuthTexts } from "../../styles/texts"

const SignUpScreen = ({
  navigation,
}: StackScreenProps<RootStackParam, "SignUp">) => {
  const [id, setId] = useState<string>("")
  const [pw, setPw] = useState<string>("")

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
            value={id}
            onChangeText={setId}
            keyboardType="email-address"
          />
        </View>
        <View style={AuthContainers.InputContainer}>
          <Text style={AuthTexts.InputLabel}>Id</Text>
          <TextInput
            style={AuthContainers.Input}
            value={id}
            onChangeText={setId}
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
          />
        </View>
        <Pressable style={AuthContainers.SubmitButton}>
          <Text style={AuthTexts.ButtonText}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default SignUpScreen
