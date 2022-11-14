import { Container, Profile, Logout } from "./styled"
import { RiShutDownLine } from "react-icons/ri"

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/lucassaymon1.png" alt="user Photo" />

        <div className="welcome">
          <span>Bem vindo,</span>
          <strong>Lucas Saymon</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}