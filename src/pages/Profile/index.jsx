import { Container, Form, Avatar } from "./styled.js"
import { useNavigate } from "react-router-dom"

import { useState } from "react"
import { useAuth } from "../../hooks/auth.jsx"

import { api } from "../../services/index.js"
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function Profile() {
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [oldPassword, setOldPassword] = useState()
  const [newPassword, setNewPassword] = useState()

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  const [avatar, setAvatar] = useState(avatarURL)
  const [avatarFile, setAvatarFile] = useState(null)

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  async function handleUpdate() {

    const updated = {
      name,
      email,
      password: newPassword,
      old_password: oldPassword
    }

    const userUpdated = Object.assign(user, updated)

    await updateProfile({ user: userUpdated, avatarFile })
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const avatarPreview = URL.createObjectURL(file)  // URL.createObjectURL - used for provide a link that can show files directly on screen
    setAvatar(avatarPreview)

  }

  return (

    <Container>

      <header>
        <button type="button" onClick={handleBack}>
          <FiArrowLeft />

        </button>
      </header>

      <Form>

        <Avatar>
          <img
            src={avatar}
            alt="Foto do usuário"
          />
          <label htmlFor="avatar">
            <FiCamera />

            <input
              id="avatar"
              type="file"
              onChange={handleChangeAvatar}
            />
          </label>
        </Avatar>

        <Input
          icon={FiUser}
          value={name}
          type="text"
          placeholder="Nome"
          onChange={e => setName(e.target.value)}
        />

        <Input
          icon={FiMail}
          value={email}
          type="text"
          placeholder="E-mail"
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          icon={FiLock}
          type="password"
          placeholder="Senha atual"
          onChange={e => setOldPassword(e.target.value)}
        />

        <Input
          icon={FiLock}
          type="password"
          placeholder="Nova senha"
          onChange={e => setNewPassword(e.target.value)}
        />

        <Button title="Salvar" onClick={handleUpdate} />

      </Form>


    </Container>
  )

}