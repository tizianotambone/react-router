import './App.css'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Products from './pages/Products'
import {BrowserRouter, Routes,Route}from "react-router-dom"
import DefaultLayout from './layouts/DefaultLayout'
import DetailProduct from './pages/detailProducts/DetailProduct'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path='/' Component={Homepage}></Route>
          <Route path='/about' Component={About}></Route>
          <Route path='/product' Component={Products}>
            <Route path=':id' Component={DetailProduct}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
