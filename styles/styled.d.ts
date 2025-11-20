import 'styled-components'

type hexCode = `#${string}`
type colorValue = hexCode | string

interface FontTypes {
  h1: FlattenSimpleInterpolation
  h2: FlattenSimpleInterpolation
  h3: FlattenSimpleInterpolation
  body: FlattenSimpleInterpolation
  'body--bold': FlattenSimpleInterpolation
  form: FlattenSimpleInterpolation
}
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      pageBackground: hexCode
      blue: {
        100: colorValue
        300: hexCode
        400: hexCode
      }
      accent: {
        yellow: colorValue
        red: colorValue
        pink: colorValue
        purple: colorValue
        green: colorValue
        orange: colorValue
      }
      neutral: {
        100: hexCode | string
        200: hexCode | string
        300: hexCode | string
        400: hexCode | string
        600: hexCode | string
      }
      state: {
        error: hexCode
        success: hexCode
      }
      glass: {
        light: string
        medium: string
        dark: string
        border: string
      }
      gradient: {
        primary: string
        secondary: string
        accent: string
        fun1: string
        fun2: string
        fun3: string
        fun4: string
      }
    }
    fonts: string[]
    fontSizes: {
      small: string
      medium: string
      large: string
    }
    borderRadius: string
    shadows: {
      small: string
      medium: string
      large: string
    }
    typo: {
      default: FontTypes
      mobile: FontTypes
    }
  }
}
