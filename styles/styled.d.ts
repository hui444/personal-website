import 'styled-components'

type hexCode = `#${string}`
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      blue: {
        100: hexCode
        300: hexCode
        400: hexCode
      }
      accent: {
        yellow: hexCode
        red: hexCode
      }
    }
    fonts: string[]
    fontSizes: {
      small: string
      medium: string
      large: string
    }
  }
}
