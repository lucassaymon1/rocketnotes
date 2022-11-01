import { Container } from "./styled"

// as a button, this component will have to receive a lot of properties
export function ButtonText({ title, ...rest }) {
  return (
    <Container
      type="button"
      {...rest}
    >
      {title}
    </Container>
  )
}