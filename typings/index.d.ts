type RootStackParam = {
  Login: undefined
  SignUp: undefined
  Planner: undefined
}

type PlannerTabParam = {
  Home: undefined
}

type AuthReducerState = {
  isLoading: boolean
  isSignout: boolean
  userToken: string | null
}

type AuthReducerActions =
  | { type: "SIGN_IN" | "RESTORE_TOKEN"; token: string }
  | { type: "SIGN_OUT" }
