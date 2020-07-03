import 'styled-components'

declare module 'styled-components' {
  export type TColors = dark | light | blue | yellow | pink | green
  export interface DefaultTheme {
    colors: {
      [C in TColors]: string
    }

    fonts: {
      mark: string
      hammer: string
      numans: string
    }
  }
}
