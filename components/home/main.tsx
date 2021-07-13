import Link from "next/link"
import router from "next/router"
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
  position: relative;
  overflow: hidden;
  border: none;
  white-space: nowrap;
  color: rgb(255, 255, 255);
  background-color: rgb(86, 179, 129);

  outline: none !important;
  cursor: pointer;
  :hover {
  }
`

const Test = styled.div`
  a {
    display: block;
    width: 200px;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    font-family: sans-serif;
    text-decoration: none;
    color: #333;
    border: 2px solid rgb(86, 179, 129);
    letter-spacing: 2px;
    text-align: center;
    position: relative;
    transition: all 0.35s;
  }

  a span {
    position: relative;
    z-index: 2;
  }

  a:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: rgb(86, 179, 129);
    transition: all 0.35s;
  }

  a:hover {
    color: #fff;
  }

  a:hover:after {
    width: 100%;
  }
`

const main = () => {
  return (
    <Container>
      <Icon>{/* <Image src={meSrc} width="150" height="150" /> */}</Icon>
      <h1>HI, I AM SUBIN</h1>
      <span>WEB DEVELOPER</span>
      <div style={{ marginTop: "30px" }}>
        <Button onClick={() => router.push("/contacts")}>LET'S TALK NOW</Button>
      </div>
      {/* <Test>
        <div className="wrapper">
          <Link href="/">
            <a>
              <span>LET'S TALK NOW</span>
            </a>
          </Link>
        </div>
      </Test> */}
    </Container>
  )
}

export default main
