import { DefaultTheme, css } from 'styled-components'

const defaultFont =
  'Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'

const theme: DefaultTheme = {
  colors: {
    pageBackground: '#0F172A',
    blue: {
      100: 'rgba(14, 165, 233, 0.2)',
      300: '#0EA5E9',
      400: '#0284C7',
    },
    accent: {
      yellow: 'rgba(252, 211, 77, 0.3)',
      red: 'rgba(248, 113, 113, 0.3)',
      pink: 'rgba(244, 114, 182, 0.3)',
      purple: 'rgba(167, 139, 250, 0.3)',
      green: 'rgba(52, 211, 153, 0.3)',
      orange: 'rgba(251, 146, 60, 0.3)',
    },
    neutral: {
      100: 'rgba(255, 255, 255, 0.1)',
      200: 'rgba(255, 255, 255, 0.05)',
      300: 'rgba(255, 255, 255, 0.6)',
      400: 'rgba(255, 255, 255, 0.7)',
      600: '#FFFFFF',
    },
    glass: {
      light: 'rgba(255, 255, 255, 0.1)',
      medium: 'rgba(255, 255, 255, 0.15)',
      dark: 'rgba(255, 255, 255, 0.05)',
      border: 'rgba(255, 255, 255, 0.2)',
    },
    state: {
      error: '#EF4444',
      success: '#10B981',
    },
    gradient: {
      primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      secondary: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      accent: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      fun1: 'linear-gradient(135deg, #FF6B6B 0%, #FFE66D 100%)',
      fun2: 'linear-gradient(135deg, #A8E6CF 0%, #FFD3B6 100%)',
      fun3: 'linear-gradient(135deg, #FFAAA5 0%, #FFD3A5 100%)',
      fun4: 'linear-gradient(135deg, #A8D8EA 0%, #AA96DA 100%)',
    },
  },
  fonts: [defaultFont, 'sans-serif'],
  fontSizes: {
    small: '0.875rem',
    medium: '1.5rem',
    large: '3rem',
  },
  borderRadius: '16px',
  shadows: {
    small: '0 2px 4px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 12px rgba(0, 0, 0, 0.15)',
    large: '0 8px 24px rgba(0, 0, 0, 0.2)',
  },
  typo: {
    default: {
      h1: css`
        font-family: ${defaultFont};
        font-size: clamp(3rem, 8vw, 5rem);
        font-weight: 700;
        line-height: 1.2;
        text-align: left;
        letter-spacing: -0.02em;
      `,
      h2: css`
        font-family: ${defaultFont};
        font-size: 1.5rem;
        font-weight: 600;
        line-height: 1.4;
        text-align: left;
        letter-spacing: -0.01em;
      `,
      h3: css`
        font-family: ${defaultFont};
        font-size: 1.125rem;
        font-weight: 500;
        line-height: 1.5;
        text-align: left;
      `,
      body: css`
        font-family: ${defaultFont};
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.6;
      `,
      'body--bold': css`
        font-family: ${defaultFont};
        font-size: 1rem;
        font-weight: 600;
        line-height: 1.6;
      `,
      form: css`
        font-family: ${defaultFont};
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.5;
      `,
    },
    mobile: {
      h1: css`
        font-family: ${defaultFont};
        font-size: clamp(2rem, 8vw, 3rem);
        font-weight: 700;
        line-height: 1.2;
        text-align: left;
        letter-spacing: -0.02em;
      `,
      h2: css`
        font-family: ${defaultFont};
        font-size: 1.25rem;
        font-weight: 600;
        line-height: 1.4;
        text-align: left;
        letter-spacing: -0.01em;
      `,
      h3: css`
        font-family: ${defaultFont};
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.5;
        text-align: left;
      `,
      body: css`
        font-family: ${defaultFont};
        font-size: 0.9375rem;
        font-weight: 400;
        line-height: 1.6;
      `,
      'body--bold': css`
        font-family: ${defaultFont};
        font-size: 0.9375rem;
        font-weight: 600;
        line-height: 1.6;
      `,
      form: css`
        font-family: ${defaultFont};
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.5;
      `,
    },
  },
}

export default theme
