import { Container, Links, Content } from "./styled"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"

import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

import { api } from "../../services"

// all components must be written with a capital letter
export function Details() {
  // A component only returns a single element (can be a single element with many other inside)

  const [data, setData] = useState(null)
  const params = useParams()

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  function handleLinkTreatment(link) {
    const linkIncluded = link.includes("https://")

    if (linkIncluded) {
      return link
    }
    else {
      return `https://${link}`
    }
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente excluir esta nota?")

    if (confirm) {
      await api.delete(`/notes/${params.id}`)
      navigate(-1)
    }

  }

  useEffect(() => {

    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)


    }
    fetchNote()

  }, [])


  return (
    // components properties: can set different properties for the same component
    <Container>
      <Header />

      {
        // the data content may took some time to load after the page reload.
        // so, to ensure the content will load with the page, the data might be called with "data &&", or else it will bring a null value within data state
        data &&
        <main>
          <Content>
            <ButtonText
              title="Excluir nota"
              onClick={handleRemove}
            />

            <h1>{data.title}</h1>
            <p>{data.description}</p>

            {
              data.links &&
              <Section title="Links Úteis">
                <Links>
                  {
                    data.links.map(link => (

                      <li key={String(link.id)}>
                        <a href={link.url}
                          target="_blank">{link.url}
                        </a>
                      </li>

                    ))

                  }
                </Links>
              </Section>
            }

            {
              data.tags &&
              <Section title="Marcadores">
                {
                  data.tags.map(tag => (
                    <Tag
                      key={String(tag.id)}
                      title={tag.name}
                    />

                  ))
                }
              </Section>
            }

            <Button
              title="Voltar"
              loading={false}
              onClick={handleBack}
            />
          </Content>
        </main>
      }

    </Container>
  )
}

