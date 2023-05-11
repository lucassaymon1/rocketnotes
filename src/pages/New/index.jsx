import { Container, Form } from "./styled.js"
import { Link, useNavigate } from "react-router-dom"
import { api } from "../../services/index.js"

import { useState } from "react"

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"
import { Textarea } from "../../components/Textarea"
import { NoteItem } from "../../components/NoteItem"
import { ButtonText } from "../../components/ButtonText"

export function New() {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState("")

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  function handleAddLink() {
    setLinks(prevState => [...prevState, newLink])
    setNewLink("")

  }

  function handleRemoveLink(deleted) {
    setLinks(prevState => prevState.filter(link => link !== deleted))
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewNote() {

    if (!title) {
      return (alert("Adicione um título a nova nota"))
    }

    if (newLink) {
      return (alert("lembre-se de adicionar ou remover o conteúdo no campo de links antes de salvar a nova nota"))
    }
    if (newTag) {
      return (alert("lembre-se de adicionar ou remover o conteúdo no campo de tags antes de salvar a nova nota"))
    }

    await api.post("/notes", {
      title,
      description,
      tags,
      links
    })

    alert("Nota cadastrada com sucesso!")
    navigate(-1)
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <ButtonText title="voltar" onClick={handleBack} />
          </header>

          <Input
            placeholder="Título"
            onChange={e => setTitle(e.target.value)}
          />
          <Textarea
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
          />

          <Section title="Links úteis">
            <NoteItem
              isNew
              placeholder="Novo link"
              onChange={e => setNewLink(e.target.value)}
              value={newLink}
              onClick={handleAddLink}
            />

            {
              links.map((link, index) => (

                <NoteItem
                  value={link}
                  key={String(index)}
                  onClick={() => handleRemoveLink(link)}
                />
              ))
            }
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem
                isNew
                placeholder="Nova tag"
                value={newTag}
                onChange={e => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />

              {
                tags.map((tag, index) => (

                  <NoteItem
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                    key={String(index)}
                  />

                ))
              }


            </div>
          </Section>
          <Button
            title="Salvar"
            onClick={handleNewNote}
          />
        </Form>

      </main>
    </Container>
  )
}