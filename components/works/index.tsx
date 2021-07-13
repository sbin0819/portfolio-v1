import Image from "next/image"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  margin-top: 100px;
  padding: 0 40px;
  gap: 40px;
  @media only screen and (max-width: 800px) {
    display: block;
    padding: 0 20px;
  }
`

const ImageContainer = styled.div`
  flex: 1.2;
  div {
    margin-bottom: 30px;
    height: 300px;
    background: #f5f5f5;
    @media only screen and (max-width: 800px) {
      height: 250px;
    }
  }
`

const ContentContainer = styled.div`
  flex: 1;
  h5 {
    font-family: Ubuntu-Bold, sans-serif;
    color: #2b2b2b;
    font-size: 25px;
    font-weight: bold;
    padding-bottom: 15px;
  }
  .description {
    color: #747474;
    line-height: 1.75;
    font-size: 1rem;
    ::selection {
      background: #fed9ca;
    }
  }
`

const ContentHeader = styled.div`
  color: #2b2b2b;
  .date {
    color: #2b2b2b;
    margin-bottom: 15px;
    font-size: 18px;
    b {
      font-weight: bold;
      font-size: 24px;
    }
  }
  .title {
    margin-bottom: 25px;
    font-size: 54px;
    font-weight: bold;
    ::selection {
      background: #fed9ca;
    }
  }
`

const IdeaContainer = styled.div`
  margin-top: 50px;
`

const ProductFeatures = styled.div`
  margin-top: 50px;
  ul {
    margin-left: 1.3rem;
    color: #747474;
    line-height: 30px;
  }
  li {
    ::selection {
      background: #fed9ca;
    }
  }
`

const index = () => {
  return (
    <Container>
      <ImageContainer>
        <div></div>
        <div></div>
        <div></div>
      </ImageContainer>
      <ContentContainer>
        <ContentHeader>
          <p className="date">
            <b>13</b> July, 2021
          </p>
          <h1 className="title">e-commerce</h1>
          <div className="description">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa.
          </div>
        </ContentHeader>
        <IdeaContainer>
          <h5>Idea</h5>
          <div className="description">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate. At
            vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa.
          </div>
        </IdeaContainer>
        <ProductFeatures>
          <h5>Product features</h5>
          <ul>
            <li>At vero eos et accusamus</li>
            <li>At vero eos et accusamus</li>
            <li>At vero eos et accusamus</li>
            <li>At vero eos et accusamus</li>
            <li>At vero eos et accusamus</li>
          </ul>
        </ProductFeatures>
      </ContentContainer>
    </Container>
  )
}

export default index
