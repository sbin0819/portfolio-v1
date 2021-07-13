import Link from "next/link"
import Image from "next/image"
import styled from "styled-components"

import { cardSrc } from "./images"

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

const Card = styled.div`
  position: relative;
  max-width: 380px;
  min-width: 300px;
  height: 500px;
  cursor: pointer;
  img {
    border-radius: 8px;
  }
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 100;
    border-radius: 8px;
  }

  :hover {
    transform: scale(1.12);
    transition: all ease 2s 0s;
    :before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      border-radius: 8px;
      background: linear-gradient(red, pink);
      opacity: 0.7;
      z-index: 200;
    }
  }
`

const CardContent = styled.div`
  position: relative;
  top: 45%;
  text-align: center;
  color: #fff;
  z-index: 300;
  font-size: 40px;
  p {
    color: #c6c9d8;
    font-size: 16px;
    padding: 0 0 15px;
  }
  h4 {
    font-size: 24px;
    line-height: 36px;
    padding: 0 0 15px;
  }
  a {
    padding: 0 23px;
    height: 40px;
    display: inline-flex;
    align-items: center;
    border: 2px solid #fff;
    border-radius: 4px;
    font-size: 14px;
    position: relative;
    color: #fff;
    letter-spacing: 0.2px;
    text-transform: uppercase;
    /* color: #f9004d; */
    :hover {
      background: #f9004d;
      border: 2px solid #f9004d;
    }
  }
`

const works = () => {
  console.log(cardSrc.c_01)
  return (
    <Container>
      <TitleContainer>
        <h2>
          Lastest <span>Works</span>
        </h2>
      </TitleContainer>
      <CardContainer>
        <Card>
          <CardContent>
            <p>Development</p>
            <h4>e-commerce</h4>
            <Link href="/works/1">VIEW DETAILS</Link>
          </CardContent>
          <Image
            src={`${cardSrc.c_01}`}
            layout="fill"
            objectFit="cover"
            quality="100"
          />
        </Card>
        <Card>
          <CardContent>
            <p>Development</p>
            <h4>Chatting App</h4>
            <Link href="/">VIEW DETAILS</Link>
          </CardContent>
          <Image
            src={`${cardSrc.c_02}`}
            layout="fill"
            objectFit="cover"
            quality="100"
          />
        </Card>
        <Card>
          <CardContent>
            <p>Development</p>
            <h4>GOOD AWESOME!</h4>
            <Link href="/">VIEW DETAILS</Link>
          </CardContent>
          <Image
            src={`${cardSrc.c_03}`}
            layout="fill"
            objectFit="cover"
            quality="100"
          />
        </Card>
      </CardContainer>
    </Container>
  )
}

export default works
