import styled from "styled-components"

const Container = styled.div`
  margin-top: 150px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 90px;
  .title {
    h1 {
      font-size: 100px;
    }
    p {
      margin-top: 40px;
      line-height: 25px;
      font-size: 18px;
      color: #747474;
      text-align: left;
    }
  }
`

const index = () => {
  return (
    <Container>
      <div className="title">
        <h1>Hello :)</h1>
        <p>
          안녕하세요 프론트엔드 개발자 하수빈입니다. <br />
          포트폴리오에 방문해주셔서 감사합니다.
        </p>
      </div>
    </Container>
  )
}

export default index
