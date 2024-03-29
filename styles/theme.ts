import { DefaultTheme, css } from 'styled-components'

const defaultFont = 'Open Sans'

const theme: DefaultTheme = {
  colors: {
    pageBackground: '#FFF',
    blue: {
      100: '#BEE0F2',
      300: '#374785',
      400: '#151E42',
    },
    accent: {
      yellow: '#F8E9A1',
      red: '#F76C6C',
    },
    neutral: {
      100: '#FFF',
      300: '#3C3C3C',
      600: '#000',
    },
    state: {
      error: '#D32F2F',
      success: '#198155',
    },
  },
  fonts: [defaultFont, 'sans-serif', 'Roboto'],
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
  borderRadius: '20px',
  typo: {
    default: {
      h1: css`
        font-family: ${defaultFont};
        font-size: 76px;
        font-weight: 300;
        line-height: 114px;
        text-align: left;
      `,
      h2: css`
        font-family: ${defaultFont};
        font-size: 20px;
        font-weight: 400;
        line-height: 30px;
        text-align: left;
      `,
      h3: css`
        font-family: ${defaultFont};
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        text-align: left;
      `,
      body: css`
        font-family: ${defaultFont};
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
      `,
      'body--bold': css`
        font-family: ${defaultFont};
        font-size: 16px;
        font-weight: 600;
        line-height: 1.5;
      `,
      form: css`
        font-family: ${defaultFont};
        font-size: 14px;
        font-weight: 400;
        line-height: 1.5;
      `,
    },
    mobile: {
      h1: css`
        font-family: ${defaultFont};
        font-size: clamp(26px, 7.5vw, 3rem);
        font-weight: 300;
        line-height: 1.5;
        text-align: left;
      `,
      h2: css`
        font-family: ${defaultFont};
        font-size: 20px;
        font-weight: 400;
        line-height: 1.3;
        text-align: left;
      `,
      h3: css`
        font-family: ${defaultFont};
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
        text-align: left;
      `,
      body: css`
        font-family: ${defaultFont};
        font-size: 14px;
        font-weight: 400;
        line-height: 1.3;
      `,
      'body--bold': css`
        font-family: ${defaultFont};
        font-size: 16px;
        font-weight: 600;
        line-height: 1.5;
      `,
      form: css`
        font-family: ${defaultFont};
        font-size: 14px;
        font-weight: 400;
        line-height: 1.5;
      `,
    },
  },
}

export default theme
