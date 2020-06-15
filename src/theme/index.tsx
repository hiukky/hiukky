import React, { createContext } from 'react'
import { ThemeProvider as Theme, DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  colors: {
    dark: '#22252F',
    light: '#FFFFFF',
    blue: '#5DEAEA',
    yellow: '#FFC92F',
    green: '#5BF841',
    pink: '#EB48BD',
  },
}

const ThemeContext = createContext<DefaultTheme>(theme)

const ThemeProvider: React.FC = ({ children }) => (
  <Theme theme={theme}>{children}</Theme>
)

export { ThemeContext, ThemeProvider }
export * from './styles'
