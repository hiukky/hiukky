import React from 'react'
import NextApp from 'next/app'
import FullScreen from 'react-full-screen'

import 'remixicon/fonts/remixicon.css'

import { Normalize, GlobalStyle, ThemeProvider } from 'theme'

export default class App extends NextApp {
  state = {
    fullScreen: false,
  }

  componentDidUpdate() {
    if (window.innerWidth <= 1140 && !this.state.fullScreen) {
      this.setState({ fullScreen: true })
    }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <FullScreen enabled={this.state.fullScreen}>
        <Normalize />
        <GlobalStyle />
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </FullScreen>
    )
  }
}
