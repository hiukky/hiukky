import React, { createContext } from 'react'
import { ThemeProvider as Theme, DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  colors: {
    dark: '#0d1117',
    light: '#FFFFFF',
    blue: '#5DEAEA',
    yellow: '#FCEC0C',
    green: '#23d18c',
    pink: '#EB48BD',
  },
  fonts: {
    mark: "'Marck Script', cursive",
    hammer: "'Hammersmith One', sans-serif",
    numans: "'Numans', sans-serif",
  },
}

const ThemeContext = createContext<DefaultTheme>(theme)

const ThemeProvider: React.FC = ({ children }) => (
  <Theme theme={theme}>{children}</Theme>
)

export { ThemeContext, ThemeProvider }
export * from './styles'
