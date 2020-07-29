import React from "react"
import SiteBanner from "../component/SiteBanner"

import { createGlobalStyle } from "styled-components"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <header></header>
      <GlobalStyle />
      <main>
        <SiteBanner />
      </main>
      <footer></footer>
    </React.Fragment>
  )
}
const GlobalStyle = createGlobalStyle`
  body {
   margin:0px;
  }
`

export default Layout
