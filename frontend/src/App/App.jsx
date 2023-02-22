import React from 'react'
import '@/_styles/theme.scss'
import { Layout } from '../_layout'
import { Button } from 'react-bootstrap'
import { BrowserRouter, Route } from 'react-router-dom'
import LoginPage from '../LoginPage'
import HomePage from '../HomePage'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        {/* add routes here */}
        <Route path="/" element={<HomePage />} layout="home" />
        <Route path="/login" element={<LoginPage />} layout="login" />
      </Layout>
    </BrowserRouter>
  )
}

export default App
