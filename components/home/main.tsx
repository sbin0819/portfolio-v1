import styled from "styled-components"
import meSrc from "../../public/me.jpeg"
import Image from "next/image"
const Container = styled.div`
  height: calc(100vh - 252px);
  margin-top: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .job {
    color: #747474;
    font-size: 24px;
  }
  h1 {
    margin-top: 20px;
    color: #1f1f25;
    font-size: 40px;
  }
`

const Icon = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: #f5f5f5;
  img {
    border-radius: 50%;
  }
`

const Button = styled.button`
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.63px;
  text-transform: uppercase;
  padding: 23px 30px;
  box-shadow: rgb(3 3 3 / 12%) 0px 32px 54px;
  border-radius: 50rem;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  user-select: none;
  transform: perspective(1px) translateZ(0px);
  position: relative;
  overflow: hidden;
  border: none;
  white-space: nowrap;
  color: rgb(255, 255, 255);
  background-color: rgb(86, 179, 129);
  transition: all 0.4s ease-out 0s;
  outline: none !important;
`

const main = () => {
  return (
    <Container>
      <Icon>{/* <Image src={meSrc} width="150" height="150" /> */}</Icon>
      <h1>HI, I AM SUBIN</h1>
      <span>WEB DEVELOPER</span>
      <div style={{ marginTop: "30px" }}>
        <Button>LET'S TALK NOW</Button>
      </div>
    </Container>
  )
}

export default main
