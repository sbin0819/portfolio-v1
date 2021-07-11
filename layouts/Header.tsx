import styled from "styled-components"
import { AiOutlineMenu } from "react-icons/ai"

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
  return (
    <Container>
      <div className="logo">SUBI PORTFOLIO</div>
      <div>
        <div className="menu">
          <div>MENU</div>
          <div>
            <AiOutlineMenu />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default index
