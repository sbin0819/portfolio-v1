/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
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

    :hover {
      color: #2a2b2a;
      transition-property: right;
      transition-duration: 0.4s;
      transition-timing-function: ease-out;
      a {
        display: inline-flex;
        align-items: center;
        height: 20px;
        /* background: #fed9ca; */
        ::before {
          content: "";
          background-color: #fed9ca;
          position: absolute;
          left: 0;
          right: 100%;
          bottom: 1.6rem;
          z-index: -1;
          height: 2.5rem;
          transition-property: right;
          transition-duration: 0.4s;
          transition-timing-function: ease-out;
        }
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
