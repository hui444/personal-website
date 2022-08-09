import 'styled-components'

type hexCode = `#${string}`
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      pageBackground: hexCode
      blue: {
        100: hexCode
        300: hexCode
        400: hexCode
      }
      accent: {
        yellow: hexCode
        red: hexCode
      }
      neutral: {
        100: hexCode
        300: hexCode
        600: hexCode
      }
    }
    fonts: string[]
    fontSizes: {
      small: string
      medium: string
      large: string
    }
    borderRadius: string
    typo: {
      h1: FlattenSimpleInterpolation
      h2: FlattenSimpleInterpolation
      h3: FlattenSimpleInterpolation
      body: FlattenSimpleInterpolation
      'body--bold': FlattenSimpleInterpolation
    }
  }
}
