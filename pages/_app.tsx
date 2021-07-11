import type { AppProps } from "next/app"
import { GlobalStyle } from "@styles"
import { Header } from "../layouts"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
