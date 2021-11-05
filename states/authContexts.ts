import { createContext } from "react"

const AuthContext = createContext<AuthContextType>({
  async signIn(data) {},
  async signUp(data) {},
  signOut: () => {},
})

export default AuthContext
