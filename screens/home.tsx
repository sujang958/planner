import React, { useContext } from "react"
import { Text, View } from "react-native"
import AuthContext from "../states/authContexts"

const HomeScreen = () => {
  const authContext = useContext(AuthContext)
  return (
    <View>
      <Text onPress={() => authContext.signOut()}>logout</Text>
    </View>
  )
}

export default HomeScreen
