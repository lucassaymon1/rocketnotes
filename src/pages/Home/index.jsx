import { Container, Brand, Menu, Search, Content, NewNote } from "./styled"
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { Section } from "../../components/Section"
import { Note } from "../../components/Note"

import { api } from "../../services"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { FiPlus, FiSearch } from "react-icons/fi"



export function Home() {

  const [tags, setTags] = useState([])
  const [tagsSelected, setTagsSelected] = useState([])

  const [notes, setNotes] = useState([])
  const [search, setSearch] = useState("")

  const allSelected = true
  const navigate = useNavigate()

  function handleTagsSelected(tagName, allTagsSelected) {
    const alreadySelected = tagsSelected.includes(tagName)

    if (allTagsSelected) {
      return setTagsSelected([])
    }
    if (alreadySelected) {
      const removedSelected = tagsSelected.filter(tag => tag !== tagName)
      setTagsSelected(removedSelected)
    }
    else {
      setTagsSelected(prevState => [...prevState, tagName])

    }

  }

  async function handleNoteDetails(id) {
    navigate(`/details/${id}`)
  }

  useEffect(() => {

    async function fetchTags() {
      const response = await api.get("/tags")
      setTags(response.data)
    }

    fetchTags()

  }, [])

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`)
      setNotes(response.data)

      const res = await api.get(`/notes/7`)

    }

    fetchNotes()

  }, [search, tagsSelected])

  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText
            title="Todos"
            isActive={tagsSelected.length === 0}
            onClick={() => handleTagsSelected("all", allSelected)}
          />
        </li>
        {
          tags && tags.map(tag => (
            <li key={String(tag.id)}>

              <ButtonText
                title={tag.name}
                onClick={() => handleTagsSelected(tag.name)}
                isActive={tagsSelected.includes(tag.name)}
              />
            </li>
          ))
        }

      </Menu>

      <Search>
        <Input
          placeholder="Pesquisar pelo título"
          icon={FiSearch}
          onChange={e => setSearch(e.target.value)}
        />
      </Search>

      <Content>
        <Section title="Minhas notas">
          {

            notes.map(note => (
              <Note
                data={note}
                key={String(note.id)}
                onClick={() => handleNoteDetails(String(note.id))}
              />
            ))


          }

        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>

    </Container>
  )
}