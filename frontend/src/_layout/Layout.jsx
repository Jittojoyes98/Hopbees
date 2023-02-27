import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'

const Layout = ({ layout }) => {
  return (
    <>
      <Header layout={layout} />
      <Outlet />
      <Footer layout={layout} />
    </>
  )
}

export { Layout }
