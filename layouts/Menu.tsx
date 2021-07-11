import styled from "styled-components"
import Link from "next/link"

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  /* background: rgba(0, 0, 0, 1); */
  background: #fff;
  transition: 0.3s linear;
`

const NavContainer = styled.div`
  margin-top: 100px;
  padding-right: 90px;
  li {
    text-align: right;
    font-size: 100px;
    font-weight: bold;
    color: #c5c5c5;
    cursor: pointer;
    transition-duration: 0.4s;
    :hover {
      color: #2a2b2a;
      a {
        display: inline-flex;
        align-items: center;
        height: 20px;
        background: #fed9ca;
      }
    }
  }
`

interface Iprops {
  onClose: any
}

const Menu = ({ onClose }: Iprops) => {
  return (
    <Container>
      <NavContainer>
        <li onClick={onClose}>
          <Link href="/">Home</Link>
        </li>
        <li onClick={onClose}>
          <Link href="/about">About</Link>
        </li>
        <li onClick={onClose}>
          <Link href="/">Works</Link>
        </li>
        <li onClick={onClose}>
          <Link href="/">Blog</Link>
        </li>
        <li onClick={onClose}>
          <Link href="/">Contacts</Link>
        </li>
      </NavContainer>
    </Container>
  )
}

export default Menu
