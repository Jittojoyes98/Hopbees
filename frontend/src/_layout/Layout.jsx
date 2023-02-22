import React, { Suspense, useEffect } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import { Routes, Route } from 'react-router-dom'

const Layout = (props) => {
  const { element: RoutedComponent, layout, ...rest } = props

  console.log(layout)

  // render actual Route from react-router
  const actualRouteComponent = (
    <Route {...rest} render={(props) => <RoutedComponent {...props} />} />
  )
  return (
    <>
      <Header />
      <Suspense>
        <Routes>{actualRouteComponent}</Routes>
      </Suspense>
      <Footer />
    </>
  )
}

export { Layout }
