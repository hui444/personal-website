import { ReactNode } from 'react'

import Nav from 'components/Nav'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
    </>
  )
}

export default Layout
