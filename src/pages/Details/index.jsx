import { Container, Links } from "./styled"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"

// all components must be written with a capital letter
export function Details() {
  // A component only returns a single element (can be a single element with many other inside)
  return (
    // components properties: can set different properties for the same component
    <Container>
      <Header />

      <Section title="Links Úteis">
        <Links>
          <li>Item 1</li>
          <li>Item 3</li>
        </Links>
      </Section>

      <Button title="Voltar" loading={false} />

    </Container>
  )
}

