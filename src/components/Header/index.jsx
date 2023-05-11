import { Container, Profile, Logout } from "./styled"
import { RiShutDownLine } from "react-icons/ri"

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"
import { useAuth } from "../../hooks/auth"
import { api } from "../../services"
import { useNavigate } from "react-router-dom"

export function Header() {

  const { signOut, user } = useAuth()
  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
  const navigate = useNavigate()

  function handleSignOut() {
    navigate("/")
    signOut()
  }

  return (
    <Container>
      <Profile to="/profile">
        <img src={avatarURL} alt="user Photo" />

        <div className="welcome">
          <span>Bem vindo,</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout onClick={handleSignOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}