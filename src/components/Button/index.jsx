import { Container } from "./styled"

// Button(props) - set a property for the element - {title} unstructured from props.title
export function Button({ onClick, title, loading = false, ...rest }) {

  return (
    //props.title - specifies the property that was passed
    <Container
      type="button"
      disabled={loading}
      onClick={onClick}
      {...rest}
    >
      {loading ? "Carregando ..." : title}
    </Container>

  )
}