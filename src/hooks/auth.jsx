import { createContext, useContext } from "react"

import { api } from "../services/index"

const AuthContext = createContext({})

function AuthProvider({ children }) {

  async function signIn({ email, password }) {

    try {
      const response = await api.post("/sessions", { email, password })

      const { user, token } = response.data
    }
    catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      }
      else {
        alert("não foi possível efetuar o login")
      }
    }

  }

  return (
    <AuthContext.Provider value={{ signIn }}>
      {children}
    </AuthContext.Provider>
    /* context.Provider provides a default value to be used when is requested */
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }