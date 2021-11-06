import React, { useState } from "react"
import { Text, TextInput, View } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { EmailVerificationContainers } from "../../styles/containers"
import { EmailVerificationTexts } from "../../styles/texts"

const EmailVerificationScreen = () => {
  const [code, setCode] = useState<string>("")

  return (
    <View style={EmailVerificationContainers.container}>
      <View style={EmailVerificationContainers.header}>
        <Ionicons name="mail-open-outline" size={240} />
      </View>
      <View style={EmailVerificationContainers.body}>
        <Text style={EmailVerificationTexts.title}>Verify your account</Text>
        <View>
          <TextInput
            style={EmailVerificationContainers.codeInput}
            onChangeText={setCode}
            value={code}
          />
        </View>
      </View>
    </View>
  )
}

export default EmailVerificationScreen
