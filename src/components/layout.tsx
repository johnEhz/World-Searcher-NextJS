import React from 'react'
import Header from './header'
import Footer from './footer'

interface LayoutProps {
    children: JSX.Element;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
        <Header />
        { children }
        <Footer />
    </>
  )
}

export default Layout