import { StyleSheet } from "react-native"

export const AuthContainers = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
  },
  header: {
    flex: 2,
    marginTop: 48,
    marginHorizontal: 20,
  },
  body: {
    flex: 8,
    marginTop: -22,
  },
  InputContainer: {
    marginHorizontal: 20,
    marginVertical: 5,
  },
  Input: {
    borderColor: "#000",
    borderWidth: 2.5,
    borderRadius: 10,
    padding: 7,
    fontSize: 16,
    paddingHorizontal: 12,
  },
  SubmitButton: {
    backgroundColor: "#000",
    paddingVertical: 20,
    marginTop: 38,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginHorizontal: 10,
  },
})
