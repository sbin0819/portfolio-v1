/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react"
import styled from "styled-components"
import { AiOutlineMenu } from "react-icons/ai"
import Menu from "./Menu"

const Container = styled.div`
  padding: 26px 35px;
  display: flex;
  justify-content: space-between;
  font-size: 0.81rem;
  padding: 1.56rem 4.75rem;
  line-height: 1.23;

  .logo {
    cursor: pointer;
  }

  .menu {
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 5px;
  }
`
const index = () => {
  const [isOpen, setIsOpen] = useState(false)
  const onClose = () => {
    setIsOpen(false)
  }
  return (
    <Container>
      <div className="logo">SUBI PORTFOLIO</div>
      <div>
        <div className="menu" onClick={() => setIsOpen(true)}>
          <div>MENU</div>
          <div>
            <AiOutlineMenu />
          </div>
        </div>
      </div>
      {isOpen && <Menu onClose={onClose} />}
    </Container>
  )
}

export default index
