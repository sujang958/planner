type RootStackParam = {
  Login: undefined
  SignUp: undefined
  EmailVerification: { email: string }
  Planner: undefined
}

type PlannerTabParam = {
  Home: undefined
  Todo: undefined
}

type AuthReducerState = {
  isLoading: boolean
  isSignout: boolean
  userToken: string | null
}

type AuthContextType = AuthReducerDoActions

interface AuthReducerDoActions {
  signIn: (data: { token: string }) => Promise<void>
  signOut: () => void
  signUp: (data: {
    id: string
    email: string
    password: string
  }) => Promise<void>
}

type AuthReducerActions =
  | { type: "SIGN_IN" | "RESTORE_TOKEN"; token: string }
  | { type: "SIGN_OUT" }
