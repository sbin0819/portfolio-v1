import styled, { css } from "styled-components"

const Container = styled.div``

const TitleContainer = styled.div`
  padding: 0 60px;
  color: #2b2b2b;
  font-size: 2.959rem;
  line-height: 1.11;
  span {
    display: inline-flex;
    align-items: center;
    height: 20px;
    background: #fed9ca;
  }
`

const CardContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 0 50px;
  margin-bottom: 300px;
  @media only screen and (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    gap: 80px;
  }
`

const skills = () => {
  return (
    <Container>
      <TitleContainer>
        <h2>Skills</h2>
      </TitleContainer>
      <CardContainer>a</CardContainer>
    </Container>
  )
}

export default skills
