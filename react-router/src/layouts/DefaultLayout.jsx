import React from 'react'
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

function DefaultLayout() {
  return (
    <>
    
    <header>
        <Navbar/>
    </header>

    <main>
        <Outlet/>
    </main>
    </>
  )
}

export default DefaultLayout
