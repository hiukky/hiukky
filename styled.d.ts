import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      dark: string
      light: string
      blue: string
      yellow: string
      pink: string
      green: string
    }

    fonts: {
      mark: string
      hammer: string
      numans: string
    }
  }
}
