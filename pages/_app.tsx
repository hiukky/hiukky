import React from 'react'
import NextApp from 'next/app'

import 'remixicon/fonts/remixicon.css'

import { Normalize, GlobalStyle, ThemeProvider } from 'theme'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Normalize />
        <GlobalStyle />
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    )
  }
}
