import styled, { css } from "styled-components"

const Container = styled.div``

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
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

const Card = styled.div`
  max-width: 380px;
  min-width: 300px;
  height: 500px;
  background: #f5f5f5;
  border-radius: 8px;
  cursor: pointer;

  :hover {
    transform: scale(1.12);
    background: linear-gradient(red, pink);

    transition: all ease 2s 0s;
  }
`

const works = () => {
  return (
    <Container>
      <TitleContainer>
        <h2>
          Lastest <span>Project</span>
        </h2>
      </TitleContainer>
      <CardContainer>
        <Card>a</Card>
        <Card>a</Card>
        <Card>a</Card>
      </CardContainer>
    </Container>
  )
}

export default works
