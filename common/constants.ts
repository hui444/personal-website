export const NAV_HEIGHT = '3rem'

export const BREAKPOINT = 768

export const MAX_CONTENT_WIDTH = '960px'

export const DATE_WIDTH = '75px'

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i

export const SNACKBAR_ANIMATION_DURATION = 1500 // milliseconds

const dev = process.env.NODE_ENV !== 'production'
export const SERVER = dev
  ? 'http://localhost:3000'
  : 'https://your_deployment.server.com' // TODO: update prod url
