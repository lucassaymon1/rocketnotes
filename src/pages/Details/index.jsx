import { Container, Links, Content } from "./styled"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"

// all components must be written with a capital letter
export function Details() {
  // A component only returns a single element (can be a single element with many other inside)
  return (
    // components properties: can set different properties for the same component
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introdução ao React</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam architecto optio repudiandae blanditiis aspernatur modi consequuntur eum accusantium, porro nulla odio illum ab fugit! Ad veniam aut tempora? Officia, ab!</p>

          <Section title="Links Úteis">
            <Links>
              <li><a href="#">https://www.rocketseat.com.br/</a></li>
              <li><a href="#">https://www.rocketseat.com.br/</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>

          <Button title="Voltar" loading={false} />
        </Content>
      </main>

    </Container>
  )
}

