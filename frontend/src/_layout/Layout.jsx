import React, { Suspense, useEffect } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import { Routes, Route } from 'react-router-dom'

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
