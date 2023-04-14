import { useState } from "react"

import { Container, Form, Background } from "./styled.js"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

import { Link, useNavigate } from "react-router-dom"
import { FiMail, FiLock, FiUser } from "react-icons/fi"

import { api } from "../../services/index"

export function SignUp() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()
  // used to redirect the user along the routes

  function handleSignUp() {

    if (!name || !email || !password) {
      return alert("não foi possivel realizar o cadastro")
    }

    api.post("/users", { name, email, password })
      .then(() => {
        alert("usuário cadastrado com sucesso!")
        navigate("/")

      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message)
        }
        else {
          alert("Não foi possível realizar o cadastro do usuário")
        }
      })

  }

  return (
    <Container>
      <Background />

      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>

        <h2>Crie sua conta</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={e => setName(e.target.value)}

        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />

        <Button title="Cadastrar" onClick={handleSignUp} />

        <Link to="/">Voltar para o login</Link>

      </Form>

    </Container>
  )
}