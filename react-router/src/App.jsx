import { useState } from 'react'
import './App.css'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Products from './pages/Products'
import {browserRouter, routes,route}from "react-router-dom"

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' Component={Homepage}></Route>
        <Route path='/about' Component={About}></Route>
        <Route path='/product' Component={Product}></Route>
        <Route path='/contacts' Component={Contacts}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
