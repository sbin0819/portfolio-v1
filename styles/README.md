## 반응형 예시

```js
const MainWrap = styled.main`
  width: 1200px;

  @media ${props => props.theme.table} {
    width: 100%;
    margin: 0 auto;
  }
`

// 색상
const MainText = styled.div`
  color: ${props => props.theme.mainColor};
`
