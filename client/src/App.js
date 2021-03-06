import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Switch } from 'react-router-dom'

import ApolloProvider from './ApolloProvider'

import './App.scss'

import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'

import { AuthProvider } from './context/auth'
import DynamicRoute from './util/DynamicRoute'

function App() {
  return (
    <ApolloProvider>
      <AuthProvider>

        <BrowserRouter>
          <Container className="pt-5">
            <Switch>
              <DynamicRoute exact path="/" element={<Home/>} authenticated/>
              <DynamicRoute path="/register" element={<Register/>} guest/>
              <DynamicRoute path="/login" element={<Login/>} guest/>
            </Switch>
          </Container>
        </BrowserRouter>

      </AuthProvider>
      
    </ApolloProvider>
  )
}

export default App