import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'

const Layout = ({ layout }) => {
  console.log(layout)
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export { Layout }
