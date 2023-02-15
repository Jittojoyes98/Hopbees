import React, { Children } from 'react'
import { Footer } from './Footer';
import { Header } from './Header';

const Layout = ({children}) => {
  return (
    <>
    <Header/>
    {children}
    <Footer/>
    </>
  )
}

export  {Layout};