import styled from "styled-components"
import Main from "./main"
import Works from "./works"
import Skills from "./skills"

const Container = styled.div``

const index = () => {
  return (
    <Container>
      <Main />
      <Works />
      <Skills />
    </Container>
  )
}

export default index
