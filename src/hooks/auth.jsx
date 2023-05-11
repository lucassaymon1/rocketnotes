import { createContext, useContext, useState, useEffect } from "react"

import { api } from "../services/index"


const AuthContext = createContext({})

function AuthProvider({ children }) {

  const [data, setData] = useState({})

  function signOut() {

    localStorage.removeItem("@rocketnotes:user")
    localStorage.removeItem("@rocketnotes:token")

    setData({})

  }

  async function signIn({ email, password }) {

    try {
      const response = await api.post("/sessions", { email, password })
      const { user, token } = response.data
      setData({ user, token })

      localStorage.setItem("@rocketnotes:user", JSON.stringify(user))
      localStorage.setItem("@rocketnotes:token", token)

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`
      // will pass the token through all api requests by default

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      }
      else {
        alert("não foi possível efetuar o login")
      }
    }

  }

  async function updateProfile({ user, avatarFile }) {

    try {

      if (avatarFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append("avatar", avatarFile)

        const response = await api.patch("users/avatar", fileUploadForm)
        user.avatar = response.data.avatar

      }


      await api.put("/users", user)
      localStorage.setItem("@rocketnotes:user", JSON.stringify(user))

      setData({ user, token: data.token })
      alert("Perfil atualizado com sucesso!")

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      }
      else {
        alert("não foi possível efetuar alterações")
      }
    }

  }

  useEffect(() => {

    const user = localStorage.getItem("@rocketnotes:user")
    const token = localStorage.getItem("@rocketnotes:token")

    api.defaults.headers.common["Authorization"] = `Bearer ${token}`

    if (user && token) {
      setData({
        user: JSON.parse(user),
        token
      })
    }

  }, [])

  return (
    /* data that will be shared with the app in general */
    <AuthContext.Provider value={
      {
        signIn,
        signOut,
        updateProfile,
        user: data.user
      }
    }>

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