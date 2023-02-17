import React, { Suspense } from 'react'
import { Footer } from './Footer';
import { Header } from './Header';
import { Routes, Route } from "react-router-dom";

const Layout = (props) => {
  const { element: RoutedComponent, layout, ...rest } = props;

  // render actual Route from react-router
  const actualRouteComponent = (
    <Route
      {...rest}
      render={props => (
         <RoutedComponent {...props} />
      )}
    />
  );
  return (
    <>
    <Header layout={layout}/>
      <Suspense>
        <Routes>
        {actualRouteComponent}
        </Routes>
      </Suspense>
    <Footer/>
    </>
  )
}

export  {Layout};